import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [requirement, setRequirement] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        var data;
        if (name && email && phone && requirement && message) {
            if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                toast.error('Enter a valid email address!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else if (!phone.match(/^\d{10}$/)) {
                toast.error('Enter a valid phone number!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else {
                const emailMsg = `
                Name: ${name}
                <br />
                Email: ${email}
                <br />
                Phone Number: ${phone}
                <br />
                Requirement: ${requirement}
                <br />
                Message: ${message}
                `
                const subject = 'Data from Contact Form'
                data = {
                    name,
                    email,
                    phone,
                    requirement,
                    message,
                    emailMsg,
                    subject,
                }


                let gmail = await fetch('/api/sendinblue', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                let gmailres = await gmail.json()
                if (gmailres.success) {
                    toast.success("We will contact you shortly!", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                setName('')
                setEmail('')
                setPhone('')
                setRequirement('')
                setMessage('')
            }
        }
        else {
            toast.info('Please fill all the fields!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div>
            <Head>
                <title>Contact Us - Making Memories</title>
            </Head>
            <div className='pt-20 overflow-hidden'>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <section className="min-h-screen bg-cover contact-bg">
                    <div className="flex flex-col min-h-screen bg-black/60">
                        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                            <div className="flex-1 lg:flex lg:items-center lg:mx-6">
                                <div data-aos='fade-left' className="text-white lg:w-1/2 lg:mx-6">
                                    <div className="mt-6 space-y-8 md:mt-8">
                                        <p className="flex items-start -mx-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#276D9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>

                                            <span className="mx-2 text-white truncate w-72">
                                                288/21 Arya Nagar, Lucknow 226004
                                            </span>
                                        </p>

                                        <div className="flex items-start -mx-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#276D9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <ul>
                                                <li className="mx-2 text-white truncate w-72">Deeksha Ahuja - 9335540800</li>
                                                <li className="mx-2 text-white truncate w-72">Abhishek Srivastava- 9793337555</li>
                                            </ul>
                                        </div>

                                        <p className="flex items-start -mx-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#276D9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>

                                            <span className="mx-2 text-white  w-72">makingmemoriesevent@makingmemoriesevent.com</span>
                                        </p>
                                    </div>

                                    <div className="mt-6 md:mt-8">
                                        <h3 className="text-gray-300 ">Follow us</h3>

                                        <div className="flex mt-4 -mx-1.5 ">

                                            <Link className="mx-1.5 text-white transition-all duration-300 hover:scale-110" href="https://www.facebook.com/eventplannerslucknow" target='_blank' rel='noopener noreferrer'>
                                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                                </svg>
                                            </Link>

                                            <Link className="mx-1.5 text-white transition-all duration-300 hover:scale-110" href="https://www.instagram.com/makingmemorieevent/?igshid=YmMyMTA2M2Y%3D" target='_blank' rel='noopener noreferrer'>
                                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                                                </svg>
                                            </Link>
                                            <Link className="mx-1.5 text-white transition-all duration-300 hover:scale-110" href="https://www.youtube.com/channel/UCUHZzcn0oyD-C1Baot7XKhg" target='_blank' rel='noopener noreferrer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path></g></g>
                                                </svg>
                                            </Link>
                                            <Link className="mx-1.5 text-white transition-all duration-300 hover:scale-110" href="https://in.pinterest.com/MakingMemoriee/" target='_blank' rel='noopener noreferrer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256"
                                                    style={{ fill: "#000000" }}>
                                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.68213,0 -23,10.31787 -23,23c0,9.88416 6.26758,18.33026 15.03638,21.57697c-0.25256,-2.25159 -0.21295,-5.93903 0.2038,-7.72437c0.39026,-1.677 2.52124,-10.68713 2.52124,-10.68713c0,0 -0.64331,-1.28833 -0.64331,-3.1911c0,-2.99017 1.73242,-5.22119 3.88983,-5.22119c1.83496,0 2.71979,1.37762 2.71979,3.0282c0,1.8457 -1.17346,4.60266 -1.78125,7.15784c-0.5069,2.14093 1.07336,3.88654 3.18365,3.88654c3.82123,0 6.75848,-4.0296 6.75848,-9.84534c0,-5.14758 -3.698,-8.74719 -8.97955,-8.74719c-6.11676,0 -9.70728,4.58856 -9.70728,9.33099c0,1.84735 0.71118,3.82867 1.6001,4.90698c0.17529,0.21332 0.20093,0.39941 0.14886,0.61603c-0.1629,0.67889 -0.52509,2.13928 -0.59705,2.4386c-0.09344,0.39447 -0.31177,0.47632 -0.71863,0.28693c-2.68579,-1.25031 -4.3645,-5.17566 -4.3645,-8.32959c0,-6.78156 4.92682,-13.0108 14.20654,-13.0108c7.45886,0 13.25476,5.31384 13.25476,12.41791c0,7.41003 -4.67291,13.37299 -11.15686,13.37299c-2.17889,0 -4.22638,-1.13202 -4.92676,-2.46918c0,0 -1.07831,4.10486 -1.34045,5.11121c-0.45245,1.74042 -2.38928,5.34601 -3.36157,6.9837c2.22424,0.71851 4.59357,1.11102 7.05377,1.11102c12.68262,0 23,-10.31738 23,-23c0,-12.68213 -10.31738,-23 -23,-23z"></path></g></g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 lg:w-1/2 lg:mx-6">
                                    <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl">
                                        <h1 className="text-xl font-medium">Get a Quote</h1>

                                        <p className="mt-2 text-gray-500">
                                            Let us know a few details and we&apos;ll get back with the best quote for your requirements.
                                        </p>

                                        <form className="mt-6">
                                            <div className="flex-1">
                                                <label className="block mb-2 text-sm text-gray-600 ">Name</label>
                                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                            </div>

                                            <div className="flex-1 mt-6">
                                                <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                            </div>

                                            <div className="flex-1 mt-6">
                                                <label className="block mb-2 text-sm text-gray-600 ">Phone</label>
                                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="+91XXXXXXXXXX" className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                            </div>

                                            <div className="flex-1 mt-6">
                                                <label className="block mb-2 text-sm text-gray-600 ">Requirement</label>
                                                <select value={requirement} onChange={(e) => setRequirement(e.target.value)} placeholder='Select your requirement' className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                                                    <option value="">Please choose an option</option>
                                                    <option value='Full Event Planning'>Full Event Planning</option>
                                                    <option value='Wedding Designing'>Wedding Designing</option>
                                                    <option value='Wedding Decoration'>Wedding Decoration</option>
                                                    <option value='Wedding Entertainment'>Wedding Entertainment</option>
                                                </select>
                                            </div>

                                            <div className="w-full mt-6">
                                                <label className="block mb-2 text-sm text-gray-600 ">Message</label>
                                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full h-32 px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Enter your venue and dates for the event"></textarea>
                                            </div>

                                            <button onClick={handleSubmit} className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 text-white">
                                                get in touch
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact