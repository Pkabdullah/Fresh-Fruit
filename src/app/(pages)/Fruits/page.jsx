import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <section className="-mt-[2.5%] ">
            <div className=" mx-auto max-sm:hidden">
                <div className="relative w-full h-[800px] ">

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
                            Fruits
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
                <h1 className="text-[50px] font-bold text-[#493E3E] font leading-tight mb-3">
                   Fruit
                </h1>
                </div>



            <div className="py-16 px-4 sm:px-6 lg:px-8 max-sm:pt-[140%] max-sm:hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center mb-16 lg:mb-24">

                        <div className="w-full lg:w-[30%] flex justify-center lg:justify-start mb-8 lg:mb-0">

                            <div
                                className={`bg-gradient-to-br from-red-500 to-red-600 relative w-[280px] h-[300px] flex items-center justify-center 
                             rounded-2xl rounded-bl-[80px] shadow-md`}
                            >
                                <Image src={"/osimg1.png"} width={250}
                                    height={160} />
                            </div>
                        </div>


                        <div className="w-full lg:w-[65%] ">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#6B9553] mb-4">
                                Nectarine
                            </h2>
                            <p className="text-gray-600 text-lg mb-6">
                                Lorem Ipsum is simply
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry been the
                                industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry been the industry's standard dummy.Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry been the industry's standard
                                dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                been the industry's standard dummy
                            </p>
                        </div>
                    </div>

                    {/* Apples Section */}
                    <div className="flex flex-col lg:flex-row-reverse items-center">
                        {/* Apple Image */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
                            <div className="w-full lg:w-[80%] flex justify-center lg:justify-start mb-8 lg:mb-0">

                                <div
                                    className={`bg-gradient-to-br from-orange-400 to-orange-500 relative w-[280px] h-[300px] flex items-center justify-center 
                             rounded-2xl rounded-bl-[80px] shadow-md`}
                                >
                                    <Image src={"/osimg3.png"} width={250}
                                        height={160} />
                                </div>
                            </div>
                        </div>

                        {/* Apple Content */}
                        <div className="w-full lg:w-[30%]lg:pr-12">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#6B9553] mb-4">
                                Mandarins
                            </h2>
                            <p className="text-gray-600 text-lg mb-6">
                                Lorem Ipsum is simply
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry been the
                                industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry been the industry's standard dummy.Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry been the industry's standard
                                dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                been the industry's standard dummy
                            </p>
                        </div>
                    </div>

                    {/* 3 */}

                    <div className="flex flex-col lg:flex-row items-center mb-16 lg:mb-24">

                        <div className="w-full lg:w-[30%] flex justify-center lg:justify-start mb-8 lg:mb-0">

                            <div
                                className={`bg-gradient-to-br from-red-600 to-red-700 relative w-[280px] h-[300px] flex items-center justify-center 
                             rounded-2xl rounded-bl-[80px] shadow-md`}
                            >
                                <Image src={"/osimg7.png"} width={250}
                                    height={160} />
                            </div>
                        </div>


                        <div className="w-full lg:w-[65%] ">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#6B9553] mb-4">
                                Cherries
                            </h2>
                            <p className="text-gray-600 text-lg mb-6">
                                Lorem Ipsum is simply
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry been the
                                industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry been the industry's standard dummy.Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry been the industry's standard
                                dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                been the industry's standard dummy
                            </p>
                        </div>
                    </div>

                    {/* 4 */}

                    <div className="flex flex-col lg:flex-row-reverse items-center">
                        {/* Apple Image */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
                            <div className="w-full lg:w-[80%] flex justify-center lg:justify-start mb-8 lg:mb-0">

                                <div
                                    className={`bg-gradient-to-br from-green-400 to-green-500 relative w-[280px] h-[300px] flex items-center justify-center 
                             rounded-2xl rounded-bl-[80px] shadow-md`}
                                >
                                    <Image src={"/osimg6.png"} width={250}
                                        height={160} />
                                </div>
                            </div>
                        </div>

                        {/* Apple Content */}
                        <div className="w-full lg:w-[30%]lg:pr-12">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#6B9553] mb-4">
                                Kiwis
                            </h2>
                            <p className="text-gray-600 text-lg mb-6">
                                Lorem Ipsum is simply
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry been the
                                industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry been the industry's standard dummy.Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry been the industry's standard
                                dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                been the industry's standard dummy
                            </p>
                        </div>
                    </div>
                    {/* 5 */}

                    <div className="flex flex-col lg:flex-row items-center mb-16 lg:mb-24">

                        <div className="w-full lg:w-[30%] flex justify-center lg:justify-start mb-8 lg:mb-0">

                            <div
                                className={`bg-gradient-to-br from-yellow-300 to-orange-300 relative w-[280px] h-[300px] flex items-center justify-center 
                          rounded-2xl rounded-bl-[80px] shadow-md`}
                            >
                                <Image src={"/osimg4.png"} width={250}
                                    height={160} />
                            </div>
                        </div>


                        <div className="w-full lg:w-[65%] ">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#6B9553] mb-4">
                                Apricots
                            </h2>
                            <p className="text-gray-600 text-lg mb-6">
                                Lorem Ipsum is simply
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry been the
                                industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry been the industry's standard dummy.Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry been the industry's standard
                                dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                been the industry's standard dummy
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 px-4 sm:px-6 lg:px-8 lg:hidden mt-[100%]">
  <div className="max-w-6xl mx-auto space-y-24">
    
    {/* Nectarine Section */}
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">
        <div className="bg-gradient-to-br from-red-500 to-red-600 w-[280px] h-[300px] rounded-2xl rounded-bl-[80px] shadow-md flex items-center justify-center">
          <Image src="/osimg1.png" width={250} height={160} alt="Nectarine" />
        </div>
      </div>
      <div className="w-full lg:w-[65%] text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6B9553] mb-4">Nectarine</h2>
        <p className="text-gray-600 text-lg mb-4">Lorem Ipsum is simply</p>
        <p className="text-gray-700 text-base leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
      </div>
    </div>

    {/* Mandarins Section */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-[280px] h-[300px] rounded-2xl rounded-bl-[80px] shadow-md flex items-center justify-center">
          <Image src="/osimg3.png" width={250} height={160} alt="Mandarins" />
        </div>
      </div>
      <div className="w-full lg:w-[30%] lg:pr-12 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6B9553] mb-4">Mandarins</h2>
        <p className="text-gray-600 text-lg mb-4">Lorem Ipsum is simply</p>
        <p className="text-gray-700 text-base leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
      </div>
    </div>

    {/* Cherries Section */}
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">
        <div className="bg-gradient-to-br from-red-600 to-red-700 w-[280px] h-[300px] rounded-2xl rounded-bl-[80px] shadow-md flex items-center justify-center">
          <Image src="/osimg7.png" width={250} height={160} alt="Cherries" />
        </div>
      </div>
      <div className="w-full lg:w-[65%] text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6B9553] mb-4">Cherries</h2>
        <p className="text-gray-600 text-lg mb-4">Lorem Ipsum is simply</p>
        <p className="text-gray-700 text-base leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
      </div>
    </div>

    {/* Kiwis Section */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="bg-gradient-to-br from-green-400 to-green-500 w-[280px] h-[300px] rounded-2xl rounded-bl-[80px] shadow-md flex items-center justify-center">
          <Image src="/osimg6.png" width={250} height={160} alt="Kiwis" />
        </div>
      </div>
      <div className="w-full lg:w-[30%] lg:pr-12 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6B9553] mb-4">Kiwis</h2>
        <p className="text-gray-600 text-lg mb-4">Lorem Ipsum is simply</p>
        <p className="text-gray-700 text-base leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
      </div>
    </div>

    {/* Apricots Section */}
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">
        <div className="bg-gradient-to-br from-yellow-300 to-orange-300 w-[280px] h-[300px] rounded-2xl rounded-bl-[80px] shadow-md flex items-center justify-center">
          <Image src="/osimg4.png" width={250} height={160} alt="Apricots" />
        </div>
      </div>
      <div className="w-full lg:w-[65%] text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6B9553] mb-4">Apricots</h2>
        <p className="text-gray-600 text-lg mb-4">Lorem Ipsum is simply</p>
        <p className="text-gray-700 text-base leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
      </div>
    </div>
  </div>
</div>

        </section>
    )
}

export default page
