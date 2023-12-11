"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../public/js.png'
import img2 from '../../public/react.png'
import img3 from '../../public/next.png'
import img4 from '../../public/node-js.png'
import img5 from '../../public/mongodb.png'
import img6 from '../../public/express.png'
import img7 from '../../public/html.png'
import img8 from '../../public/css.png'
import img9 from '../../public/tailwind.png'
import img10 from '../../public/mui.png'
import img11 from '../../public/Firebase.png'
import img12 from '../../public/figma.png'
import Image from "next/image";
import { motion, useScroll } from "framer-motion"

const MySkills = () => {
  const { scrollYProgress } = useScroll();
  const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
  return (
    <div>
       <div>
        <motion.h2 style={{ scaleX: scrollYProgress }}  className=" font-bold  text-5xl pb-3 mb-16 border-b-4 border-cyan-500 text-pink-700 flex justify-center">MY Skills</motion.h2>
        <Slider {...settings}>
          <div>
            <Image
              src={img1}
              alt="img"
              width={80}
              height={80}
            />
          </div>
          <div>
            <Image
              src={img2}
              alt="img"
              width={80}
              height={80}
            />
          </div>
          <div>
            <Image
              src={img3}
              alt="img"
              width={80}
              height={150}
            />
          </div>
          <div>
            <Image
              src={img4}
              alt="img"
              width={80}
              height={80}
            />
          </div>
          <div>
            <Image
              src={img5}
              alt="img"
              width={80}
              height={80}
            />
          </div>
          <div>
            <Image
              src={img6}
              alt="img"
              width={80}
              height={80}
            />
          </div>
          <div>
            <Image
              src={img7}
              alt="img"
              width={80}
              height={80}
            />
          </div>
          <div>
            <Image
              src={img8}
              alt="img"
              width={80}
              height={80}
            />
          </div>
          <div>
            <Image
              src={img9}
              alt="img"
              width={80}
              height={80}
            />
          </div>
          <div>
            <Image
              src={img10}
              alt="img"
              width={80}
              height={80}
            />
          </div>
          <div>
            <Image
              src={img11}
              alt="img"
              width={80}
              height={80}
            />
          </div>
          <div>
            <Image
              src={img12}
              alt="img"
              width={80}
              height={80}
            />
          </div>
          
        </Slider>
      </div>
    </div>
  );
};

export default MySkills;