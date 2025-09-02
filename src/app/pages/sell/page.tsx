'use client';

import React, { useState } from 'react';
import { Inter, Noto_Sans } from 'next/font/google';
import { useRouter } from 'next/navigation';

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

const FormSelect = ({ label, options, defaultValue }: any) => (
    <label className="flex flex-col">
        <span className="text-gray-800 text-sm font-medium mb-2">{label}</span>
        <select 
            className="form-select p-3 flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] border border-gray-300 bg-white h-14 px-4 text-base font-normal leading-normal appearance-none"
            defaultValue=""
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' fill='rgb(107, 114, 128)' viewBox='0 0 256 256'%3e%3cpath d='M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z'%3e%3c/path%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat' }}
        >
            <option value="" disabled>{defaultValue}</option>
            {options.map((option: any) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </label>
);

const PaymentMethod = ({ label, name, defaultChecked = false }: any) => (
    <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-md border border-gray-300 px-4 h-11 text-gray-800 has-[:checked]:border-2 has-[:checked]:border-[var(--primary-color)] has-[:checked]:bg-white relative cursor-pointer flex-1 transition-all">
        {label}
        <input defaultChecked={defaultChecked} className="invisible absolute" name={name} type="radio" />
    </label>
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
                            setActiveTab('Buy')
                        }}
                        className={`text-black text-sm cursor-pointer font-medium leading-normal transition-colors`}
                    >
                        Buy
                    </button>
                    <button 
                        onClick={() => setActiveTab('Sell')}
                        className={`text-sm cursor-pointer font-medium leading-normal transition-colors text-blue-600`}
                    >
                        Sell
                    </button>
                     <button 
                        onClick={() => {
                            router.push('/')
                            setActiveTab('Buy')
                        }}
                        className={`text-black text-sm cursor-pointer font-medium leading-normal transition-colors`}
                    >
                        Contact us
                    </button>
                </nav>
            </header>
            
            {/* --- Main Content --- */}
            <main className="flex-1 px-4 sm:px-10 py-10 flex justify-center bg-gray-50/50">
                <div className="w-full max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
                    <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">
                        Sell Crypto
                    </h2>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormSelect label="Cryptocurrency" options={cryptoOptions} defaultValue="Select coin" />
                            <FormSelect label="Network" options={networkOptions} defaultValue="Select network" />
                        </div>
                        <FormInput label="Wallet address" placeholder="Enter your wallet address" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormInput label="Full Name" placeholder="Enter your name" />
                            <FormInput label="Email" placeholder="Enter your email" type="email" />
                        </div>
                        <div>
                            <h3 className="text-gray-900 text-lg font-bold mb-4 mt-6">Payment method</h3>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                                {/* <PaymentMethod label="Mobile Money" name="payment_method" defaultChecked /> */}
                                <PaymentMethod label="Bank transfer" name="payment_method" />
                                {/* <PaymentMethod label="Pay with card" name="payment_method" /> */}
                            </div>
                        </div>
                        <div className="pt-6">
                            <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-5 bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors">
                                <span className="truncate">Continue</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
