"use client"

import Navbar from "./components/Navbar"
import Link from "next/link"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa"
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { CiMobile3 } from "react-icons/ci";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { TfiStatsUp } from "react-icons/tfi";
import PricingCard from "./components/PricingCard";
import Footer from "./components/Footer";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import { motion } from "framer-motion";

export default function Home() {
  return(
    <main>
      <Navbar/>
      <FloatingWhatsapp/>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}

    >
      <section id="Home" className="h-screen top-0 flex justify-center items-center">
        <div className="absolute -z-50">
          <Image
          src={'https://img.freepik.com/free-vector/gray-abstract-wireframe-background_53876-99911.jpg?semt=ais_hybrid&w=740&q=80'}
          height={1000}
          width={1000}
          alt="home-bg"
          className="h-screen w-screen object-cover"
          />
        </div>
        <div className="flex flex-col gap-10 justify-center items-center">
          <div>
            <h1 className=" max-md:text-3xl max-md:max-w-2xl text-5xl text-center max-w-5xl bg-gradient-to-r text-transparent from-blue-600 to-blue-400 bg-clip-text font-extrabold">Capek Balas Chat Satu-Satu? Biar Website yang Jualan, Anda Tinggal Terima Beres.</h1>
            <p className="max-md:text-sm text-lg max-w-5xl text-center mt-2 text-gray-600">Kamu bisa punya website keren yang user friendly, design responsif, optimasi SEO dan domain resmi yang bisa menarik banyak pelanggan ke website mu</p>
          </div>
            <Link href={'#pricelist'} className="rounded-full inset-shadow-sm inset-shadow-blue-100 hover:inset-shadow-blue-300 transition-all hover:bg-blue-600 flex items-center gap-2 hover:gap-4 bg-blue-500 text-white py-3 px-4">Buat Website Sekarang<FaArrowRight/></Link>
        </div>
      </section>
      
    </motion.div>
      {/* sedikit pemanis */}
      <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }} // true = animasi cuma sekali, false = animasi ulang tiap scroll up/down
  transition={{ duration: 1.0 }}
> <section className="min-h-[80vh] max-md:p-5 mt-5 bg-white flex justify-center items-center">
        <div className="flex max-md:flex-col-reverse justify-around items-center">
          <div className="flex flex-col gap-2">
             <h1 className="text-5xl max-md:text-3xl max-md:mt-5 max-w-3xl text-blue-600 mb-2">Tanpa website
             bisnis kamu bisa kehilangan pelanggan
          </h1>
            <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-blue-700"/> Pelanggan Ragu</p>
            <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-blue-700"/> Bisnis tidak muncul di google</p>
            <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-blue-700"/> Gagal bersaing dari kompetitor lain</p>
            <p className="flex items-center gap-2"><IoMdCheckmarkCircleOutline className="text-blue-700"/> Informasi bisnis tak lengkap</p>
          </div>
          <div>
            <Image
          src={'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_640.jpg'}
          height={500}
          width={500}
          alt="laptop-img"
          className="rounded-md"
          />
          </div>
        </div>
      </section>
</motion.div>
      {/* keunggulan */}
      <section id="keunggulan-kami" className="min-h-[90vh] mt-12 flex flex-col gap-14 items-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl max-md:text-3xl font-extrabold bg-gradient-to-r text-transparent from-blue-600 to-blue-400 bg-clip-text">Keunggulan kami</h1>
        <p className="text-gray-500 text-lg ">Fitur lengkap yang kami berikan</p>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
          {/* Card 1 */}
          <div className="flex flex-col p-5 min-h-50 bg-white max-w-90 hover:scale-105 hover:shadow-md transition-all border border-gray-200 rounded-md">
           <div className="flex flex-col justify-between gap-4">
             <div>
              <LuLaptopMinimalCheck className="text-blue-500 bg-blue-100 p-2 rounded-md mb-2" fontSize={'50'}/>
            <h1 className="font-bold text-2xl bg-gradient-to-r text-transparent from-blue-600 to-blue-400 bg-clip-text max-md:text-2xl">SEO <br/> Optimized</h1>
            </div>
            <p className="text-md max-w-lg text-gray-600">Optimasi SEO onpage membantu website Anda tampil di halaman depan pencarian</p>
           </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col p-5 min-h-50 max-w-90 hover:scale-105 hover:shadow-md transition-all border border-gray-200 rounded-md">
           <div className="flex flex-col justify-between gap-4">
             <div>
              <CiMobile3 className="text-blue-500 bg-blue-100 p-2 rounded-md mb-2" fontSize={'50'}/>
            <h1 className="font-bold text-2xl bg-gradient-to-r text-transparent from-blue-600 to-blue-400 bg-clip-text max-md:text-2xl">Mobile<br/> Friendly</h1>
            </div>
            <p className="text-md max-w-lg text-gray-600">Website anda tampil sempurna di semua perangkat - pelanggan bisa nyaman</p>
           </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col p-5 min-h-50 max-w-90 hover:scale-105 hover:shadow-md transition-all border border-gray-200 rounded-md">
           <div className="flex flex-col justify-between flex-1 gap-4">
             <div>
              <BsReverseLayoutTextWindowReverse className="text-blue-500 bg-blue-100 p-2 rounded-md mb-2" fontSize={'45'}/>
            <h1 className="font-bold text-2xl bg-gradient-to-r text-transparent from-blue-600 to-blue-400 bg-clip-text max-md:text-2xl">Desain <br/> Professional</h1>
            </div>
            <p className="text-md max-w-lg text-gray-600">Desain yang elegan, user friendly dapat meningkatkan kepercayaan bisnis anda</p>
           </div>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col p-5 min-h-50 max-w-90 hover:scale-105 hover:shadow-md transition-all border border-gray-200 rounded-md">
           <div className="flex flex-col justify-between flex-1">
             <div>
              <BiNetworkChart className="text-blue-500 bg-blue-100 p-2 rounded-md mb-2" fontSize={'45'}/>
            <h1 className="font-bold text-2xl bg-gradient-to-r text-transparent from-blue-600 to-blue-400 bg-clip-text max-md:text-2xl">Integrasi <br/> Sosial Media</h1>
            </div>
            <p className="text-md max-w-lg text-gray-600">Website langsung terhubung ke akun Instagram, Facebook, WhatsApp Anda — lebih dekat dengan pelanggan</p>
           </div>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col p-5 min-h-50 max-w-90 hover:scale-105 hover:shadow-md transition-all border border-gray-200 rounded-md">
           <div className="flex flex-col justify-between flex-1">
             <div>
              <HiOutlineGlobeAlt className="text-blue-500 bg-blue-100 p-2 rounded-md mb-2" fontSize={'50'}/>
            <h1 className="font-bold text-2xl bg-gradient-to-r text-transparent from-blue-600 to-blue-400 bg-clip-text max-md:text-2xl">Free <br/> Hosting</h1>
            </div>
            <p className="text-md max-w-lg text-gray-600">Dapatkan hosting resmi gratis untuk websitemu - bisa meningkatkan kepercayaan pelanggan</p>
           </div>
          </div>
          {/* Card 6 */}
          <div className="flex flex-col p-5 min-h-50 max-w-90 hover:scale-105 hover:shadow-md transition-all border border-gray-200 rounded-md">
           <div className="flex flex-col justify-between gap-2 flex-1">
             <div>
              <TfiStatsUp className="text-blue-500 bg-blue-100 p-2 rounded-md mb-2" fontSize={'50'}/>
            <h1 className="font-bold text-2xl bg-gradient-to-r text-transparent from-blue-600 to-blue-400 bg-clip-text max-md:text-2xl">Fast <br/>Performance</h1>
            </div>
            <p className="text-md max-w-lg text-gray-600">Dapat kan website dengan performa yang cepat membuat pelanggan betah di website anda</p>
           </div>
          </div>
        </div>
      </section>
      {/* pricelist */}
      <section id="pricelist" className="min-h-screen gap-8 py-20 bg-white flex justify-center flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-5 font-extrabold bg-gradient-to-r from-blue-500 to-blue-400 text-5xl text-transparent bg-clip-text">Pricelist</h1>
        <p className="text-gray-500 text-lg">Berikut paket yang kami sediakan</p>

        </div>
        {/* Card 1 */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
          <PricingCard
          title="Paket Bronze"
          href="https://wa.me/6283824425487?text=Halo%20saya%20mau%20pesan%20paket%20bronze"
          price="550k"
          features={[
    { text: "5 Halaman", included: true },
    { text: "Free Hosting", included: true },
    { text: "10 Image", included: true },
    { text: "Basic SEO", included: true },
    { text: "Domain .shop, .biz.id", included: true },
    { text: "Speed Optimized", included: true },
    { text: "Revisi 3x", included: true },
  ]}
          />
          <PricingCard
          title="Paket Silver"
          href="https://wa.me/6283824425487?text=Halo%20saya%20mau%20pesan%20paket%20silver"
          price="750k"
          features={[
    { text: "18 Halaman", included: true },
    { text: "Free Hosting", included: true },
    { text: "30 Image", included: true },
    { text: "Advanced SEO", included: true },
    { text: "Domain .my.id, com", included: true },
    { text: "Intergrasi Google Maps", included: true },
    { text: "Revisi 5x", included: true }
  ]}
          />
          <PricingCard
          title="Paket Gold"
          href="https://wa.me/6283824425487?text=Halo%20saya%20mau%20pesan%20paket%20gold"
          price="1jt"
          features={[
    { text: "Bebas Request Halaman", included: true },
    { text: "Free Hosting", included: true },
    { text: "50+ Image", included: true },
    { text: "Advanced SEO", included: true },
    { text: "Domain my.id, .com, .id", included: true },
    { text: "Best Performance and Security", included: true },
    { text: "Revisi 15x", included: true }
  ]}
          />

        </div>
      </section>


      <section id="testimonial" className="min-h-[80vh] bg-gray-50 flex justify-center items-center">
        <div className="w-5xl max-md:w-90 min-h-90 p-5 bg-white border border-gray-300 rounded-md flex justify-between max-md:flex-col-reverse gap-4 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
                <h1 className="text-6xl max-w-4xl font-bold">Jadilah <span className="text-blue-500">Klien</span> <span className="text-blue-500">Pertama</span> kami.</h1>
            <p className="text-md text-gray-500 mt-2">Solusi digital tepat untuk Anda yang ingin naik kelas. Kami bantu urus semua teknisnya, Anda tinggal duduk manis dan fokus kembangkan bisnis utama</p>
            </div>
             <Link href={'#pricelist'} className="rounded-full mt-5 w-fit inset-shadow-sm inset-shadow-blue-100 hover:inset-shadow-blue-300 transition-all hover:bg-blue-600 flex items-center gap-2 hover:gap-4 bg-blue-500 text-white py-3 px-4">Buat Website Sekarang<FaArrowRight/></Link>
          </div>
          <div>
            <Image
            src={'https://img.freepik.com/foto-gratis/proses-kolaboratif-para-pebisnis-multikultural-menggunakan-presentasi-laptop-dan-pertemuan-komunikasi-bertukar-pikiran-tentang-rekan-kerja-proyek-yang-bekerja-merencanakan-strategi-kesuksesan-di-kantor-modern_7861-2510.jpg?semt=ais_hybrid&w=740&q=80'}
            height={1000}
            width={1000}
            alt="bg"
            className="rounded-md"
            />
          </div>
        </div>
      </section>


      <section className="py-24 bg-slate-50/50">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
        Tanya <span className="text-blue-600">Jawab</span>
      </h2>
      <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
      <p className="text-slate-500 text-lg md:text-xl font-medium">
        Informasi lengkap mengenai layanan pengembangan web kami.
      </p>
    </div>

    <div className="grid gap-6">
      <div className="group p-8 rounded-[2rem] border border-slate-200 bg-white hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Berapa lama proses pembuatan website?</h3>
        <p className="text-slate-600 leading-relaxed">
          Pengerjaan standar memakan waktu 7-14 hari kerja. Durasi ini bisa berubah tergantung pada kecepatan pengiriman materi konten dan kompleksitas fitur yang Anda minta.
        </p>
      </div>

      <div className="group p-8 rounded-[2rem] border border-slate-200 bg-white hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 text-orange-700 bg-orange-50/30">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Apakah biaya sudah termasuk domain dan hosting?</h3>
        <p className="text-slate-600 leading-relaxed font-medium">
          Biaya jasa yang tertera hanya mencakup pengembangan website (development). Untuk biaya domain dan hosting dibebankan secara terpisah agar Anda memiliki kepemilikan penuh atas akun langganan tersebut.
        </p>
      </div>

      <div className="group p-8 rounded-[2rem] border border-slate-200 bg-white hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Apakah website yang dibuat sudah mobile-friendly?</h3>
        <p className="text-slate-600 leading-relaxed">
          Ya, kami menggunakan pendekatan responsive design. Website Anda akan tampil sempurna dan profesional baik saat dibuka melalui Smartphone, Tablet, maupun Laptop.
        </p>
      </div>

      <div className="group p-8 rounded-[2rem] border border-slate-200 bg-white hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Berapa banyak revisi yang saya dapatkan?</h3>
        <p className="text-slate-600 leading-relaxed">
          Kami memberikan hingga 3 kali revisi mayor. Kami akan memastikan setiap detail visual dan fungsionalitas sudah sesuai dengan ekspektasi bisnis Anda sebelum website diluncurkan.
        </p>
      </div>

      <div className="group p-8 rounded-[2rem] border border-slate-200 bg-white hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Apakah saya mendapatkan akses ke source code?</h3>
        <p className="text-slate-600 leading-relaxed">
          Tentu. Setelah pelunasan, seluruh file website dan akses administratif akan diserahkan sepenuhnya kepada Anda tanpa ada biaya tersembunyi.
        </p>
      </div>
    </div>
  </div>
</section>
<Footer/>


    </main>
  )
}