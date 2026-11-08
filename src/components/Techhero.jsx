import { mainTechStack } from "../data/Profile"

function Techhero() {
    
    return(
        <>
            <div className="flex flex-wrap gap-2">
                {mainTechStack.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 bg-blue-950 border border-blue-800 text-blue-300 font-semibold text-xs font-mono rounded-xs"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </>
    )
}

export default Techhero