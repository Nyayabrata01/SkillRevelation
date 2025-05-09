import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 hero-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary-100 text-primary-800 font-medium text-sm">
                Innovative ERP Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Comprehensive <span className="text-gradient">Management Systems</span> for Every Need
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                Elevate your operations with our cutting-edge ERP solutions tailored for educational institutions, businesses, and training centers.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-700 hover:bg-primary-800 text-white font-medium transition-colors shadow-sm hover:shadow-md"
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-700 font-medium transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-medium">
                <img 
                  src="https://images.pexels.com/photos/8867430/pexels-photo-8867430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Digital transformation" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-medium p-4 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-success-100">
                    <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Trusted by 1000+ institutions</p>
                    <p className="text-xs text-gray-500">Across 20+ countries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-center text-gray-500 mb-6">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle'].map((company) => (
              <div key={company} className="text-lg md:text-xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;