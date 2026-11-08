import {motion} from "motion/react"
import { staggerContainer, staggerItem } from "../lib/Motion"
import { processSteps, processChecklist } from "../data/Process"

function Process() {
    return (
        <div id="process" className="bg-black grid grid-cols-1 content-center px-5 lg:px-20 py-20">

            <div className="flex h-10 items-center">
                <span className="h-px w-5 bg-blue-300 me-1"></span>
                <p className="text-gray-500 text-sm font-bold tracking-wider">CARA_KERJA</p>
            </div>

            <h2 className="text-white text-4xl font-serif">
                Semangat belajar,
            </h2>
            <h2 className="text-blue-300 text-4xl font-serif italic">
                siap berkembang
            </h2>

            <motion.div {...staggerContainer} className="grid grid-cols-1 lg:grid-cols-4 border border-gray-800 rounded-lg mt-10">
                {processSteps.map((step, index) => (
                    <motion.div {...staggerItem}
                        key={step.number}
                        className={`flex flex-col p-6 ${
                            index !== processSteps.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-gray-800' : ''
                        }`}
                    >
                        <span className="text-gray-800 text-4xl font-serif font-bold">{step.number}</span>
                        <p className="text-white text-base font-semibold mt-4">{step.title}</p>
                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">{step.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div {...staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-8">
                {processChecklist.map((item) => (
                    <motion.div {...staggerItem} key={item} className="flex items-center gap-3 border border-gray-800 rounded-lg px-5 py-4">
                        <span className="text-blue-300 text-sm">✓</span>
                        <span className="text-gray-400 text-sm">{item}</span>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    )
}

export default Process