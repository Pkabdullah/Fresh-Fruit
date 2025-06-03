import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const OurServices = () => {
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

    return (
        <section className='w-full max-w-7xl mx-auto lg:mt-40 max-sm:mt-20' >

            <div className='flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8'>

                <div className='lg:w-[55%] lg:pr-12 mb-8 lg:mb-0 '>
                    <h1 className='text-[30px] sm:text-6xl lg:text-[96px]  text-[#4A4A4A] leading-tight mb-6 font '>
                        Our Services
                    </h1>
                    <h2 className='text-[16px] sm:text-xl lg:text-[32px] text-[#6B9553] font-medium mb-6'>
                        Lorem Ipsum is simply dummy
                    </h2>
                    <div className='lg:w-[85%] mb-8'>
                        <p className='text-gray-700 text-[11px] lg:text-[18px] leading-relaxed'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry been
                            the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry been the industry's standard dummy. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry been the industry's standard dummy. Lorem
                            Ipsum is simply dummy text of the printing and typesetting industry been the industry's
                            standard dummy.
                        </p>
                    </div>
                    <Button className="bg-gradient-to-r from-[#F8AC25] to-[#DA743D] hover:from-[#DA743D] hover:to-[#F8AC25] text-white lg:px-8 lg:py-3 rounded-full max-sm:text-[14px] font-medium transition-all duration-300">
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
                {/* <div className="w-full mt-14 px-4 flex justify-center"> */}
                <div className="absolute -left-10 top-100 z-10 max-sm:hidden ">
                    <Image
                        src="/cheeryimg1.png"
                        width={160}
                        height={180}
                        alt="cherry fruit"
                        className="object-contain"
                    />
                </div>
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
            <div className='flex justify-center lg:mt-32 mt-10 lg:hidden'>
        <Button className="rounded-full  w-36 lg:text-[20px] lg:py-5 lg:px-6 bg-gradient-to-r from-[#F8AC25] to-[#DA743D] hover:from-[#DA743D] hover:to-[#F8AC25] transition-all">
          View More
        </Button></div>

        </section>
    )
}

export default OurServices