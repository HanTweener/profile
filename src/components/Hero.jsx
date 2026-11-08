import useBreakpoint from "../hooks/useBreakpoint"
import ProfileCard from "./ProfileCard"
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, staggerItem } from "../lib/Motion";
import { profile, stats } from "../data/Profile"

function Hero() {
    const isLarge = useBreakpoint()

    return (
        <div id="hero" className="min-h-screen bg-black grid grid-cols-2 lg:grid-cols-4 content-start pt-[20vh] justify-center items-center px-5 lg:px-20">

            {/*Kolom kiri: Kalimat Pembuka, Tombol Proyek dan Kontak, Pengalaman*/}
            <div className="flex h-10 border-2 col-span-2 items-center">
                <span className="h-px w-5 bg-blue-300 me-1"></span>
                <p className="text-gray-500 text-sm font-bold tracking-wider">{profile.role}
                    <span className="inline-block w-2 h-2 bg-blue-300 rounded-full mx-2"></span>
                    {profile.domicile.split(',')[1]?.trim() || profile.domicile}</p>
            </div>
            <div className="flex pb-5 sm:w-full md:max-w-[50vw] min-h-10 lg:col-start-1 lg:row-start-2 col-span-2 lg:col-span-3 justify-center transition-[width] duration-300">
                <p className="text-gray-500 font-semibold text-base/7"> Full-stack developer <span className="text-white font-semibold">fresh graduate </span> dengan memiliki
                beberapa <span className="text-white font-semibold">pengalaman</span> dalam mengembangkan aplikasi web, sistem informasi, dan solusi 
                desktop dengan <span className="text-white font-semibold">arsitektur yang skalabel, keamanan teruji,</span> dan standar produksi.</p>
            </div>
            <motion.div {...fadeInUp} className="flex min-h-10 py-5 lg:col-start-1 lg:row-start-3 col-span-2 lg:col-span-3 justify-start gap-5">
                <motion.a href="#projects" className="flex h-10 w-35 justify-center items-center bg-blue-400 hover:brightness-110 hover:scale-102 hover:shadow-lg 
                hover:shadow-blue-400 hover:ring-2 hover:ring-blue-400 rounded-xs font-semibold transition duration-200">
                Lihat Project →
                </motion.a>
                <a href="#contact" className="flex h-10 w-35 justify-center items-center text-gray-500 ring-1 ring-blue-900 bg-black hover:text-white hover:brightness-110 
                hover:scale-102 hover:ring-2 hover:ring-blue-400 rounded-xs font-semibold transition duration-200">
                Hubungi Saya
                </a>
            </motion.div>
            <div className="flex min-h-10 my-5 py-10 sm:w-full lg:col-start-1 lg:row-start-4 col-span-2 lg:col-span-3 border-t border-gray-900 md:max-w-[50vw]">
                <div className="grid size-full grid-cols-3 grid-rows-2 justify-start gap-x-5">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl text-blue-300 tracking-tighter font-semibold font-serif">{stat.value}</p>
                        </div>
                    ))}
                    {stats.map((stat) => (
                        <div key={stat.label + '-label'}>
                            <p className="text-md text-gray-500 tracking-tighter font-semibold font-mono">{stat.label}</p>
                        </div>
                    ))}
                </div>
                
            </div>

            {/*Kolom kanan: Hero Card*/}
            <div className="hidden lg:flex h-full w-full lg:col-start-4 lg:row-start-2 lg:row-span-3 justify-end items-start">
                <ProfileCard key={isLarge}/>
            </div>
        </div>
    )
}

export default Hero