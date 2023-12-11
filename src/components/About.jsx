"use client"
import Title from './Title';
import img from '../../public/me.png'
import Image from 'next/image';


const About = () => {
  return (
    <div>
      <header className=" py-16">
        <div className=' text-center'>
          <Title title='About me' />
    </div>

    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                <button className="w-3 h-3 mx-2 bg-pink-700 rounded-full lg:mx-0 focus:outline-none"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-pink-700"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-pink-700"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-pink-700"></button>
            </div>

            <div className="max-w-lg lg:mx-12 lg:order-2">
                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">I'm JavaScript Developer</h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Hello! I'm <span className=' text-pink-700'>Rashed Hossain</span>, a passionate web developer who loves creating captivating experiences on the internet. My journey into web development began in 2023 when I started experimenting with customizing Tumblr themes. Through tinkering with HTML and CSS, even something as simple as editing a reblog button, I discovered my fascination for building things online.

I believe in the power of the web to connect people and create meaningful interactions. With a keen eye for detail and a commitment to user-centric design, I strive to deliver exceptional web solutions that leave a lasting impact.

Let's collaborate and turn your ideas into remarkable digital experiences!</p>
                <div className="mt-6">
                    <a href="#" className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-pink-700 rounded-lg  hover:bg-pink-700 lg:mx-0 lg:w-auto focus:outline-none">Download Resume   </a>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <Image
              src={img}
              alt="img"
              width={400}
              height={400}
            
            />
        </div>
    </div>
</header>
    </div>
  );
};

export default About;