import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className="bg-white border-t border-slate-100 py-16 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
    <div className="flex flex-col gap-4">
      <h2 className="text-blue-500 text-2xl font-black tracking-tighter italic">
        Zenith<span className="text-blue-600">.</span>
      </h2>
      <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
        Solusi desain website profesional untuk meningkatkan kredibilitas bisnis Anda di era digital.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm font-semibold text-slate-600">
      <div className="flex flex-col gap-3">
        <Link href="#services" className="hover:text-blue-600 transition-colors">Layanan</Link>
        <Link href="#pricelist" className="hover:text-blue-600 transition-colors">Harga</Link>
      </div>
      <div className="flex flex-col gap-3">
        <Link href="#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
        <Link href="#contact" className="hover:text-blue-600 transition-colors">Kontak</Link>
      </div>
      <div className="flex gap-4 items-center">
        <a href="#" className="text-slate-400 hover:text-blue-600 transition-all">
          <FaInstagram size={22} />
        </a>
        <a href="#" className="text-slate-400 hover:text-blue-600 transition-all">
          <FaLinkedinIn size={22} />
        </a>
        <a href="#" className="text-slate-400 hover:text-blue-600 transition-all">
          <FaWhatsapp size={22} />
        </a>
      </div>
    </div>
  </div>

  <div className="max-w-6xl mx-auto border-t border-slate-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-xs text-slate-400 font-medium tracking-wide">
      © {new Date().getFullYear()} ZENITH. ALL RIGHTS RESERVED.
    </p>
    <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
      <a href="#" className="hover:underline">Privacy Policy</a>
      <a href="#" className="hover:underline">Terms of Service</a>
    </div>
  </div>
</footer>
    )
}