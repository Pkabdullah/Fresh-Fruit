"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Gallery = () => {
    const fruits = [
        { id: 1, image: '/bn1.png', name: 'Orange' },
        { id: 2, image: '/bn2.png', name: 'Apple' },
        { id: 3, image: '/bn3.png', name: 'Lemon' }
    ];
    const imageSet1 = [
        { id: 1, image: "/ogim1.png" },
        { id: 2, image: "/ogim3.png" },
        { id: 3, image: "/ogim4.png" },
        { id: 4, image: "/ogimg4.png" },

    ]
    const imageSet2 = [
        { id: 1, image: "/glimg3.png" },
        { id: 2, image: "/glimg4.png" },
    ]
    const imageSet3 = [
        { id: 5, image: "/ogimg5.png" },
        { id: 6, image: "/ogimg6.png" },
        { id: 7, image: "/ogimg7.png" },
        { id: 8, image: "/ogimg8.png" },

    ]
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % fruits.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + fruits.length) % fruits.length);
    };
    return (
        <section className=" -mt-[2.5%]">

            <div className="relative w-full h-[800px] max-sm:hidden">
                <div className="absolute inset-0 ">
                    <Image
                        src="/bg-main.png"
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Background"
                        priority
                    />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-10 font max-w-7xl mx-auto  lg:-mt-48">
                    <h1 className='font-bold text-4xl sm:text-6xl lg:text-[128px] text-[#493E3E]'>
                        Gallery
                    </h1>
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
                <h1 className="text-[50px] font-bold text-[#493E3E] font leading-tight mb-3 font">
                   Fruit
                </h1>
                </div>

            {/* Get The Section */}
            <div className="flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 py-12 lg:py-16 max-w-7xl mx-auto max-sm:pt-[110%]">
                {/* Content */}
                <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 order-2 lg:order-1">
                    <h2 className="text-4xl lg:text-[96px] xl:text-7xl font-bold text-[#493E3E] mb-4 font max-sm:mt-12">
                        Get The
                    </h2>
                    <p className="text-[#6B9553] text-xl lg:text-2xl font-medium mb-6">
                        Nutrition Category Fruit
                    </p>
                    <p className="text-gray-700 text-[14px] lg:text-lg leading-relaxed max-w-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry been the<br /> industry's standard dummyLorem Ipsum is simply dummy text of the printing and <br /> typesetting industry been the industry's standard dummyLorem
                    </p>
                </div>

        
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
                    <Image src={"/glimg1.png"} width={750}
                        height={160} />
                </div>

            </div>

           
            <div className="flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 py-12 max-sm:py-0 lg:py-16 max-w-7xl mx-auto">
                {/* Banana Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                    <Image src={"/glimg2.png"} width={450}
                        height={160}  className='max-sm:w-[350]'/>
                </div>


                {/* Content */}
                <div className="w-full lg:w-1/2 lg:pl-8">
                    <h2 className="text-4xl lg:text-[96px] xl:text-7xl font-bold text-[#493E3E] mb-4 font">
                        Every Day
                    </h2>
                    <p className="text-[#6B9553] text-xl lg:text-2xl font-medium mb-6 ">
                        Fresh Food
                    </p>
                    <p className="text-gray-700 text-[14px] line-clamp-5 lg:text-lg leading-relaxed max-w-lg max-sm:mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry been the<br /> industry's standard dummyLorem Ipsum is simply dummy text of the printing and <br /> typesetting industry been the industry's standard dummyLorem
                    </p>
                </div>
            </div>

            <div className="relative w-full h-[400px] lg:h-[440px] overflow-hidden max-w-fit mx-auto">
                {/* Fruit Background */}
                <div className=''>
                    <Image src={"/galimg1.png"} width={1940} height={700} />

                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center ">
                    <div className="lg:bg-white/90 max-sm:bg-white/10 p-8 lg:p-12 max-w-4xl mx-4 lg:mx-8 ">
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                            {/* Left Content */}
                            <div className="flex-1 text-center lg:text-left  max-sm:hidden ">
                                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 font ">
                                    Cuisine
                                </h1>
                                <h2 className="text-xl lg:text-2xl text-[#020301] font-medium mb-6 ">
                                    Usingvarious
                                </h2>
                                <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-md">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry been the industry's standard dummy. Lorem Ipsum is simply
                                    dummy text of
                                </p>
                            </div>
                            <div className="flex-1 text-center lg:text-left  lg:hidden  -mt-32">
                                <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 font ">
                                    Cuisine
                                </h1>
                                </div>
                            {/* Right Content - Fruit Carousel */}
                            <div className="flex-1 flex items-center justify-center">
                                <div className="relative">
                                    <h3 className="text-xl lg:text-2xl text-[#6B9553] font-medium text-center mb-6">
                                        Usingvarious
                                    </h3>

                                    {/* Carousel Container */}
                                    <div className="flex items-center gap-4">
                                        {/* Previous Button */}
                                        <button
                                            onClick={prevSlide}
                                            className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                                        </button>

                                        {/* Fruit Items */}
                                        <div className="flex gap-4">
                                            {fruits.map((fruit, index) => (
                                                <div
                                                    key={fruit.id}
                                                    className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br  rounded-full shadow-lg transition-transform duration-300 ${index === currentSlide ? 'scale-110 ring-4 ring-white' : 'scale-100'
                                                        }`}
                                                >
                                                    <Image src={fruit.image} width={150} height={160} />
                                                    <div className="w-full h-full rounded-full flex items-center justify-center">
                                                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Next Button */}
                                        <button
                                            onClick={nextSlide}
                                            className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 max-sm:py-10 lg:hidden -mt-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {imageSet1.map((item) => (
                        <div key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <img src={item.image} alt={`fruit-${item.id}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {imageSet2.map((item) => (
                        <div key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow h-[700px]">
                            <img src={item.image} alt={`fruit-${item.id}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {imageSet3.map((item) => (
                        <div key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <img src={item.image} alt={`fruit-${item.id}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 max-sm:py-0 max-sm:hidden">
                {/* First Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {imageSet1.map((item) => (
                        <div key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <img
                                src={item.image}
                                alt={`fruit-${item.id}`}
                                className="w-full lg:h-[350px] md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {imageSet2.map((item) => (
                        <div key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow h-[700px] ">
                            <img
                                src={item.image}
                                alt={`fruit-${item.id}`}
                                className="w-[680px] lg:h-[700px] md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {imageSet3.map((item) => (
                        <div key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <img
                                src={item.image}
                                alt={`fruit-${item.id}`}
                                className="w-full lg:h-[350px] md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
// import Image from 'next/image'
// import React from 'react'

// const Gallery = () => {
//     return (
//         <section className="relative w-full -mt-[2.5%] ">

//             <div className="relative w-full h-[800px]">
//                 <div className="absolute inset-0 ">
//                     <Image
//                         src="/bg-main.png"
//                         fill
//                         style={{ objectFit: 'cover' }}
//                         alt="Background"
//                         priority
//                     />
//                 </div>
//                 <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-10 font max-w-7xl mx-auto">
//                     <h1 className='font-bold text-4xl sm:text-6xl lg:text-[128px] text-[#493E3E]'>
//                         Gallery
//                     </h1>
//                 </div>
//             </div>

//             <div className="flex flex-col lg:flex-row-reverse items-center px-[12%]">
//                 {/* Apple Image */}
//                 <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
//                     <div className="w-full lg:w-[80%] flex justify-center lg:justify-start mb-8 lg:mb-0">

//                         <div
//                             className={` flex items-center justify-center
//                              rounded-2xl rounded-bl-[80px]`}
//                         >
//                             <Image src={"/glimg1.png"} width={750}
//                                 height={160} />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Apple Content */}
//                 <div className="w-full lg:w-[20%]lg:pr-12">
//                     <h2 className="text-4xl lg:text-[96px] font-bold font mb-4">
//                         Get the
//                     </h2>
//                     <p className="text-[#6B9553] text-lg mb-6">
//                         Nutrition Category Fruit
//                     </p>
//                     <p className="text-gray-700 text-base leading-relaxed">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry been the<br /> industry's standard dummyLorem Ipsum is simply dummy text of the printing and <br /> typesetting industry been the industry's standard dummyLorem
//                     </p>
//                 </div>
//             </div>

//             <div className="flex flex-col lg:flex-row   mb-16 lg:mb-24 px-[12%]">

//                 <div className="w-full lg:w-[60%] flex justify-center lg:justify-start mb-8 lg:mb-0">

//                     <div
//                         className={` flex items-center justify-center
//                       rounded-2xl rounded-bl-[80px] `}
//                     >
//                         <Image src={"/glimg2.png"} width={250}
//                             height={160} />
//                     </div>
//                 </div>

//                 <div className="b py-16 px-4 sm:px-6 lg:px-8 ">
//                     <div className="max-w-6xl mx-auto">
//                         <div className="w-full lg:w-[40%] ">
//                             <h2 className="text-4xl lg:text-[96px] font-bold font   mb-4">
//                                 Every Day
//                             </h2>
//                             <p className=" text-[#6B9553] text-lg mb-6">
//                                 Fresh Food
//                             </p>
//                             <p className="text-gray-700 text-base leading-relaxed">
//                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry been the
//                                 industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and
//                                 typesetting industry been the industry's standard dummy.Lorem Ipsum is simply
//                                 dummy text of the printing and typesetting industry been the industry's standard
//                                 dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry
//                                 been the industry's standard dummy
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </section>
//     )
// }

// export default Gallery
