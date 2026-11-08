import { useState, useEffect } from "react"

function useBreakpoint() {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    function handleResize() {
      setIsLarge(window.innerWidth >= 1024)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isLarge
}

export default useBreakpoint