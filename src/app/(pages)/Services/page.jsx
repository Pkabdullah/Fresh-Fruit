"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TheCompany from '@/components/TheCompany';
import { Button } from '@/components/ui/button';

const Services = () => {
    const content = [
        {
            id: 1,
            bgColor: "bg-gradient-to-br from-red-500 to-red-600",
            image: "/osimg1.png",
            primaryText: "Nectarine",
            secondaryText: "Lorem Ipsum is simply"
        },
        {
            id: 2,
            bgColor: "bg-gradient-to-br from-red-400 to-pink-400",
            image: "/osimg2.png",
            primaryText: "Apples",
            secondaryText: "Lorem Ipsum is simply"
        },
        {
            id: 3,
            bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
            image: "/osimg3.png",
            primaryText: "Oranges",
            secondaryText: "Lorem Ipsum is simply"
        },
        {
            id: 4,
            bgColor: "bg-gradient-to-br from-yellow-300 to-orange-300",
            image: "/osimg4.png",
            primaryText: "Apricots",
            secondaryText: "Lorem Ipsum is simply"
        },
        {
            id: 5,
            bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
            image: "/osimg5.png",
            primaryText: "Mandarins",
            secondaryText: "Lorem Ipsum is simply"
        },
        {
            id: 6,
            bgColor: "bg-gradient-to-br from-green-400 to-green-500",
            image: "/osimg6.png",
            primaryText: "Kiwis",
            secondaryText: "Lorem Ipsum is simply"
        },
        {
            id: 7,
            bgColor: "bg-gradient-to-br from-red-600 to-red-700",
            image: "/osimg7.png",
            primaryText: "Cherries",
            secondaryText: "Lorem Ipsum is simply"
        },
        {
            id: 8,
            bgColor: "bg-gradient-to-br from-pink-400 to-red-400",
            image: "/osimg8.png",
            primaryText: "Peaches",
            secondaryText: "Lorem Ipsum is simply"
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (

        <section className="-mt-[2.5%] ">
            <div className=" mx-auto max-sm:hidden">
                <div className="relative w-full h-[800px]">
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
                            Services
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


            <div className="relative z-10 px-6 pt-32 max-w-xs lg:hidden  ">
                <h1 className="text-[40px] font-bold text-[#493E3E] font leading-tight mb-3 -mt-14">
                    The Services
                </h1>
            </div>

            <div className='flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto max-sm:pt-[140%]'>

                <div className='lg:w-[55%] lg:pr-12 mb-8 lg:mb-0'>
                    <h1 className='text-[30px]  sm:text-6xl lg:text-[96px] font-bold text-[#4A4A4A] leading-tight mb-6 font'>
                        Our Services
                    </h1>
                    <h2 className='text-[18px] sm:text-xl lg:text-[22px] text-[#6B9553] font-medium mb-6'>
                        Lorem Ipsum is simply dummy
                    </h2>
                    <div className='lg:w-[85%] mb-8 '>
                        <p className='text-gray-700 text-[14px] lg:text-lg leading-relaxed line-clamp-5'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry been
                            the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry been the industry's standard dummy. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry been the industry's standard dummy. Lorem
                            Ipsum is simply dummy text of the printing and typesetting industry been the industry's
                            standard dummy.
                        </p>
                    </div>
                    <Button className="bg-gradient-to-r from-[#F8AC25] to-[#DA743D] hover:from-[#DA743D] hover:to-[#F8AC25] text-white max-sm:px-8  max-sm:py-3 rounded-full lg:text-lg font-medium transition-all duration-300">
                        Read More
                    </Button>
                </div>


                <div className='lg:w-[45%] flex justify-center lg:justify-end'>
                    <div className="relative">
                        <Image
                            src="/servimg1.png"
                            width={750}
                            height={620}
                            alt="mix fruit"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="w-full mt-14 px-4 relative flex justify-center">

                <div className="grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center  max-sm:space-y-[40%]  ">
                    {content.map((fruit) => (
                        <div
                            key={fruit.id}
                            className="group cursor-pointer transition-transform duration-300 hover:scale-105 lg:w-[250px] max-sm:w-[110%]"
                        >
                            <div
                                className={`${fruit.bgColor} relative h-[250px] max-sm:h-[160px] flex items-center justify-center 
                               rounded-2xl lg:rounded-bl-[80px] max-sm:rounded-bl-[40px] shadow-md`}

                            >
                                <Image
                                    src={fruit.image}
                                    alt={fruit.primaryText}
                                    width={200}
                                    height={160}
                                    className="object-contain max-sm:w-[92px] max-sm:h-[90px]"
                                />
                            </div>
                            <div className="text-center mt-2">
                                <h3 className="text-[28px] max-sm:text-[20px] font-bold text-green-700">{fruit.primaryText}</h3>
                                <p className="text-[16px] max-sm:text-[12px] text-gray-500">{fruit.secondaryText}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>



            <div className='flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16 max-w-7xl mx-auto'>

                <div className='w-full lg:w-[45%] flex justify-center lg:justify-start mb-8 lg:mb-0'>
                    <div className="relative">

                        <div className="w-[340px] h-[250px] sm:w-[400px] sm:h-[300px] lg:w-[550px] lg:h-[390px]  overflow-hidden  rounded-3xl">
                            <div className="w-full h-full flex items-center justify-center text-gray-600 text-lg font-medium">
                                <Image src={"/servimg2.png"} width={720} height={450} className='max-sm:w-[290px]' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full lg:w-[55%] lg:pl-8 xl:pl-12'>
                    <h1 className='text-[30px]  sm:text-5xl lg:text-[80px]  font-bold text-[#4A4A4A] mb-4 font'>
                        Our Services
                    </h1>

                    <h2 className='text-[18px] sm:text-xl lg:text-[32px] text-[#6B9553] font-medium mb-6 '>
                        Lorem Ipsum is simply dummy
                    </h2>

                    <div className='mb-8 lg:mb-10'>
                        <p className='text-gray-700 text-[14px] sm:text-base lg:text-[16px] leading-relaxed max-w-none lg:max-w-[100%] line-clamp-5'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry been
                            the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry been the industry's standard dummy. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry been the industry's standard dummy. Lorem
                            Ipsum is simply dummy text of the printing and typesetting industry been the industry's
                            standard dummy.
                        </p>
                    </div>

                    <button className="bg-gradient-to-r from-[#F8AC25] to-[#DA743D] hover:from-[#DA743D] hover:to-[#F8AC25] text-white px-8 py-2 rounded-full text-base lg:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Read More
                    </button>
                </div>
            </div>



        </section>
    )
}

export default Services