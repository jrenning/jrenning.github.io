import React from 'react'

function Greeting() {
  return (
    <div className="font-bold text-secondary_color flex flex-col justify-center items-center  mt-[150px]">
      <span className="text-5xl md:text-6xl">Jack Renning</span>
      <div className=" h-[2px] bg-black md:w-[400px] w-[300px] mt-2 dark:bg-white"></div>
      <div className='text-lg'>Engineer & Programmer</div>
    </div>
  );
}

export default Greeting