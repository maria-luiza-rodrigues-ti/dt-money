import { useEffect, useState } from "react";

export function useMobile() {
  const [screenWidth, SetScreenWidth] = useState(window.innerWidth);
  const isMobile = screenWidth < 768;

  function handleWindowSizeChange() {
    SetScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return isMobile;
}