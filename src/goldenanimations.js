import React from 'react';
import { motion } from 'framer-motion';

const GoldenAnimations = () => {
  return (
    <section id="golden-animations" className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <svg className="w-full h-64" viewBox="0 0 200 200">
              <title>Guitar Player</title>
              <g stroke="#FFD700" strokeWidth="2" fill="none">
                <motion.path
                  d="M100 30 L100 100 L70 150 M100 100 L130 150 M70 60 L130 60"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.ellipse
                  cx="100" cy="170" rx="30" ry="10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </g>
            </svg>
            <h3 className="text-2xl font-semibold mt-4 text-gold">Guitarist</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <svg className="w-full h-64" viewBox="0 0 200 200">
              <title>Female Singer</title>
              <g stroke="#FFD700" strokeWidth="2" fill="none">
                <motion.path
                  d="M100 30 L100 120 M80 180 Q100 160 120 180 M70 90 Q100 70 130 90"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.circle
                  cx="100" cy="50" r="20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </g>
            </svg>
            <h3 className="text-2xl font-semibold mt-4 text-gold">Singer</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <svg className="w-full h-64" viewBox="0 0 200 200">
              <title>Acting Group</title>
              <g stroke="#FFD700" strokeWidth="2" fill="none">
                <motion.path
                  d="M50 100 L50 150 M100 80 L100 150 M150 100 L150 150 M30 180 Q100 140 170 180"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.circle cx="50" cy="70" r="15" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                <motion.circle cx="100" cy="50" r="15" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.7 }} />
                <motion.circle cx="150" cy="70" r="15" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.9 }} />
              </g>
            </svg>
            <h3 className="text-2xl font-semibold mt-4 text-gold">Acting Group</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoldenAnimations;