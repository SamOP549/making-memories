import Image from 'next/legacy/image'
import hero1 from '@/public/gallery/gallery (14).jpg'
import hero2 from '@/public/gallery/gallery (11).jpg'
import hero3 from '@/public/gallery/gallery (15).jpg'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Event Planner and Decorator in Lucknow - Making Memories</title>
        <link rel='canonical' href='https://www.makingmemoriesevent.com' />
        <meta name="description" content="Wedding planner and decorator based in Lucknow | Destination wedding planner | Event planner based in Lucknow" />
        <meta name='keywords' content=' Bride,Groom,Bridal Lehnga,Luxury wedding ,Wedding planner,Engagement ,Haldi,Sangeet,Cocktail party,Wedding after party,Indian wedding decoration ,Mehndi,Wedding decoration ,Golden blossom resort ,Taj lucknow ,Damson plum lucknow ,The centrum lucknow ,Ramada lucknow ,Jim Corbett weddings,Solluna Resort Jim Corbett,Luxury event planners,Luxury decoration ,Customised wedding,Custom wedding decoration,Wedding dj,Manish Malhotra' />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className='pt-20 overflow-hidden'>
        <section className='lg:px-16 md:px-12 px-6'>
          <div className="container flex flex-col items-center px-6 py-12 mx-auto lg:flex-row">
            <div className="lg:w-1/2 flex flex-col items-center">
              <div>
                <h1 className="max-w-xl text-4xl font-medium tracking-wide capitalize md:text-6xl">Making Memories</h1>
                <h1 className="max-w-xl mt-2 text-2xl font-medium tracking-wide text-[#276D9E] capitalize md:text-3xl ">Every Detail Matters.</h1>

                <p className="max-w-lg mt-4 text-gray-800">Its your day, so you should be the last person to make any
                  adjustments to your design. At Making Memories we provide
                  customised decor as per the need of our clients. Most of our brides
                  and grooms already know what they want their day to look like,
                  and we are here to provide it with the designs perfected to the
                  most minute details.</p>

                <div className="mt-6 sm:flex sm:items-center">
                  <Link href="/contact">
                    <button className="border-2 text-sm duration-300 transition-colors hover:bg-[#276D9E] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#276D9E] border-[#276D9E] px-6 block text-center py-3 uppercase">
                      Book an Appointment
                    </button>
                  </Link>
                </div>
              </div>
              <div className='mt-20 flex space-x-10'>
                <Link target="_blank" href="https://www.weddingwire.in/wedding-decorators/making-memories-lucknow--e375708" rel="nofollow" title="Making Memories, Lucknow, 2022 WeddingWire.in Couples' Choice Awards winner">
                  <img width="125" height="125" alt="Making Memories, Lucknow, 2022 WeddingWire.in Couples' Choice Awards winner" id="wp-ratedWA-img-2022" src="https://cdn1.weddingwire.in/img/badges/2022/badge-weddingawards_en_IN.jpg" />
                </Link>
                <Link target="_blank" href="https://www.weddingwire.in/wedding-decorators/making-memories-lucknow--e375708" rel="nofollow" title="Making Memories, Lucknow, 2023 WeddingWire.in Couples' Choice Awards winner">
                  <img width="125" height="125" alt="Making Memories, Lucknow, 2023 WeddingWire.in Couples' Choice Awards winner" id="wp-ratedWA-img-2023" src="https://cdn1.weddingwire.in/img/badges/2023/badge-weddingawards_en_IN.jpg" />
                </Link>
              </div>
            </div>

            <div data-aos="flip-right" className="mt-12 lg:mt-0 lg:ml-12 w-full mx-auto max-w-md overflow-hidden outline outline-4 outline-offset-4 outline-[#475F45]/40">
              <div className="flex flex-col">
                <Image priority className="object-cover" src={hero2} alt="main page" />
                <div className="flex space-x-2">
                  <Image priority className="object-cover" src={hero1} alt="main page" />
                  <Image priority className="object-cover" src={hero3} alt="main page" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-8 py-4 w-full bg-black text-white overflow-hidden">
          <p className='capitalize md:text-3xl text-xl target'>Official vendors at golden blossom</p>
        </section>

        <div
          className="p-12 text-center relative overflow-hidden" style={{ height: "100vh" }}>
          <Image quality="90" priority src='/why-us-2.jpg' layout="fill" objectFit="cover" alt="heroBackdrop" />
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <div className="flex justify-center items-center h-full">
              <div className="text-center md:w-3/5 w-full py-10 px-6 rounded-lg">
                <h1 className="text-4xl font-semibold text-white lg:text-5xl">Why Choose <span className="text-[#DAA520]">Us</span> ?</h1>
                <p className="mt-4 text-base text-white lg:text-xl">We are know for delivering flawless, exquisite decor with end to end perfection in detailing. We are a luxury brand that provides quality results everytime. <br />For the best of everything. For us <span className="text-[#DAA520] font-bold">EVERY DETAIL MATTERS.</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:px-16 md:px-12 px-6 py-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className='text-4xl font-semibold capitalize lg:text-4xl'>Services We Offer</h3>
            <Link href="/services">
              <button className="bg-[#276D9E] hover:bg-[#276D9E]/80 duration-300 transition-colors px-4 block text-center py-3 uppercase text-sm font-bold text-white">
                View All
              </button>
            </Link>
          </div>
          <div className='grid md:grid-cols-6 grid-cols-1 items-center gap-6 md:grid-rows-3'>
            <div data-aos="fade-right" className='flex items-center md:col-start-2 space-x-4 md:col-span-2 px-4 py-4 rounded-lg border-gray-500 border lg:h-28 md:h-32 shadow-md hover:shadow-xl ease-in-out hover:scale-105 transition-all'>
              <Image height={64} width={64} src="/services/planning.png" alt='planning' />
              <p className='text-xl font-semibold'>Complete Event Planning and Recommendations</p>
            </div>
            <div data-aos="fade-left" className='flex flex-grow items-center space-x-4 md:col-span-2 px-4 py-4 rounded-lg border-gray-500 border lg:h-28 md:h-32 shadow-md hover:shadow-xl ease-in-out hover:scale-105 transition-all'>
              <Image height={64} width={64} src="/services/decoration.png" alt='decoration' />
              <p className='text-xl font-semibold'>Wedding Decoration and Styling</p>
            </div>
            <div data-aos="fade-right" className='flex items-center md:col-start-2 space-x-4 md:col-span-2 px-4 py-4 rounded-lg border-gray-500 border lg:h-28 md:h-32 shadow-md hover:shadow-xl ease-in-out hover:scale-105 transition-all'>
              <Image height={64} width={64} src="/services/hospitality.png" alt='hospitality' />
              <p className='text-xl font-semibold'>Hospitality, Logistics and Guest Management</p>
            </div>
            <div data-aos="fade-left" className='flex flex-grow items-center space-x-4 md:col-span-2 px-4 py-4 rounded-lg border-gray-500 border lg:h-28 md:h-32 shadow-md hover:shadow-xl ease-in-out hover:scale-105 transition-all'>
              <Image height={64} width={64} src="/services/entertainment.png" alt='entertainment' />
              <p className='text-xl font-semibold'>Entertainment and Artist Management</p>
            </div>
            <div data-aos="fade-up" className='flex items-center space-x-4 md:col-start-3 md:col-span-2 px-4 py-4 rounded-lg border-gray-500 border lg:h-28 md:h-32 shadow-md hover:shadow-xl ease-in-out hover:scale-105 transition-all'>
              <Image height={64} width={64} src="/services/celebrity.png" alt='celebrity' />
              <p className='text-xl font-semibold'>Celebrity and Vendor Management</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="container mx-auto lg:px-16 md:px-12 px-6 py-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className='text-4xl font-semibold capitalize lg:text-4xl'>Our Gallery</h3>
            <Link href="/gallery">
              <button className="bg-[#276D9E] hover:bg-[#276D9E]/80 duration-300 transition-colors px-4 block text-center py-3 uppercase text-sm font-bold text-white">
                View All
              </button>
            </Link>
          </div>
          <div className="flex md:flex-row flex-col flex-wrap">
            <div className="flex md:w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="/gallery/gallery (1).jpg" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="/gallery/gallery (18).jpg" />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="/gallery/gallery (3).jpg" />
              </div>
            </div>
            <div className="flex md:w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="/gallery/gallery (11).jpg" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="/gallery/gallery (10).jpg" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="/gallery/gallery (17).png" />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="container mx-auto lg:px-16 md:px-12 px-6 py-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className='text-4xl font-semibold capitalize lg:text-4xl md:block hidden'>What Our Clients Are Saying</h3>
            <h3 className='text-4xl font-semibold capitalize lg:text-4xl md:hidden block'>What Our<br /> Clients Are Saying</h3>
            <Link href="/testimonials">
              <button className="bg-[#276D9E] hover:bg-[#276D9E]/80 duration-300 transition-colors px-4 block text-center py-3 uppercase text-sm font-bold text-white">
                View All
              </button>
            </Link>
          </div>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border border-black rounded-lg shadow-lg hover:shadow-2xl">
              <p className="leading-loose text-gray-800">
                “Highly professional and responsive
                Had a great experience with Making Memories. They were responsive, gave personal attention, attentive listeners, paid heed to every need and were detail oriented. Overall attitude was friendly yet professional. Would highly recommend them.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">

                <div className="mx-2">
                  <h1 className="font-semibold text-black ">- Suhina Agarwal</h1>
                </div>
              </div>
            </div>

            <div className="p-8 border border-black rounded-lg shadow-lg hover:shadow-2xl">
              <p className="leading-loose text-gray-800">
                “If you really want to make your marriage memorable do call them and they will definitely make your day special with their amazing decoration,and affordable packages
                I really loved their wrk and the hard wrk they have put.
                Haldi, sangeet , mehandi all decorations was really amazing
                Thankuuu soo soo much for making my day. Thanku Making memories ❤❤❤”
              </p>

              <div className="flex items-center mt-8 -mx-2">

                <div className="mx-2">
                  <h1 className="font-semibold text-black">- Ashu Tiwari</h1>
                </div>
              </div>
            </div>

            <div className="p-8 border border-black rounded-lg shadow-lg hover:shadow-2xl">
              <p className="leading-loose text-gray-800">
                “Making memories is the only one of there kind. What I liked most about them is their unique and funky ideas, which is also appreciated by most of their clients.
                These young talented folks will never let you down.
                All the best MAKING MEMORIES, you guyz are doing a great job 😇”.
              </p>

              <div className="flex items-center mt-8 -mx-2">

                <div className="mx-2">
                  <h1 className="font-semibold text-black ">- Utsav Verma</h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
