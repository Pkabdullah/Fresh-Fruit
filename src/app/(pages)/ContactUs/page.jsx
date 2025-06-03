import GetInTouch from '@/components/GetInTouch'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="relative w-full -mt-[2.5%] ">

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
            Contact Us
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
                <h1 className="text-[50px] font-bold text-[#493E3E] font leading-tight mb-3">
                   Contact Us
                </h1>
                </div>
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto max-sm:mt-[140%]">
        {/* Contact Form */}
        <div className=" p-8">
          <h2 className="text-[40px] font text-gray-800 mb-8">Get in Touch</h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"

                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"

                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your Last Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"

                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <Button className="rounded-full  w-36 lg:text-[20px] lg:py-5 lg:px-6 bg-gradient-to-r from-[#F8AC25] to-[#DA743D] hover:from-[#DA743D] hover:to-[#F8AC25] transition-all">
              Send
            </Button>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 ">
          <div className="relative h-0 overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.096656292789!2d-122.08217698485344!3d37.42205787981786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc7b4be10725%3A0xf59d178a87b32f52!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1610035984427!5m2!1sen!2sus"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Location Map"
            />
          </div>

        </div>
      </div>
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">

            {/* Phone Contact */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium text-lg">
                  123-123-123
                </p>
              </div>
            </div>

            {/* Email Contact */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-sm font-medium mb-1">
                  Email
                </p>
                <p className="text-gray-800 font-medium text-base">
                  info@gmail.Com
                </p>
              </div>
            </div>

            {/* Location Contact */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-sm font-medium mb-1">
                  Map
                </p>
                <p className="text-gray-800 font-medium text-base">
                  Lorem Ipsum is Simply
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
