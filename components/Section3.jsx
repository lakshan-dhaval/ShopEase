import { Collections } from '@/app/constant';
import React from 'react';

const Collection = () => {
  return (
    <div className='flex justify-evenly mt-5 mb-5'>
      {Collections.map((item, index) => (
        <div key={index} className='relative w-[729px] h-[413px] overflow-hidden group'>
          <img 
            src={item.image} 
            className='w-full h-full object-cover transition-transform duration-500 ease-in-out delay-150 group-hover:scale-110' 
            alt={item.title} 
          />
          <div className='absolute p-10 inset-0 bg-black bg-opacity-10 flex flex-col items-start justify-center text-white'>
            <p className='text-[12px] font-normal uppercase'>{item.title}</p>
            <h2 className='text-3xl font-bold mt-2'>{item.para}</h2>
            {item.buttonText && (
              <button className='mt-4 bg-blue-500 rounded-full text-white px-10 py-5 font-semibold opacity-0 translate-y-4 transition-all duration-700 ease-in-out delay-200 group-hover:opacity-100 group-hover:translate-y-0'>
                {item.buttonText}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;