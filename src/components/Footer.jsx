import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="relative">
      {/* Orange top bar */}
      <div className="bg-orange-400 h-2 w-full"></div>
      
      <footer className="bg-[#493E3E] text-white relative">
        {/* Logo positioned absolutely */}
       <div className='absolute left-20 top-20 max-sm:hidden'>
        <Image
                        src="/logo.png"
                        width={169}
                        height={159}
                        alt="Logo"
                        priority
                        className='max-sm:w-[100px] max-sm:h-[100px]'
                    />
        </div>
        <div className='absolute left-1/2 pt-10 -translate-x-1/2 max-sm:static max-sm:translate-x-0 max-sm:flex max-sm:justify-center lg:hidden'>
        <Image
                        src="/logo.png"
                        width={169}
                        height={159}
                        alt="Logo"
                        priority
                        className='max-sm:w-[100px] max-sm:h-[100px]'
                    />
        </div>
        {/* Main content */}
        <div className="max-w-7xl mx-auto lg:px-4 py-12 pt-20">
          <div className="flex justify-end">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl max-sm:mt-[0%]">



              {/* About Us Section */}
              <div className='max-sm:hidden'>
                <h3 className="text-lg font-semibold mb-6 text-orange-400">About Us</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Lorem ipsum is simply</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Lorem ipsum is simply</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Lorem ipsum is simply</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Lorem ipsum is simply</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Lorem ipsum is simply</a></li>
                </ul>
              </div>

              {/* Menu Section */}
              <div className='max-sm:hidden'>
                <h3 className="text-lg font-semibold mb-6 text-orange-400">Menu</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">The Company</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Services</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Fruits</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Gallery</a></li>
                </ul>
              </div>

              {/* Contact Us Section */}
              <div className='max-sm:hidden'>
                <h3 className="text-lg font-semibold mb-6 text-orange-400">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-4 h-4 text-gray-700" />
                    </div>
                    <span className="text-gray-300 text-sm">+112-123-123</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-4 h-4 text-gray-700" />
                    </div>
                    <span className="text-gray-300 text-sm">info@example.com</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0">
                      <MapPin className="w-4 h-4 text-gray-700" />
                    </div>
                    <span className="text-gray-300 text-sm">Lorem Ipsum is simply dummy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-12 lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm -mt-20">
          <div>
              <h3 className="text-[16px] font-semibold mb-4 text-orange-400">Menu</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Home</li>
                <li>The Company</li>
                <li>Services</li>
                <li>Fruits</li>
                <li>Gallery</li>
              </ul>
            </div>
            {/* About Us */}
            <div>
              <h3 className="text-[14px] font-semibold mb-4 text-orange-400">About Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Lorem ipsum is simply</li>
                <li>Lorem ipsum is simply</li>
                <li>Lorem ipsum is simply</li>
                <li>Lorem ipsum is simply</li>
                <li>Lorem ipsum is simply</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[16px] font-semibold mb-4 text-orange-400">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Fresh Fruits</li>
                <li>Farm Visit</li>
                <li>Organic Supply</li>
                <li>Wholesale</li>
                <li>Logistics</li>
              </ul>
            </div>

            {/* Menu */}
           

            {/* Contact Us */}
            <div>
              <h3 className="text-[16px] font-semibold mb-4 text-orange-400">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-gray-700" />
                  </div>
                  <span className='text-[10px]'>+112-123-123</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-gray-700" />
                  </div>
                  <span className='text-[10px]'>info@example.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mt-1">
                    <MapPin className="w-4 h-4 text-gray-700" />
                  </div>
                  <span className='text-[10px]'>Lorem Ipsum is simply dummy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 ">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white text-sm mb-4 md:mb-0">
                © 2023 Fresh Fruits - All Rights Reserved
              </div>


              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <span className="text-white text-sm mr-4">Follow Us</span>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                    <Facebook className="w-4 h-4 text-gray-700" />
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                    <Twitter className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
// import React from 'react';
// import { Phone, Mail, MapPin, Clock } from 'lucide-react';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <div className="relative">
   
//       <div className="bg-orange-400 h-2 w-full"></div>
      
//       <footer className="bg-[#493E3E] text-white">
//        <div className='absolute left-20 top-20'>
//                     <Image
//                         src="/logo.png"
//                         width={169}
//                         height={159}
//                         alt="Logo"
//                         priority
//                     />
//                 </div>
//         <div className="max-w-7xl mx-auto px-4 py-12 flex justify-end">
       
//           <div className="grid md:grid-cols-3 ">
        
//             <div>
//               <h3 className="text-lg font-semibold mb-6 text-orange-400">About Us</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lorem ipsum is simply</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lorem ipsum is simply</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lorem ipsum is simply</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lorem ipsum is simply</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lorem ipsum is simply</a></li>
//               </ul>
//             </div>

//             {/* Menu Section */}
//             <div>
//               <h3 className="text-lg font-semibold mb-6 text-orange-400">Menu</h3>
//               <ul className="space-y-3">
//                 <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-white transition-colors">The Company</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fruits</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
//               </ul>
//             </div>

//             {/* Contact Us Section */}
//             <div>
//               <h3 className="text-lg font-semibold mb-6 text-orange-400">Contact Us</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
//                     <Phone className="w-4 h-4 text-gray-700" />
//                   </div>
//                   <span className="text-gray-300">+112-123-123</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
//                     <Mail className="w-4 h-4 text-gray-700" />
//                   </div>
//                   <span className="text-gray-300">info@example.com</span>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0">
//                     <MapPin className="w-4 h-4 text-gray-700" />
//                   </div>
//                   <span className="text-gray-300">Lorem Ipsum is simply dummy</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white">
//           <div className="max-w-7xl mx-auto px-4 py-6">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="text-white text-sm mb-4 md:mb-0">
//                 © 2023 Fresh Fruits - All Rights Reserved
//               </div>
              
//               {/* Size indicator from original image */}
//               <div className="flex items-center space-x-2 pr-[12%]">
               
//                 <div className="text-white text-sm">Follow Us</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
