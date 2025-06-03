import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const OurGallery = () => {
  const content = [
    { id: 1, image: "/ogim1.png" },
    { id: 2, image: "/ogim3.png" },
    { id: 3, image: "/ogim4.png" },
    { id: 4, image: "/ogimg4.png" },
    { id: 5, image: "/ogimg5.png" },
    { id: 6, image: "/ogimg6.png" },
    { id: 7, image: "/ogimg7.png" },
    { id: 8, image: "/ogimg8.png" },
  ];

  return (
    <section className="w-full py-16 max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <h1 className="lg:text-[96px] text-[30px]  font-bold text-[#4A4A4A] leading-tight font">
          Our Gallery
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-sm:gap-2">
        {content.map((item) => (
          <div
            key={item.id}
            className="lg:w-[300px] overflow-hidden"
          >
            <Image
              src={item.image}
              alt={`fruit-${item.id}`}
              width={330}
              height={item.id % 2 === 0 ? 432 : 388}
              className="object-cover w-full h-auto max-sm:h-[155px] max-sm:w-[120%]"
            />
          </div>
        ))}

      </div>
      <div className='flex justify-center lg:mt-32 mt-12'>
        <Button className="rounded-full  w-36 lg:text-[20px] lg:py-5 lg:px-6 bg-gradient-to-r from-[#F8AC25] to-[#DA743D] hover:from-[#DA743D] hover:to-[#F8AC25] transition-all">
          View All
        </Button></div>
    </section>
  );
};

export default OurGallery;


// import React from 'react'

// const OurGallery = () => {
//     const content=[
//         {id:1,image:"/ogim1.png"},
//         {id:2,image:"/ogim3.png"},
//         {id:3,image:"/ogim4.png"},
//         {id:4,image:"/ogimg4.png"},
//         {id:5,image:"/ogimg5.png"},
//         {id:6,image:"/ogimg6.png"},
//         {id:7,image:"/ogimg7.png"},
//         {id:8,image:"/ogimg8.png"},
        
//     ]
//     return (
//         <section className='w-full  py-16  max-w-7xl mx-auto'>
//             <div className='lg:w-[55%] lg:pr-12 mb-8 lg:mb-0'>
//                 <h1 className='text-4xl sm:text-6xl lg:text-[96px] font-bold text-[#4A4A4A] leading-tight mb-6 font'>
//                     Our Gallery
//                 </h1>
//             </div>
//         </section>
//     )
// }

// export default OurGallery
