import { useCallback, useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);
  return { scrollY };
};
