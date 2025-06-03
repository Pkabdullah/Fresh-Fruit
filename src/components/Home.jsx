// HomePage.tsx
"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <section className="relative w-full -mt-[2.5%]">
            <div className="relative w-full  mx-auto max-sm:hidden">
                <div className="relative w-full h-[800px]">
                    <div className="absolute inset-0">
                        <Image 
                            src="/bg-main3.png" 
                            fill
                            style={{ objectFit: 'cover' }}
                            alt="Background"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-10 font max-w-7xl mx-auto  lg:-mt-48">
                        <h1 className='font-bold text-4xl sm:text-6xl lg:text-[128px] text-[#493E3E]'>
                            Home
                        </h1>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 -z-10 lg:hidden max-sm:-mt-[7%]">
                <Image
                    src="/mb-banner1.png"
                    alt="Background"
                    // fill
                    style={{ objectFit: "cover" }}
                    width={613}
                    height={600}
                />
            </div>

            {/* Content aligned to the left */}
            <div className="relative z-10 px-6 pt-10 max-w-xs lg:hidden ">
                <h1 className="text-[40px] font-bold text-[#493E3E] font leading-tight mb-3">
                    Make a fresh <br /> food delivery
                </h1>

                <p className="text-[12px] text-[#4F4F4F] mb-5 leading-relaxed">
                    We quickly deliver high-quality and fresh products to your home. Order now with a free shipping coupon!
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mb-6">
                    <button className="bg-[#F88A25] text-white text-[12px] font-semibold px-4 py-2 rounded-full">
                        Order now
                    </button>
                    <button className="border border-[#493E3E] text-[#493E3E] text-[12px] font-semibold px-4 py-2 rounded-full">
                        Write to Us
                    </button>
                </div>
            </div>
          
        </section>
    );
};

export default HomePage;

// "use client"
// import Image from 'next/image'
// import React, { useEffect } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const HomePage = () => {
//     useEffect(() => {
//         AOS.init({ 
//             duration: 1000,
//             once: true 
//         });
//     }, []);

//     return (
//       <section className="relative w-full">
//     <div className="relative w-full max-w-7xl mx-auto">

//                 <div className="relative w-full h-[800px]">
//                         <div className="absolute inset-0">
//                             <Image 
//                                 src="/bg-main1.png" 
//                                 fill
//                                 style={{ objectFit: 'cover' }}
//                                 alt="Background"
//                                 priority
//                             />
//                         </div>                  
//                     <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-32 lg:-mt-48 font">
//                         <h1 className='font-bold text-4xl sm:text-6xl lg:text-[128px] text-[#493E3E]'>
//                             Home
//                         </h1>
//                     </div>
//                 </div>
//             </div>

       
//             <div className=' lg:-mt-48'>
//                 <div className='flex justify-end mt-8' data-aos="fade-left">
//                     <Image 
//                         src="/mainimg1.png" 
//                         width={322} 
//                         height={240} 
//                         alt="Main image"
                       
//                     />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default HomePage
// "use client"
// import Image from 'next/image'
// import React, { useEffect } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const HomePage = () => {
//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);
//     return (
//         // <section className='bg-[url("/bg-main1.png")] bg-cover bg-center w-full h-[800px] '>
//         <section className='max-w-8xl '>

//             <div className='pt-[10%]'>
//                 <Image src={"/bg-main1.png"} width={1351} height={1069} />

//             </div>

//             <div className="absolute inset-0 flex flex-col justify-center text-white px-4 sm:px-6 lg:px-24 max-w-7xl mx-auto  ">
//                 <h1 className='font text-[128px]  text-[#493E3E]'>Home</h1>
//             </div>

//             <div className='flex justify-end' data-aos="fade-left">
//                 <Image src={"/mainimg1.png"} width={422} height={240} />
//             </div>
//         </section>
//     )
// }

// export default HomePage
