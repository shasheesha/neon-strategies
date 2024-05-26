"use client"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExpandableSection: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.25, // Trigger when at least 25% is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ width: '100vw', marginLeft: 0 });
    } else {
      controls.start({ width: '80%', marginLeft: '10%' });
    }
  }, [controls, inView]);

  return (
    <motion.section ref={ref} animate={controls} initial={{ width: '80%', marginLeft: '10%' }} transition={{ duration: 0.5 }} className="h-screen bg-gray-300" >
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">Expandable Section</h1>
        <p>This section expands to the screen edges when more than 25% visible and contracts when less than 25% visible.</p>
      </div>
    </motion.section>
  );
};

export default ExpandableSection;
