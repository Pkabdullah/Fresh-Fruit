"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TheCompany = () => {
    const content = [
        { id: 1, primaryText: "Fresh Juice", image: "/tcimg2.png", bgGradient: "from-[#9EBD6F] to-[#80995A]" },
        { id: 2, primaryText: "Fresh Health food", image: "/tcimg3.png", bgGradient: "from-[#FDD009] to-[#CCA807]" },
        { id: 3, primaryText: "Summer food", image: "/tcimg4.png", bgGradient: "from-[#D87949] to-[#FF8F56]" }
    ]

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <section className='w-full max-w-7xl mx-auto'>
            <div className="w-full mt-8 flex justify-end lg:-mt-10 max-sm:hidden">
               
                <div className="absolute right-0  transform -translate-y-1/2 z-10 max-sm:hidden h-[300px] " >
                    <Image
                        src="/mainimg1.png"
                        width={280}
                        height={240}
                        alt="watermealon fruit"
                        className="object-contain "
                    />
                </div>

            </div>

            <div className='flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 max-sm:mt-[110%]  lg:mt-[10%]'>
                <div className='lg:w-[55%] lg:pr-12 mb-8 lg:mb-0'>
                    <h1 className='text-[30px] lg:text-[96px] font-bold text-[#4A4A4A] leading-tight mb-6 font'>
                        The Company
                    </h1>
                    <h2 className='text-[16px] sm:text-xl lg:text-[22px] text-[#6B9553] font-medium mb-6'>
                        Lorem Ipsum is simply dummy
                    </h2>
                    <div className='lg:w-[85%] mb-8'>
                        <p className='text-gray-700 text-[12px] lg:text-lg leading-relaxed'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry been
                            the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry been the industry's standard dummy. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry been the industry's standard dummy. Lorem
                            Ipsum is simply dummy text of the printing and typesetting industry been the industry's
                            standard dummy.
                        </p>
                    </div>
                    <Button className="bg-gradient-to-r from-[#F8AC25] to-[#DA743D] hover:from-[#DA743D] hover:to-[#F8AC25] text-white lg:px-8 lg:py-3 max-sm:text-[14px] rounded-full text-lg font-medium transition-all duration-300">
                        Read More
                    </Button>
                </div>


                <div className='lg:w-[45%] flex justify-center lg:justify-end'>
                    <div className="relative">
                        <Image
                            src="/tcimg1.png"
                            width={550}
                            height={620}
                            alt="Raspberry"
                            priority
                            className='max-sm:w-[350px]'
                        />
                    </div>

                </div>
            </div>

          
            <div className='relative flex flex-col md:flex-row justify-center gap-4 lg:gap-6 lg:mt-56'>
              
                <div className="absolute left-0 top-0 transform -translate-y-1/2 -translate-x-1/2 z-10 max-sm:hidden " data-aos="fade-right">
                    <Image
                        src="/tcimg5.png"
                        width={100}
                        height={180}
                        alt="sliced fruit"
                        className="object-contain "
                    />
                </div>


                {content.map((item) => (
                    <div key={item.id} className="max-sm:flex max-sm:justify-center">
                        <div
                            className={`relative bg-gradient-to-br ${item.bgGradient} w-[280px] md:w-[280px] lg:w-[372px] h-[300px] lg:h-[350px] xxl:w-[472px] xl:h-[442px] overflow-hidden shadow-lg max-sm:rounded-xl max-sm:mt-10`}
                        >
                            <div className="absolute top-6 left-4 z-10 font">
                                <h3 className='text-white text-[30px] lg:text-[40px] font-semibold'>
                                    {item.primaryText}
                                </h3>
                            </div>

                            <div className="absolute bottom-2 right-2">
                                <Image
                                    src={item.image}
                                    width={300}
                                    height={140}
                                    alt={item.primaryText}
                                    className="object-contain max-sm:w-[230px] max-sm:h-[250px]"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <div className="absolute right-0 top-[130%] transform -translate-y-1/2 z-10 max-sm:hidden " >
                    <Image
                        src="/tcimg6.png"
                        width={200}
                        height={180}
                        alt="orange fruit"
                        className="object-contain"
                    />
                </div>
            </div>

        </section>
    )
}

export default TheCompany
