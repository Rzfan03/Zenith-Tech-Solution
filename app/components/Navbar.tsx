import Link from "next/link"

export default function Navbar() {
    return(
        <nav className=" backdrop-blur-lg z-50 sticky top-0 flex justify-around items-center gap-4 h-20 w-full">
            {/* kiri */}
            <div>
                <h1 className="bg-gradient-to-r from-blue-600 to-blue-400 text-3xl text-transparent bg-clip-text font-extrabold">Zenith</h1>
            </div>
            <div className="flex gap-2 max-md:hidden">
                    <Link href={'#Home'} className="hover:bg-blue-500 hover:text-white p-2 transition-all">Home</Link>
                    <Link href={'#pricelist'} className="hover:bg-blue-500 hover:text-white p-2 transition-all">Pricelist</Link>
                    <Link href={'#keunggulan-kami'} className="hover:bg-blue-500 hover:text-white p-2 transition-all">Keunggulan kami</Link>
                    <Link href={'#testimonial'} className="hover:bg-blue-500 hover:text-white p-2 transition-all">Testimonial</Link>
                    <Link href={'/'} className="bg-blue-500 inset-shadow-sm inset-shadow-blue-300 text-white p-2 transition-all">Kontak Kami</Link>
            </div>
        </nav>
    )
}