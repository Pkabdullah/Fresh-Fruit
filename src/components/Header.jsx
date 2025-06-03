"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className='relative w-full bg-[url("/headerimg.png")] bg-cover bg-top bg-no-repeat z-20'>
            <section className="max-w-screen-xl flex justify-between items-center min-h-[80px] px-4 mx-auto py-4">
                {/* Logo (hidden when mobile menu is open) */}
                {!isMobileMenuOpen && (
                    <div className='pt-[1.5%]'>
                        <Image
                            src="/logo.png"
                            width={120}
                            height={120}
                            alt="Logo"
                            priority
                            className='max-sm:w-[70%]'
                        />
                    </div>
                )}

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className='flex gap-6 lg:gap-10 lg:text-[20px] text-[#493E3E]'>
                        <Link href={"/"}><li className="cursor-pointer hover:text-gray-300">Home</li></Link>
                        <Link href={"/Company"}><li className="cursor-pointer hover:text-gray-300">The Company</li></Link>
                        <Link href={"/Services"}><li className="cursor-pointer hover:text-gray-300">Services</li></Link>
                        <Link href={"/Fruits"}><li className="cursor-pointer hover:text-gray-300">Fruits</li></Link>
                        <Link href={"/ContactUs"}><li className="cursor-pointer hover:text-gray-300">Contact Us</li></Link>
                        <Link href={"/Gallery"}><li className="cursor-pointer hover:text-gray-300">Gallery</li></Link>
                    </ul>
                </nav>

                {/* Desktop Contact & Search */}
                <div className="hidden lg:flex items-center gap-6 lg:pr-4">
                    <Image
                        src="/search.png"
                        width={26}
                        height={26}
                        alt="Search"
                        className='cursor-pointer'
                    />
                    <Button className="rounded-full text-sm lg:text-[20px] py-2 lg:py-5 px-4 lg:px-6 bg-gradient-to-r from-[#F8AC25] to-[#DA743D] hover:from-[#DA743D] hover:to-[#F8AC25] transition-all">
                        Contact Us
                    </Button>
                </div>

                {/* Mobile Menu Toggle + Search */}
                <div className="lg:hidden flex items-center gap-4 z-50">
                    <Image
                        src="/search.png"
                        width={24}
                        height={24}
                        alt="Search"
                        className='cursor-pointer'
                    />
                    <button onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>
            </section>

            {/* Mobile Fullscreen Overlay Menu */}
            {isMobileMenuOpen && (
  <div className="fixed inset-0 bg-white z-[9999] px-6 py-6 w-full h-screen overflow-y-auto">
    {/* Close button top-right */}
    <div className="flex justify-end mb-4">
      <button onClick={() => setIsMobileMenuOpen(false)} className="text-black">
        <X size={28} />
      </button>
    </div>

    {/* Mobile Navigation */}
    <ul className='flex flex-col gap-6 text-lg text-[#493E3E]'>
      <Link href="/" onClick={() => setIsMobileMenuOpen(false)}><li>Home</li></Link>
      <Link href="/Company" onClick={() => setIsMobileMenuOpen(false)}><li>The Company</li></Link>  
      <Link href="/Services" onClick={() => setIsMobileMenuOpen(false)}><li>Services</li></Link>
      <Link href="/Fruits" onClick={() => setIsMobileMenuOpen(false)}><li>Fruits</li></Link>
      <Link href="/ContactUs" onClick={() => setIsMobileMenuOpen(false)}><li>Contact Us</li></Link>
      <Link href="/Gallery" onClick={() => setIsMobileMenuOpen(false)}><li>Gallery</li></Link>
    </ul>

    {/* Contact Button */}
    <div className="mt-8">
      <Button className="w-full bg-gradient-to-r from-[#F8AC25] to-[#DA743D] hover:from-[#DA743D] hover:to-[#F8AC25]">
        Contact Us
      </Button>
    </div>
  </div>
)}

        </header>
    );
};

export default Header;

// // Header.tsx
// "use client";
// import Image from 'next/image';
// import React from 'react';
// import { Button } from './ui/button';
// import Link from 'next/link';

// const Header = () => {
//     return (
//         <header className='relative w-full bg-[url("/headerimg.png")] bg-cover bg-top bg-no-repeat  z-20'>
//             <section className="max-w-screen-xl flex justify-between items-center min-h-[172px] px-4 mx-auto">
//                 <div className=' pt-[1.5%]'>
//                     <Image
//                         src="/logo.png"
//                         width={159}
//                         height={159}
//                         alt="Logo"
//                         priority
//                     />
//                 </div>
//                 <nav>
//                     <ul className='flex gap-10 lg:text-[20px] text-[#493E3E]'>
//                         <Link href={"/"}>  <li className="cursor-pointer hover:text-gray-300">Home</li></Link>
//                         <Link href={"/Company"}>   <li className="cursor-pointer hover:text-gray-300">The Company</li></Link>
//                         <Link href={"/Services"}>   <li className="cursor-pointer hover:text-gray-300">Services</li></Link>
//                         <Link href={"/Fruits"}>   <li className="cursor-pointer hover:text-gray-300">Fruits</li></Link>
//                         <Link href={"/ContactUs"}>   <li className="cursor-pointer hover:text-gray-300">Contact Us</li></Link>
//                         <Link href={"/Gallery"}>   <li className="cursor-pointer hover:text-gray-300">Gallery</li></Link>
//                     </ul>
//                 </nav>
//                 <div className="flex items-center gap-8 lg:pr-12">
//                     <Image
//                         src="/search.png"
//                         width={26}
//                         height={26}
//                         alt="Search"
//                         className='cursor-pointer'
//                     />
//                     <Button className="rounded-full lg:text-[20px] lg:py-5 lg:px-6 bg-gradient-to-r from-[#F8AC25] to-[#DA743D] hover:from-[#DA743D] hover:to-[#F8AC25] transition-all">
//                         Contact Us
//                     </Button>
//                 </div>
//             </section>

//         </header>
//     );
// };

// export default Header;
