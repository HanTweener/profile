import {motion} from "motion/react"
import { staggerContainer, staggerItem } from "../lib/Motion"
import { guaranteePoints } from "../data/Guarantee"

function Guarantee() {
    return (
        <div id="guarantee" className="bg-gray-950 grid grid-cols-1 content-center px-5 lg:px-20 py-20">

            <div className="flex h-10 items-center">
                <span className="h-px w-5 bg-blue-300 me-1"></span>
                <p className="text-gray-500 text-sm font-bold tracking-wider">KOMITMEN_KERJA</p>
            </div>

            <h2 className="text-white text-4xl font-serif">
                Dikerjakan dengan
            </h2>
            <h2 className="text-blue-300 text-4xl font-serif italic">
                tanggung jawab & kejujuran
            </h2>

            <motion.div {...staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 border border-gray-800 rounded-lg mt-10">
                {guaranteePoints.map((point, index) => (
                    <motion.div {...staggerItem}
                        key={point.category}
                        className={`flex flex-col p-6 ${
                            (index + 1) % 3 !== 0 ? 'lg:border-r border-gray-800' : ''
                        } ${index < guaranteePoints.length - 3 ? 'border-b border-gray-800' : ''}`}
                    >
                        <p className="text-blue-300 text-xs font-bold tracking-wider">{point.category}</p>
                        <p className="text-white text-base font-semibold mt-2">{point.title}</p>
                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">{point.description}</p>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    )
}

export default Guarantee