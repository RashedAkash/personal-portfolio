import React from 'react';
import Title from './Title';

const Education = () => {
  return (
    <div>
      <Title title='Education' />
      <header>
   

    <div class="w-full bg-center bg-cover h-[38rem]"  style={{
        backgroundImage: `url('/edu.jpeg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
         
      }}>
        <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div class="text-center">
                <h1 class="text-3xl font-semibold text-white lg:text-4xl">Build your new <span class="text-blue-400">Saas</span> Project</h1>
                <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
        </div>
    </div>
</header>
    </div>
  );
};

export default Education;