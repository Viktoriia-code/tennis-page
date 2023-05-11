import { HiArrowUp } from "react-icons/hi";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility)

      return () => {
        window.removeEventListener('scroll', toggleVisibility)
      }
    }, [])

    return (
      <div className="fixed bottom-2 right-2">
        <button
          type="button"
          onClick={scrollToTop}
          className={`
          ${isVisible ? 'opacity-100' : 'opacity-0'}
            sm:cursor-pointer fixed bottom-10 right-10 z-[999] rounded-lg bg-white/40 p-2 border-2 border-transparent
            group hover:bg-bg_light_primary hover:border-slate-200 hover:border-2 duration-300
            `}
        >
          <HiArrowUp size={30} aria-hidden="true" className="group-hover:scale-[1.15] duration-500" />
        </button>
      </div>
    )
  }

  export default ScrollToTop;