import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import yashika from '@/public/testimonials/yashika.jpg'
import chelsy from '@/public/testimonials/chelsyj.jpg'
import suhina from '@/public/testimonials/suhina.jpg'
import utsav from '@/public/testimonials/utsav.jpg'
import ashu from '@/public/testimonials/ashu.jpg'
import iksha from '@/public/testimonials/iksha.jpg'


function Demo() {
    const autoplay = useRef(Autoplay({ delay: 6000 }));
    const slides = [
        {
            id: 1,
            name: 'Yashika',
            img: yashika,
            review: '💯 recommended! The team is amazing ! Deeksha and abhishek do a fabulous job ! Thank you so much for turning those memories into beautiful ones ❤',
        },
        {
            id: 2,
            name: 'Ashu Tiwari',
            img: ashu,
            review: `If you really want to make your marriage memorable do call them and they will definitely make your day special with their amazing decoration,and affordable packages
          I really loved their wrk and the hard wrk they have put.
          Haldi, sangeet , mehandi all decorations was really amazing
          Thankuuu soo soo much for making my day. Thanku Making memories ❤❤❤
          `,
        },
        {
            id: 3,
            name: 'Utsav Verma',
            img: utsav,
            review: `Making memories is the only one of there kind. What I liked most about them is their unique and funky ideas, which is also appreciated by most of their clients.
          These young talented folks will never let you down.
          All the best MAKING MEMORIES, you guyz are doing a great job 😇
          `,
        },
        {
            id: 4,
            name: 'Chelsy Jain',
            img: chelsy,
            review: `They are the perfect wedding planning company. They made my dream day special. Made the designs exactly like we discussed and the pricing was also really good and pocket friendly`,
        },
        {
            id: 5,
            name: 'Iksha Jaiswal',
            img: iksha,
            review: `I had a really amazing experience, my function was so beautiful handled and I was left awestruck by the decorations which were more amazing then the pictures that were shown to us.`,
        },
        {
            id: 6,
            name: 'Suhina Agarwal',
            img: suhina,
            review: `Highly professional and responsive
          Had a great experience with Making Memories. They were responsive, gave personal attention, attentive listeners, paid heed to every need and were detail oriented. Overall attitude was friendly yet professional. Would highly recommend them.`,
        }
    ]
    return (
        <Carousel
            orientation="horizontal"
            controlsOffset="xs"
            loop
            draggable={false}
            withIndicators
            styles={{
                indicator: {
                    width: 12,
                    height: 12,
                    transition: 'width 250ms ease',

                    '&[data-active]': {
                        backgroundColor: "#276D9E",
                    },
                },
            }}
            plugins={[autoplay.current]}
            slidesToScroll={1}
            align="start"
            withControls={false}
        >
            {slides.map((slide, index) => (
                <Carousel.Slide key={index}>
                    <div className="flex flex-wrap -mx-4 items-center mt-12">
                        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                            <div className="lg:max-w-md xl:max-w-lg">
                                <img className='block w-full rounded-xl' src={slide.img.src} alt="" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="max-w-lg">
                                <img className="block mb-8 h-8" src="/quote.png" alt="" />
                                <p className="text-2xl font-semibold text-gray-900 mb-5">&ldquo;{slide.review}&rdquo;</p>
                                <span className="block text-gray-900 font-semibold mb-1">&mdash; {slide.name} </span>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
            ))}
        </Carousel>
    );
}
export default Demo;