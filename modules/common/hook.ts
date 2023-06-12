import { useEffect, useState } from "react";
import { TScreenSize } from "./types";

export const useScreenSize = (): TScreenSize => {
  const [screenSize, setScreenSize] = useState<TScreenSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.screen.width,
        height: window.screen.height,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenSize;
};
