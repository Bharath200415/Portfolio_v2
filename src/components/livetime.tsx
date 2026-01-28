"use client"
import { useEffect, useState } from "react";
import BlurFade from "./magicui/blur-fade";


const BLUR_FADE_DELAY = 0.04; 

function LiveTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;

      setTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const [clock, period] = time.split(" ");

  return (
    <span className="flex items-end">
      <BlurFade>{clock}</BlurFade>
      <BlurFade className="ml-0.5 text-[0.7em] opacity-80">
        {period}
      </BlurFade>
    </span>
  );
}

export default LiveTime;
