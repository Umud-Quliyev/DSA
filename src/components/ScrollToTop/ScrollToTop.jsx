import { useEffect, useState, useRef } from "react";
import { FaAngleUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(100);
  const pathLength = 308;
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scrollTop * pathLength) / scrollHeight;
      setScrollY(progress);
      setIsVisible(scrollTop > 200);

      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop <= windowHeight) {
          setBottomOffset(windowHeight - footerTop + 20);
        } else {
          setBottomOffset(40);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`fixed left-10 w-12 h-12 flex items-center justify-center bg-transparent text-white rounded-full shadow-lg cursor-pointer transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ bottom: `${bottomOffset}px` }}
        onClick={scrollToTop}
      >
        <svg
          className="absolute w-full h-full"
          viewBox="-1 -1 102 102"
          width="100%"
          height="100%"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            fill="#fff"
            stroke="#e2195b"
            strokeWidth="4"
            strokeDasharray={`${pathLength} ${pathLength}`}
            strokeDashoffset={scrollY}
          />
        </svg>
        <span className="relative text-lg  text-[#e2195b]"><FaAngleUp /></span>
      </div>
    </>
  );
};

export default ScrollToTop;
