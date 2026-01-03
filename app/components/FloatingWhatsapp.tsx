import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

export default function FloatingWhatsapp() {
    return(
        <main className="fixed bottom-5 right-8 max-md:bottom-3 max-md:right-4">
            <Link href={'https://wa.me/6283824425487?text=Halo%20saya%20tertarik%20mengunakan%20jasa%20anda'}><FaWhatsapp className="bg-green-400 h-15 max-md:h-13 p-3 cursor-pointer rounded-full w-fit text-white" fontSize={100}/></Link>
        </main>
    )
}