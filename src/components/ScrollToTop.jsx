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
      <div className="fixed bottom-2 right-2 z-[999]">
        <button
          type="button"
          onClick={scrollToTop}
          className={`
          ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
            sm:cursor-pointer fixed bottom-10 right-10 z-[999] rounded-lg bg-white/40 p-2 border-2 border-transparent
            group hover:bg-bg_light_primary hover:border-slate-200 hover:border-2 duration-200
            `}
        >
          <HiArrowUp size={32} aria-hidden="true" color="#BCC9D2" className="group-hover:scale-[1.15] group-hover:fill-[#00233F] duration-500" />
        </button>
      </div>
    )
  }

  export default ScrollToTop;