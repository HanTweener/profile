import {motion} from "motion/react"
import { scrollReveal } from "../lib/Motion"
import { profile } from "../data/Profile"

function About() {

    const infoList = [
        { label: 'nama', value: profile.name },
        { label: 'domisili', value: profile.location },
        { label: 'email', value: profile.email },
        { label: 'github', value: profile.github.display },
        { label: 'entitas', value: profile.entitas },
        { label: 'sektor', value: profile.sektor },
        { label: 'pengalaman', value: profile.pengalaman },
    ]

    return (
        <div id="about" className="bg-gray-950 grid grid-cols-1 lg:grid-cols-2 content-center gap-10 px-4 sm:px-5 lg:px-20 py-20">

            {/* Kolom kiri: label + paragraf + code box */}
            <div className="flex flex-col">
                <div className="flex h-10 items-center">
                    <span className="h-px w-5 bg-blue-300 me-1"></span>
                    <p className="text-gray-500 text-sm font-bold tracking-wider">ABOUT ME</p>
                </div>

                <p className="text-gray-500 text-base/7 font-semibold mt-6">
                    Saya <span className="text-white font-semibold">mahasiswa S1 Informatika</span> konsentrasi
                    Web and Mobile Developer di <span className="text-white font-semibold">Universitas Teknologi Yogyakarta</span>,
                    dengan minat besar membangun aplikasi web dan mobile yang fungsional dan mudah digunakan.
                </p>

                <p className="text-gray-500 text-base/7 font-semibold mt-4">
                    Kemampuan saya mencakup <span className="text-white font-semibold">pengembangan full-stack</span>:
                    dari perancangan sistem, integrasi database, hingga tampilan antarmuka yang
                    <span className="text-white font-semibold"> responsif dan rapi</span>.
                </p>

                <p className="text-gray-500 text-base/7 font-semibold mt-4">
                    Saat ini bersiap memulai karir sebagai <span className="text-white font-semibold">Full Stack Developer</span>,
                    dengan tujuan terus mengembangkan kemampuan menciptakan solusi digital yang relevan dengan kebutuhan industri.
                </p>

                <div className="flex h-10 w-fit items-center px-4 mt-6 bg-blue-950/20 ring-1 ring-blue-900 rounded-xs">
                    <span className="text-gray-500 font-mono text-sm">// <span className="text-blue-300">Farhan</span> —</span>
                </div>
            </div>

            {/* Kolom kanan: card info */}
            <motion.div {...scrollReveal} className="flex flex-col justify-center bg-gray-950 rounded-lg ring-1 ring-gray-800 overflow-hidden">
                {infoList.map((item, index) => (
                    <div
                        key={item.label}
                        className={`flex justify-between items-baseline gap-3 sm:gap-4 px-4 sm:px-6 py-3.5 sm:py-4 ${
                            index !== infoList.length - 1 ? 'border-b border-gray-800' : ''
                        }`}
                    >
                        <span className="text-gray-500 font-mono text-xs shrink-0">{item.label}</span>
                        <span className="text-white font-semibold text-xs sm:text-sm text-right min-w-0 flex-1 break-words [overflow-wrap:anywhere]">
                            {item.value}
                        </span>
                    </div>
                ))}
            </motion.div>

        </div>
    )

}

export default About
