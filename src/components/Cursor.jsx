"use client"
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.addEventListener("mousemove", mouseMove);
    }
  },[])
  return (
    <motion.div
      animate={{x:position.x, y:position.y}}
      className=' z-20 w-[50px] h-[50px] rounded-full border border-cyan-500'>
      
    </motion.div>
  );
};

export default Cursor;