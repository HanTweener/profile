import {motion} from "motion/react"
import { staggerContainer, staggerItem } from "../lib/Motion"
import { skillGroups } from "../data/Skills"

function Skills() {
    return (
        <div id="skills" className="bg-black grid grid-cols-1 content-center px-5 lg:px-20 py-20">

            <div className="flex h-10 items-center">
                <span className="h-px w-5 bg-blue-300 me-1"></span>
                <p className="text-gray-500 text-sm font-bold tracking-wider">TECH_STACK</p>
            </div>

            <h2 className="text-white text-4xl font-serif mt-2">
                Teknologi yang <span className="text-blue-300 italic">saya kuasai</span>
            </h2>

            <motion.div {...staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-10">
                {skillGroups.map((group) => (
                    <motion.div {...staggerItem} key={group.category} className="flex flex-col">
                        <p className="text-blue-300 text-xs font-bold tracking-wider">{group.category}</p>
                        <div className="border-t border-gray-800 mt-2 mb-3"></div>
                        <div className="flex flex-col gap-2">
                            {group.items.map((item) => (
                                <div key={item} className="flex justify-between items-center">
                                    <span className="text-gray-500 text-sm">{item}</span>
                                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    )
}

export default Skills