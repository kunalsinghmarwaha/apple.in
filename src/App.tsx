import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProductSection from './components/ProductSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.to('.scroll-indicator', {
      y: 20,
      opacity: 0,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        className="min-h-screen relative flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <Hero3D />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Experience Innovation<br />Beyond Imagination
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Discover the future of technology today
          </motion.p>
          
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-sm uppercase tracking-widest">Scroll to explore</p>
            <div className="w-6 h-12 border-2 border-white rounded-full mx-auto mt-4 relative">
              <div className="w-2 h-2 bg-white rounded-full absolute left-1/2 top-2 -translate-x-1/2" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* iPhone 15 Pro */}
      <ProductSection
        title="iPhone 15 Pro"
        description="Titanium. So strong. So light. So Pro."
        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009283815"
        specs={[
          "A17 Pro chip",
          "48MP Main Camera",
          "Titanium Design",
          "USB-C",
          "Action Button",
          "ProRes Video"
        ]}
        price="₹134900"
        colors={["#4a4b4c", "#f3e5dc", "#5c5b57", "#2b3c4c"]}
        link="/iphone-15-pro"
      />

      {/* Apple Watch Series 9 */}
      <ProductSection
        title="Apple Watch Series 9"
        description="Smarter. Brighter. Mightier."
        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s9-select-202309-41-midnight?wid=2048&hei=2048&fmt=jpeg&qlt=80&.v=1693271234163"
        specs={[
          "S9 chip",
          "Double tap gesture",
          "Brighter display",
          "Carbon neutral",
          "Advanced health sensors",
          "Up to 18 hours battery life"
        ]}
        price="₹41900"
        colors={["#2B2B2B", "#EAEAEA", "#F7E5D4", "#E3463D"]}
        link="/watch-series-9"
      />

      {/* AirPods Pro */}
      <ProductSection
        title="AirPods Pro (2nd generation)"
        description="Magic remastered."
        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361"
        specs={[
          "Active Noise Cancellation",
          "Adaptive Audio",
          "Personalized Spatial Audio",
          "H2 chip",
          "Up to 6 hours listening time",
          "MagSafe Charging Case with USB‑C"
        ]}
        price="₹24900"
        link="/airpods-pro"
      />

      {/* MacBook Pro */}
      <ProductSection
        title="MacBook Pro"
        description="Mind-blowing. Head-turning."
        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673229"
        specs={[
          "M3 Pro or M3 Max chip",
          "Up to 36-core GPU",
          "Up to 128GB unified memory",
          "Up to 22 hours battery life",
          "Liquid Retina XDR display",
          "1080p FaceTime HD camera"
        ]}
        price="₹169900"
        colors={["#2B2B2B", "#F3F3F3"]}
        link="/macbook-pro"
      />

      {/* iPad Pro */}
      <ProductSection
        title="iPad Pro"
        description="Supercharged by M2"
        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202212?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1670887557122"
        specs={[
          "M2 chip",
          "12.9-inch Liquid Retina XDR display",
          "ProMotion technology",
          "Apple Pencil hover",
          "Thunderbolt / USB 4",
          "5G cellular"
        ]}
        price="₹81900"
        colors={["#2B2B2B", "#F3F3F3"]}
        link="/ipad-pro"
      />
    </div>
  );
}

export default App;