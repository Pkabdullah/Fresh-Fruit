"use client"
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    return (
        <div className=" py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className=" p-8">
                        <h2 className="lgtext-[96px] text-[30px] font text-gray-800 mb-8">Get in Touch</h2>

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
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
                                        value={formData.lastName}
                                        onChange={handleInputChange}
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
                                    value={formData.message}
                                    onChange={handleInputChange}
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

                {/* Service Icons */}
                <div className="mt-16  p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center ">
                            <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-3">
                                <Image src="/gitimg1.png" width={80} height={80} />
                            </div>
                            <p className="text-gray-700 font-medium">100 Natural</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-3">
                                <Image src="/gitimg2.png" width={80} height={80} />
                            </div>
                            <p className="text-gray-700 font-medium">Fast Shipping</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-3">
                                <Image src="/gitimg3.png" width={80} height={80} />
                            </div>
                            <p className="text-gray-700 font-medium">Free Delivery</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-3">
                                <Image src="/gitimg4.png" width={80} height={80} />
                            </div>
                            <p className="text-gray-700 font-medium">Fresh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;