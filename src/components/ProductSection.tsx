import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

interface ProductProps {
  title: string;
  description: string;
  image: string;
  specs: string[];
  link: string;
  price?: string;
  colors?: string[];
}

const ProductSection: React.FC<ProductProps> = ({ 
  title, 
  description, 
  image, 
  specs, 
  link,
  price,
  colors = []
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const productRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.from(productRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={productRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {description}
            </motion.p>
            {price && (
              <motion.p 
                className="text-2xl text-white font-semibold"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                From {price}
              </motion.p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-[600px] relative overflow-hidden rounded-2xl">
                <img
                  ref={imageRef}
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl" />
                
                {/* Floating specs */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {specs.map((spec, index) => (
                    <div
                      key={index}
                      className="absolute text-white text-sm font-medium bg-black/80 px-3 py-1 rounded-full"
                      style={{
                        left: `${Math.random() * 60 + 20}%`,
                        top: `${Math.random() * 60 + 20}%`,
                        transform: 'translate(-50%, -50%)',
                        animation: `float ${Math.random() * 2 + 2}s ease-in-out infinite`
                      }}
                    >
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="text-white">
              <div className="mb-8">
                {colors.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg mb-3">Available Colors</h3>
                    <div className="flex space-x-3">
                      {colors.map((color, index) => (
                        <motion.div
                          key={index}
                          className="w-8 h-8 rounded-full cursor-pointer"
                          style={{ backgroundColor: color }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                <ul className="space-y-4">
                  {specs.map((spec, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-lg">{spec}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.a
                href={link}
                className="inline-block mt-8 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Buy Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductSection;