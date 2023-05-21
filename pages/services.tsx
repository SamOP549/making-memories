import React from 'react'
import Link from 'next/link'

const Services = () => {
    return (
        <div className='pt-20'>
            <div className='mb-4 mt-12 w-full'>
                <h1 className='  text-4xl font-medium tracking-wide capitalize md:text-6xl text-center'>Services We Offer</h1>
            </div>
            <section className="mx-auto py-10 lg:px-16 md:px-12 px-6">
                <div>
                    <div className="flex flex-row">
                        <div className="hidden md:flex flex-col items-center">
                            <div className="h-full border-l-2 border-transparent">
                                <div className="border-l-2 mr-4 h-full border-transparent border-dashed"></div>
                            </div>
                            <div className="w-32 py-5 border border-gray-500 rounded mr-4 uppercase flex flex-col items-center justify-center shadow-2xl shadow-blue-500/20">
                                <div className="text-3xl font-black text-gray-500">1</div>
                            </div>
                            <div className="h-full border-l-2 border-transparent">
                                <div className="border-l-2 mr-4 h-full border-[#276D9E] border-dashed"></div>
                            </div>
                        </div>
                        <div className="flex-auto border rounded  border-gray-500 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                            <div className="flex md:flex-row flex-col items-center">
                                <div className="md:w-3/5 p-2">
                                    <div className="p-3 text-3xl  ">Complete Event Planning and Recommendations</div>
                                    <div className="px-3 pb-6 text-sm">We specialize in event planning. Our services include theme selection, venue sourcing, detailed timelines, vendor coordination, engaging activities, top-notch catering, and flawless logistics. Trust us for an unforgettable event experience.</div>
                                    <div className="px-3">
                                        <Link href="/contact">
                                            <button className="border-2 text-sm duration-300 transition-colors hover:bg-[#276D9E] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#276D9E] border-[#276D9E] px-6 block text-center py-3 uppercase">
                                                Book Us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="md:w-3/5 w-full p-5"><img src="/gallery/gallery (8).jpg" alt="step 1" className="object-scale-down" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start flex-row">
                        <div className="border-t-2 border-r-2 border-transparent">
                            <div className="w-16 ml-16 h-16 border-l-2 border-[#276D9E] border-dashed border-b-2 rounded-bl-full"></div>
                        </div>
                        <div className="border-t-2 border-transparent flex-auto">
                            <div className="h-16 border-b-2 border-[#276D9E] border-dashed"></div>
                        </div>
                        <div className="w-16 mt-16 mr-16 h-16 border-r-2 border-[#276D9E] border-dashed border-t-2 rounded-tr-full"></div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <div className="hidden md:flex flex-col items-center">
                            <div className="h-full border-r-2 border-transparent">
                                <div className="border-l-2 ml-4 h-full border-[#276D9E] border-dashed"></div>
                            </div>
                            <div className="w-32 py-5 border border-gray-500 rounded ml-4 uppercase flex flex-col items-center justify-center shadow-2xl shadow-blue-500/20">
                                <div className="text-3xl font-black text-gray-500">2</div>
                            </div>
                            <div className="h-full border-r-2 border-transparent">
                                <div className="border-l-2 ml-4 h-full border-[#276D9E] border-dashed"></div>
                            </div>
                        </div>
                        <div className="flex-auto border rounded  border-gray-500 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                            <div className="flex md:flex-row flex-col items-center">
                                <div className="md:w-3/5 p-2">
                                    <div className="p-3 text-3xl  ">Wedding Decoration and Styling</div>
                                    <div className="px-3 pb-6 text-sm">
                                        Private events- Wedding,
                                        Haldi, Mehndi, Sangeet,
                                        Bachelor Party, Proposals,
                                        Birthdays and such.
                                        <br />
                                        Public and corporate eventsBusiness related events,
                                        Book Launch, social events
                                    </div>
                                    <div className="px-3">
                                        <Link href="/contact">
                                            <button className="border-2 text-sm duration-300 transition-colors hover:bg-[#276D9E] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#276D9E] border-[#276D9E] px-6 block text-center py-3 uppercase">
                                                Book Us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="md:w-3/5 w-full p-5"><img src="/gallery/gallery (3).jpg" alt="step 2" className="object-scale-down" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start flex-row-reverse">
                        <div className="border-t-2 border-l-2 border-transparent">
                            <div className="w-16 mr-16 h-16 border-r-2 border-[#276D9E] border-dashed border-b-2 rounded-br-full"></div>
                        </div>
                        <div className="border-t-2 border-transparent flex-auto">
                            <div className="h-16 border-b-2 border-[#276D9E] border-dashed"></div>
                        </div>
                        <div className="w-16 mt-16 ml-16 h-16 border-l-2 border-[#276D9E] border-dashed border-t-2 rounded-tl-full"></div>
                    </div>
                    <div className="flex flex-row">
                        <div className="hidden md:flex flex-col items-center">
                            <div className="h-full border-l-2 border-transparent">
                                <div className="border-l-2 mr-4 h-full border-[#276D9E] border-dashed"></div>
                            </div>
                            <div className="w-32 py-5 border border-gray-500 rounded mr-4 uppercase flex flex-col items-center justify-center shadow-2xl shadow-blue-500/20">
                                <div className="text-3xl font-black text-gray-500">3</div>
                            </div>
                            <div className="h-full border-l-2 border-transparent">
                                <div className="border-l-2 mr-4 h-full border-[#276D9E] border-dashed"></div>
                            </div>
                        </div>
                        <div className="flex-auto border rounded  border-gray-500 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                            <div className="flex md:flex-row flex-col items-center">
                                <div className="md:w-3/5 p-2">
                                    <div className="p-3 text-3xl  ">Hospitality, Logistics and Guest Management</div>
                                    <div className="px-3 pb-6 text-sm">
                                        <ul className='ml-6 list-disc'>
                                            <li>Volunteer</li>
                                            <li>Managers</li>
                                            <li>Bell boys</li>
                                            <li>Check in and check out for guest</li>
                                            <li>Shadow for clients</li>
                                            <li>Help desk</li>
                                            <li>Complete coordination with venue</li>
                                            <li>Pick up and drop services</li>
                                        </ul>
                                    </div>
                                    <div className="px-3 pb-6">
                                        <Link href="/contact">
                                            <button className="border-2 text-sm duration-300 transition-colors hover:bg-[#276D9E] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#276D9E] border-[#276D9E] px-6 block text-center py-3 uppercase">
                                                Book Us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="md:w-3/5 w-full p-5"><img src="/gallery/gallery (11).jpg" alt="step 3" className="object-scale-down" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start flex-row">
                        <div className="border-t-2 border-r-2 border-transparent">
                            <div className="w-16 ml-16 h-16 border-l-2 border-[#276D9E] border-dashed border-b-2 rounded-bl-full"></div>
                        </div>
                        <div className="border-t-2 border-transparent flex-auto">
                            <div className="h-16 border-b-2 border-[#276D9E] border-dashed"></div>
                        </div>
                        <div className="w-16 mt-16 mr-16 h-16 border-r-2 border-[#276D9E] border-dashed border-t-2 rounded-tr-full"></div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <div className="hidden md:flex flex-col items-center">
                            <div className="h-full border-r-2 border-transparent">
                                <div className="border-l-2 ml-4 h-full border-[#276D9E] border-dashed"></div>
                            </div>
                            <div className="w-32 py-5 border border-gray-500 rounded ml-4 uppercase flex flex-col items-center justify-center shadow-2xl shadow-blue-500/20">
                                <div className="text-3xl font-black text-gray-500">4</div>
                            </div>
                            <div className="h-full border-r-2 border-transparent">
                                <div className="border-l-2 ml-4 h-full border-[#276D9E] border-dashed"></div>
                            </div>
                        </div>
                        <div className="flex-auto border rounded border-gray-500 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                            <div className="flex md:flex-row flex-col items-center">
                                <div className="md:w-3/5 p-2">
                                    <div className="p-3 text-3xl  ">Entertainment and Artist Management</div>
                                    <div className="px-3 pb-6 text-sm">
                                        From Basic Dj with Sound Setup To Celebrity performance and everything in between
                                        <br />
                                        <br />
                                        Pre-Wedding event related entertainment services-
                                        <ul className='list-disc ml-6'>
                                            <li>Dance groups- Folk and other styles</li>
                                            <li>Singers- Marwadi/Bollywood/Hollywood</li>
                                            <li>Counters- munchies/perfumes/bangles/games</li>
                                            <li>Stage artists- anchors/comedians</li>
                                            <li>Theme based entertainers</li>
                                        </ul>
                                        <br />
                                        Wedding based entertainmentCold fire showers-
                                        <ul className='list-disc ml-6'>
                                            <li>Cold fire showers</li>
                                            <li>Bride and groom entry concepts</li>
                                            <li>Baraat concepts</li>
                                            <li>Punjabi/Led dhol</li>
                                            <li>Fogg and stage effects</li>
                                            <li>Jaimala themes</li>
                                            <li>Live painter</li>
                                        </ul>
                                    </div>
                                    <div className="px-3 pb-3">
                                        <Link href="/contact">
                                            <button className="border-2 text-sm duration-300 transition-colors hover:bg-[#276D9E] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#276D9E] border-[#276D9E] px-6 block text-center py-3 uppercase">
                                                Book Us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="md:w-2/5 w-full p-5"><img src="/gallery/gallery (17).png" alt="step 2" className="object-scale-down" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start flex-row-reverse">
                        <div className="border-t-2 border-l-2 border-transparent">
                            <div className="w-16 mr-16 h-16 border-r-2 border-[#276D9E] border-dashed border-b-2 rounded-br-full"></div>
                        </div>
                        <div className="border-t-2 border-transparent flex-auto">
                            <div className="h-16 border-b-2 border-[#276D9E] border-dashed"></div>
                        </div>
                        <div className="w-16 mt-16 ml-16 h-16 border-l-2 border-[#276D9E] border-dashed border-t-2 rounded-tl-full"></div>
                    </div>
                    <div className="flex flex-row">
                        <div className="hidden md:flex flex-col items-center">
                            <div className="h-full border-l-2 border-transparent">
                                <div className="border-l-2 mr-4 h-full border-[#276D9E] border-dashed"></div>
                            </div>
                            <div className="w-32 py-5 border border-gray-500 rounded mr-4 uppercase flex flex-col items-center justify-center shadow-2xl shadow-blue-500/20">
                                <div className="text-3xl font-black text-gray-500">5</div>
                            </div>
                            <div className="h-full border-l-2 border-transparent">
                                <div className="border-l-2 mr-4 h-full border-transparent border-dashed"></div>
                            </div>
                        </div>
                        <div className="flex-auto border rounded  border-gray-500 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                            <div className="flex md:flex-row flex-col items-center">
                                <div className="md:w-3/5 p-2">
                                    <div className="p-3 text-3xl  ">Celebrity and Vendor Management</div>
                                    <div className="px-3 pb-6 text-sm">
                                        <ul className='ml-6 list-disc'>
                                            <li>Bridal trousseau</li>
                                            <li>Return favour</li>
                                            <li>Wedding invitation</li>
                                            <li>Hampers</li>
                                            <li>Catering (food and beverage)</li>
                                            <li>Makeup artist</li>
                                            <li>Photography and cinematography</li>
                                            <li>Security</li>
                                            <li>Celebrity artist</li>
                                        </ul>
                                    </div>
                                    <div className="px-3 pb-6">
                                        <Link href="/contact">
                                            <button className="border-2 text-sm duration-300 transition-colors hover:bg-[#276D9E] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#276D9E] border-[#276D9E] px-6 block text-center py-3 uppercase">
                                                Book Us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="md:w-3/5 w-full p-5"><img src="/gallery/gallery (19).jpg" alt="step 3" className="object-scale-down" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services