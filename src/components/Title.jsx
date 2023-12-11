import { motion, useScroll } from "framer-motion"

const Title = ({title}) => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.h2 style={{ scaleX: scrollYProgress }} className=" font-bold flex  text-5xl pb-3 mb-10 border-b-4 border-cyan-500 text-pink-700">{title }</motion.h2>
    </div>
  );
};

export default Title;