'use client';

import React, { useState } from 'react';
import { Inter, Noto_Sans } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';


// Font configuration using next/font
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-inter',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans',
});

// --- Reusable Components ---

const Logo = () => (
    <div className="flex items-center gap-4 text-[var(--primary-color)]">
        <div className="size-6">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
            </svg>
        </div>
        <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-[-0.015em]">CoinPay</h2>
    </div>
);

const FormInput = ({ label, placeholder, type = 'text' }: any) => (
    <label className="flex flex-col">
        <span className="text-gray-800 text-sm font-medium mb-2">{label}</span>
        <input 
            className="form-input flex w-full min-w-0 flex-1 p-3 resize-none overflow-hidden rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] border border-gray-300 bg-white h-14 placeholder:text-gray-400 px-4 text-base font-normal leading-normal" 
            placeholder={placeholder} 
            type={type} 
        />
    </label>
);

const ContactDetail = ({ icon: Icon, title, children }: any) => (
    <div className="flex items-start gap-4">
        <Icon className="text-primary-600 mt-1 h-6 w-6" />
        <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p>{children}</p>
        </div>
    </div>
);

const FormTextarea = ({ id, name, label, placeholder, rows }: any) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="mt-1">
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                rows={rows}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-4"
            ></textarea>
        </div>
    </div>
);

// --- Main Page Component ---
export default function CoinPayPage() {
    const [activeTab, setActiveTab] = useState('Buy');
    const router = useRouter();

    const cryptoOptions = [
        { value: "BTC", label: "Bitcoin (BTC)" },
        { value: "ETH", label: "Ethereum (ETH)" },
        { value: "USDT", label: "Tether (USDT)" },
    ];
    
    const networkOptions = [
        { value: "ERC20", label: "ERC20" },
        { value: "TRC20", label: "TRC20" },
        { value: "BEP20", label: "BEP20" },
    ];

    return (
        <div className={`${inter.variable} ${notoSans.variable} font-sans relative flex size-full min-h-screen flex-col bg-white`}>
            {/* --- Header --- */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 md:px-10 py-4">
                <Logo />
                <nav className="flex items-center gap-9">
                    <button 
                        onClick={() => {
                            router.push('/')
                        }}
                        className={`text-black text-sm cursor-pointer font-medium leading-normal transition-colors`}
                    >
                        Buy
                    </button>
                    <button 
                        onClick={() => {
                          setActiveTab('Sell')
                          router.push('/pages/sell')
                        }}
                        className={`text-black text-sm cursor-pointer font-medium leading-normal transition-colors`}
                    >
                        Sell
                    </button>
                     <button 
                        onClick={() => {
                        }}
                        className={`text-blue-700 text-sm cursor-pointer font-medium leading-normal transition-colors`}
                    >
                        Contact us
                    </button>
                </nav>
            </header>
            
            {/* --- Main Content --- */}
            <main className="flex-1 px-4 sm:px-10 py-10 flex justify-center bg-gray-50/50">
                <div className="w-full max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
                    {/* <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">
                        Contact Us
                    </h2> */}
                     <main className="flex flex-col items-center w-full ">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                        <div className="">
                            {/* Left Side: Form */}
                            {/* <div>
                                <div className="mb-8">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h1>
                                    <p className="mt-4 text-lg text-gray-600">We&apos;re here to help. Reach out to us with any questions or concerns.</p>
                                </div>
                                <form action="#" method="POST" className="space-y-6">
                                    <FormInput id="name" name="name" label="Name" type="text" placeholder="Your Name" autoComplete="name" />
                                    <FormInput id="email" name="email" label="Email" type="email" placeholder="Your Email" autoComplete="email" />
                                    <FormInput id="subject" name="subject" label="Subject" type="text" placeholder="Subject" />
                                    <FormTextarea id="message" name="message" label="Message" placeholder="Your Message" rows={4} />
                                    <div>
                                        <button 
                                            type="submit" 
                                            className="flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div> */}

                            {/* Right Side: Contact Info & Map */}
                            <div className=''>
                                <div className="">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                                        <div className="mt-6 space-y-6 text-base text-gray-600">
                                            <ContactDetail icon={Phone} title="Phone">(555) 123-4567</ContactDetail>
                                            <ContactDetail icon={Mail} title="Email">support@coinpay.com</ContactDetail>
                                            <ContactDetail icon={MapPin} title="Address">123 Crypto Lane, Blockchain City, 10001</ContactDetail>
                                        </div>
                                    </div>
                                    <div>
                                        {/* <h2 className="text-2xl font-bold text-gray-900">Our Location</h2> */}
                                        <div className="mt-6">
                                            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                                                {/* <Image
                                                    src="https://images.unsplash.com/photo-1561587342-6a5b6f3a1413?q=80&w=2835&auto=format&fit=crop"
                                                    alt="Map location"
                                                    layout="fill"
                                                    objectFit="cover"
                                                /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                </div>
            </main>
        </div>
    );
}
