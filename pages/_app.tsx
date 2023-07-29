import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import FloatingInstagram from '@/components/FloatingInstagram'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  return <div>
    <Head>
      <link rel="icon" href="/logo.png" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <FloatingWhatsApp />
    <FloatingInstagram />
    <Footer />
  </div>
}
