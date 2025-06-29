import httpx
import json
import base64
from typing import Optional, Dict, Any
from app.core.config import settings

def get_session_id_from_token(token: str) -> Optional[str]:
    # JWT format: header.payload.signature
    try:
        payload_b64 = token.split(".")[1]
        # Pad base64 if needed
        padding = '=' * (-len(payload_b64) % 4)
        payload_b64 += padding
        payload = json.loads(base64.urlsafe_b64decode(payload_b64))
        # Clerk uses 'sid' or 'session_id' for session id
        return payload.get("sid") or payload.get("session_id")
    except Exception as e:
        print(f"Error decoding Clerk token: {str(e)}")
        return None

async def verify_clerk_token(token: str) -> Optional[Dict[str, Any]]:
    """
    Verify a Clerk session token and return user information
    """
    try:
        headers = {
            "Authorization": f"Bearer {settings.CLERK_SECRET_KEY}",
            "Content-Type": "application/json"
        }
        session_id = get_session_id_from_token(token)
        if not session_id:
            print("No session_id found in Clerk token")
            return None

        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"https://api.clerk.com/v1/sessions/{session_id}",
                headers=headers
            )
            if response.status_code != 200:
                return None

            session_data = response.json()
            user_id = session_data.get("data", {}).get("user_id")
            if not user_id:
                return None
            
            user_response = await client.get(
                f"https://api.clerk.com/v1/users/{user_id}",
                headers=headers
            )
            if user_response.status_code != 200:
                return None
    except Exception as e:
        return None

async def get_user_from_clerk_token(token: str) -> Optional[Dict[str, Any]]:
    """
    Get user information from a Clerk token
    
    This function verifies the token and extracts user information.
    """
    user_data = await verify_clerk_token(token)
    
    if not user_data:
        return None
        
    # Extract relevant user information
    email_addresses = user_data.get("email_addresses", [])
    primary_email = next((email.get("email_address") for email in email_addresses if email.get("primary")), None)
    
    first_name = user_data.get("first_name", "")
    last_name = user_data.get("last_name", "")
    
    return {
        "id": user_data.get("id"),
        "email": primary_email,
        "first_name": first_name,
        "last_name": last_name,
        "full_name": f"{first_name} {last_name}".strip()
    }
