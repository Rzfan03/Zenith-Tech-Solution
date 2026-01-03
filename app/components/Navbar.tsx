"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Logika untuk mendeteksi scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 z-50 flex max-md:gap-55 justify-around max-md:justify-between items-center h-20 w-full px-4 transition-all duration-300 ${
            isScrolled 
            ? "bg-white border-b border-gray-100 shadow-sm" 
            : "bg-transparent border-b border-transparent"
        }`}>
            <div>
                <Image
                src={'/logo.png'}
                width={500}
                height={500}
                alt="logo"
                className="h-68 w-fit object-cover"
                />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
                <Link href={'#Home'} className={`${isScrolled ? 'text-gray-600' : 'text-blue-500'} hover:text-blue-500 transition-all font-medium`}>Home</Link>
                <Link href={'#pricelist'} className={`${isScrolled ? 'text-gray-600' : 'text-blue-500'} hover:text-blue-500 transition-all font-medium`}>Pricelist</Link>
                <Link href={'#keunggulan-kami'} className={`${isScrolled ? 'text-gray-600' : 'text-blue-500'} hover:text-blue-500 transition-all font-medium`}>Keunggulan kami</Link>
                <Link href={'#testimonial'} className={`${isScrolled ? 'text-gray-600' : 'text-blue-500'} hover:text-blue-500 transition-all font-medium`}>Testimonial</Link>
                <Link href={'https://wa.me/6283824425487?text=Halo%20saya%20tertarik%20mengunakan%20jasa%20anda'} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-all font-normal">
                    Kontak Kami
                </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-gray-600' : 'text-white'} focus:outline-none transition-colors`}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`absolute top-20 left-0 w-full bg-white border-b border-gray-100 flex flex-col p-6 gap-4 shadow-xl transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link href={'#Home'} onClick={() => setIsOpen(false)} className="text-gray-600 font-normal">Home</Link>
                <Link href={'#pricelist'} onClick={() => setIsOpen(false)} className="text-gray-600 font-normal">Pricelist</Link>
                <Link href={'#keunggulan-kami'} onClick={() => setIsOpen(false)} className="text-gray-600 font-normal">Keunggulan kami</Link>
                <Link href={'#testimonial'} onClick={() => setIsOpen(false)} className="text-gray-600 font-normal">Testimonial</Link>
                <hr className="border-gray-100" />
                <Link href={'https://wa.me/6283824425487?text=Halo%20saya%20tertarik%20mengunakan%20jasa%20anda'} onClick={() => setIsOpen(false)} className="bg-blue-500 text-white p-3 rounded-md text-center font-normal">
                    Kontak Kami
                </Link>
            </div>
        </nav>
    );
}