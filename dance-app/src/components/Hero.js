"use client";
import { Roboto, Racing_Sans_One } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});
const racingFont = Racing_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-racingsansone",
});

export default function Hero({ text1, text2, linkText }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, [loaded]);

  return (
    <>
      <section
        id="hero"
        className={`${robotoFont.variable} min-h-screen w-full flex flex-col items-center justify-center `}
      >
        <section
          className={`${racingFont.variable} ${racingFont.variable} uppercase`}
        >
          <Link href="#" className="group">
            <p className="font-roboto text-grayish tracking-wide text-5xl group-hover:opacity-75 group-hover:duration-300">
              {text1}
            </p>
            <p className="font-racing text-pinkish font-bold text-5xl group-hover:opacity-75 group-hover:duration-300">
              {text2}
            </p>
          </Link>
          <div className="absolute left-0 p-2 w-96 bg-mehroonish"></div>

          {loaded && (
            <Link
              href="/activities"
              className="absolute bottom-4 center px-8 py-4 rounded-xl bg-mehroonish text-grayish duration-[1.5s] hover:bg-black hover:text-white animate-pulse"
            >
              {linkText}
            </Link>
          )}
        </section>
      </section>
    </>
  );
}
