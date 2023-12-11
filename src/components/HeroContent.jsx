import Image from 'next/image';
import skill from '../../public/Untitled design (1).png'

const HeroContent = () => {
  return (
    <div>
      <header className="">
   

    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg space-y-3">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">JavaScript Developer
 <br />My name is <span className="text-blue-500 ">Rashed Hossain</span></h1>
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400">I can build your project on your required time as you want urgent delivery. I can do that within 5-6 hours for one page. My primary skill is responsive page building using HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React, NEXT Js Figma/PSD to HTML5 conversion. </p>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Contact me</button>
                </div>
            </div>

            <div className="flex items-end justify-center md:justify-end w-full mt-6 lg:mt-0 lg:w-1/2">
               <Image src={skill} alt=' img' width={300} height={400} />
            </div>
        </div>
    </div>
</header>
    </div>
  );
};

export default HeroContent;