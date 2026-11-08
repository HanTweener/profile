import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { colors } from "../lib/Color"

function CustomCursor() {

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const [isHovering, setIsHovering] = useState(false)

    //spring untuk gerakan outline lebih halus

    const springConfig = {damping:20, sitffness: 900}
    const outlineX = useSpring(cursorX, springConfig)
    const outlineY = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseOver = (e) => {
            if (e.target.closest("a, button")){
                setIsHovering(true)
            }
        }

        const handleMouseOut = (e) => {
            if(e.target.closest("a, button")){
                setIsHovering(false)
            }
        }
        

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mouseover", handleMouseOver)
        window.addEventListener("mouseout", handleMouseOut)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.addEventListener("mouseover", handleMouseOver)
            window.addEventListener("mouseout", handleMouseOut)
        }
    }, [cursorX, cursorY]
    )

    return (
        <>
            {/*Titik Kecil*/}
            <motion.div className="fixed top-[-4px] left-[-4px] w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] hover:scale-200"
            style={{ x: cursorX, y: cursorY }} animate={{ scale: isHovering? 2.5 : 1 }} transition={{ duration: 0.2 }} />

            {/*Outline*/}
            <motion.div className="fixed w-8 h-8 border-2 border-gray-800 rounded-full pointer-events-none z-[9999]"
            style={{ x: outlineX, y: outlineY, translateX: "-50%", translateY: "-50%" }} animate={{ borderColor: isHovering? colors.blue600 : colors.gray800}}
            />
        </>
    )
    
}

export default CustomCursor