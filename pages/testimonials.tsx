import React from 'react'
import Carousel from '../components/Carousel'
import Head from 'next/head'

const Testimonials = () => {

  return (
    <>
      <Head>
        <title>Customer Reviews - Regalia Diners</title>
      </Head>
      <div className='pt-20'>
        <section className="relative py-12 overflow-hidden md:px-12 px-6">
          <div className="relative container px-4 mx-auto">
            <div className="max-w-lg lg:max-w-7xl mx-auto">
              <div className="flex flex-wrap -mx-4 mb-18 items-center">
                <div className='mb-4 mt-12 w-full'>
                  <h1 className='text-2xl font-bold md:text-5xl text-center tracking-tight'>Don&apos;t just take our word for it</h1>
                </div>
              </div>
              <Carousel />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Testimonials