import { motion } from "framer-motion";

export  function TeamsPage() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Teams Section */}
      <div className="w-full h-full">
        <div className="">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-4xl font-bold mb-6">Built for Real Teams</h3>
              <p className="text-blue-100 mb-8 text-2xl">
                Whether you're a solo founder, HR leader, finance admin, or recruiter — Zordie agents empower you to work smarter, faster, and more confidently.
              </p>
              <div className="text-4xl font-bold mb-2">One platform.</div>
              <div className="text-4xl font-bold mb-2">Infinite intelligence.</div>
              <div className="text-4xl font-bold">Fully autonomous.</div>
              
              <div className="mt-10">
                <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded-2xl shadow-2xl transition-all transform hover:scale-105 hover:shadow-xl">
                  Get Started Today
                </button>
              </div>
            </div>
            
            <div className=" flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 max-w-md">
                {[...Array(9)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center p-4"
                  >
                    <div className="w-full h-full rounded-md bg-white/20 flex items-center justify-center">
                      <div className="text-white text-opacity-70 text-4xl font-bold">
                        {String.fromCharCode(65 + index)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}