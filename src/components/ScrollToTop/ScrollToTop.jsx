import { useEffect, useState } from "react";
import "./scrollToTop.css";

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const pathLength = 308;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scrollTop * pathLength) / scrollHeight;
      setScrollY(progress);
      setIsVisible(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-10 right-10 w-12 h-12 flex items-center justify-center bg-transparent text-white rounded-full shadow-lg cursor-pointer transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
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
          stroke="#28aaa8"
          strokeWidth="4"
          strokeDasharray={`${pathLength} ${pathLength}`}
          strokeDashoffset={scrollY}
        />
      </svg>
      <span className="relative text-lg text-black">↑</span>
    </div>
  );
};

export default ScrollToTop;
