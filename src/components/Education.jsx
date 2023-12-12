import React from 'react';
import Title from './Title';

const Education = () => {
  return (
    <div>
      <div className=' text-center mt-10'>
         <Title title='Education' />
     </div>
      <header className="">
    

    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-2xl font-medium text-gray-800 dark:text-white lg:text-4xl leading-10">BACHALOR DIGREE
   <br/> JAN 1018 - MAY 2022 <span className="text-pink-700 ">Satkhira Govt. College</span></h1>
                    
                    
                    
                    
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                 <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl leading-10">Web Developer
   <br/> July 2023 - Dec 2023 <span className="text-pink-700 ">Programming Hero</span></h1>
                    
                   
                    
                    
                </div>
            </div>
        </div>
    </div>
</header>
    </div>
  );
};

export default Education;