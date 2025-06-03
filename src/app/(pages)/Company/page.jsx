"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TheCompany from '@/components/TheCompany';
import { Button } from '@/components/ui/button';

const Company = () => {
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

        <section className="relative w-full -mt-[2.5%]">
            <div className="relative w-full  mx-auto max-sm:hidden">
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
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-10 font max-w-7xl mx-auto  lg:-mt-48 ">
                        <h1 className='font-bold text-4xl sm:text-6xl lg:text-[128px] text-[#493E3E]'>
                            The Company
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
                <h1 className="text-[40px] font-bold text-[#493E3E] font leading-tight mb-3 -mt-14 font">
                    The Company
                </h1>
            </div>

            <div className='flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-22 max-sm:pt-[110%]'>
                <div className='lg:w-[55%] lg:pr-12 mb-8 lg:mb-0'>
                    <h1 className='text-[30px] sm:text-6xl lg:text-[96px] font-bold text-[#4A4A4A] leading-tight mb-6 font'>
                        The Company
                    </h1>
                    <h2 className='text-[18px] sm:text-xl lg:text-[22px] text-[#6B9553] font-medium mb-6 '>
                        Lorem Ipsum is simply dummy
                    </h2>
                    <div className='lg:w-[85%] mb-10 '>
                        <p className='text-gray-700 text-[14px] lg:text-lg leading-relaxed  max-sm:line-clamp-5 mb-6 '>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry been
                            the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry been the industry's standard dummy. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry been the industry's standard dummy. Lorem
                            Ipsum is simply dummy text of the printing and typesetting industry been the industry's
                            standard dummy.
                        </p>
                       
                            <ul className='text-[14px] sm:text-xl lg:text-[22px] text-[#6B9553] font-medium mb-6 list-disc pl-6  '>
                                <li> Lorem Ipsum is simply dummy</li>
                                <li> Lorem Ipsum is simply dummy</li>
                                <li> Lorem Ipsum is simply dummy</li>
                            </ul>
                            <div className=' w-[200%] max-sm:w-[100%] space-y-4'>
                                 <p className='text-[14px] lg:text-[18px] line-clamp-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry been the industry's standard dummy</p>

                            <p className='text-[14px] lg:text-[18px] line-clamp-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry been the industry's standard dummy</p>
                        </div>
                    </div>

                </div>

                <div className='lg:w-[45%]  flex justify-center lg:justify-end -mt-72 max-sm:mt-0  max-sm:mb-12'>
                    <div className="relative">
                        <Image
                            src="/tcimg1.png"
                            width={550}
                            height={620}
                            alt="Raspberry"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Company
