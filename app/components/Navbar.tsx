"use client"
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/90 backdrop-blur-md z-50 sticky top-0 flex justify-around max-md:justify-between items-center h-20 w-full border-b border-gray-100 px-4">
            <div>
                <h1 className="bg-gradient-to-r from-blue-600 to-blue-400 text-3xl text-transparent bg-clip-text font-extrabold">Zenith</h1>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <Link href={'#Home'} className="text-gray-600 hover:text-blue-600 transition-all font-normal">Home</Link>
                <Link href={'#pricelist'} className="text-gray-600 hover:text-blue-600 transition-all font-normal">Pricelist</Link>
                <Link href={'#keunggulan-kami'} className="text-gray-600 hover:text-blue-600 transition-all font-normal">Keunggulan kami</Link>
                <Link href={'/'} className="text-gray-600 hover:text-blue-600 transition-all font-normal">Testimonial</Link>
                <Link href={'/'} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-all font-normal">
                    Kontak Kami
                </Link>
            </div>

            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            <div className={`absolute top-20 left-0 w-full bg-white border-b border-gray-100 flex flex-col p-6 gap-4 shadow-xl transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link href={'#Home'} onClick={() => setIsOpen(false)} className="text-gray-600 font-normal">Home</Link>
                <Link href={'#pricelist'} onClick={() => setIsOpen(false)} className="text-gray-600 font-normal">Pricelist</Link>
                <Link href={'#keunggulan-kami'} onClick={() => setIsOpen(false)} className="text-gray-600 font-normal">Keunggulan kami</Link>
                <Link href={'/'} onClick={() => setIsOpen(false)} className="text-gray-600 font-normal">Testimonial</Link>
                <hr className="border-gray-100" />
                <Link href={'/'} onClick={() => setIsOpen(false)} className="bg-blue-500 text-white p-3 rounded-md text-center font-normal">
                    Kontak Kami
                </Link>
            </div>
        </nav>
    );
}