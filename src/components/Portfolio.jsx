import img1 from '../../public/fitnesspng.png'
import img2 from '../../public/eventlab.png'
import img3 from '../../public/fruit.png'
import img4 from '../../public/flowerpng.png'
import Title from './Title';

const Portfolio = () => {
  return (
    <div>
      <div>

      </div>
      <section className="">
    <div className="container px-6 py-10 mx-auto">
          <div className=' text-center'>
            <div className=' text-center'>
               <Title title='Portfolio' />
           </div>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
        </div>


        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 ">
           

            <a href="https://fitness-b1aa9.web.app/">
               <div className="overflow-hidden bg-cover rounded-xl cursor-pointer h-96 group"
                 style={{
        backgroundImage: `url('/fitnesspng.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
         
      }}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Fitness Gym</h2>
                    <p className="mt-2 font-bold text-xl tracking-wider text-pink-700 uppercase ">React, node, express, firebase, tailwind</p>
                </div>
            </div>
           </a>

            <a href="https://event-lab-551ad.web.app/">
              <div className="overflow-hidden bg-cover rounded-xl cursor-pointer h-96 group"
                 style={{
        backgroundImage: `url('/eventlab.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
         
      }}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">EventLab</h2>
                    <p className="mt-2 font-bold text-xl tracking-wider text-pink-700 uppercase ">React, Firebase</p>
                </div>
            </div>
            </a>

            <a href="https://rashedakash.github.io/fruit-brust/">
              <div className="overflow-hidden bg-cover rounded-xl cursor-pointer h-96 group"
                 style={{
        backgroundImage: `url('/fruit.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
         
      }}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Fruit Brust</h2>
                    <p className="mt-2 font-bold text-xl tracking-wider text-pink-700 uppercase ">Html, css, tailwind</p>
                </div>
            </div>
            </a>
            <a href="https://rashedakash.github.io/flower-shop/">
              <div className="overflow-hidden bg-cover rounded-xl cursor-pointer h-96 group"
                 style={{
        backgroundImage: `url('/flowerpng.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
         
      }}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Flower Shop</h2>
                    <p className="mt-2 font-bold text-xl tracking-wider text-pink-700 uppercase ">Html, css , tailwind </p>
                </div>
            </div>
            </a>
        </div>
    </div>
</section>
    </div>
  );
};

export default Portfolio;