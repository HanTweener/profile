import {motion} from "motion/react"
import { scrollReveal } from "../lib/Motion"
import { profile } from "../data/Profile"

function Contact() {
    return (
        <motion.div id="contact" className="min-h-screen bg-black flex flex-col justify-center items-center px-5 lg:px-20 py-20 text-center">

            <motion.div {...scrollReveal} className="flex items-center gap-2 px-4 py-2 bg-blue-950/20 ring-1 ring-blue-900 rounded-full">
                <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></span>
                <span className="text-blue-300 text-xs font-mono">terbuka untuk peluang kerja</span>
            </motion.div>

            <motion.h2 {...scrollReveal} className="text-white text-4xl font-serif mt-6">
                Punya posisi yang cocok?
            </motion.h2>
            <motion.h2 {...scrollReveal} className="text-blue-300 text-4xl font-serif italic">
                Mari terhubung.
            </motion.h2>

            <motion.p {...scrollReveal} className="text-gray-500 text-sm max-w-md mt-6 leading-relaxed">
                Sebagai fresh graduate, saya terbuka untuk diskusi seputar posisi Web Developer,
                Mobile Developer, atau peluang magang/entry level lainnya. Biasanya saya merespons dalam 1×24 jam kerja.
            </motion.p>

            <motion.div {...scrollReveal} className="flex flex-col sm:flex-row gap-3 mt-8">
                <motion.a 
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 px-5 py-3 bg-gray-950 ring-1 ring-gray-800 hover:ring-blue-400 text-gray-400 hover:text-white text-sm font-mono rounded-xs transition"
                >
                    ✉ {profile.email}
                </motion.a>
                <motion.a
                    href={profile.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-gray-950 ring-1 ring-gray-800 hover:ring-blue-400 text-gray-400 hover:text-white text-sm font-mono rounded-xs transition"
                >
                    ⌥ {profile.github.display}
                </motion.a>
            </motion.div>

            <motion.a {...scrollReveal}
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 px-6 py-3 bg-blue-400 hover:brightness-110 hover:scale-102 hover:shadow-lg hover:shadow-blue-400 hover:ring-2 hover:ring-blue-400 text-black text-sm font-semibold rounded-xs transition duration-200 mt-8"
            >
                Kirim Pesan →
            </motion.a>

        </motion.div>
    )
}

export default Contact
