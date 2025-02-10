import Image from "next/image";
import Head from "next/head";
import { Roboto, Racing_Sans_One } from "next/font/google";

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
export const metadata = {
  title: "Velkommen",
  description: "Velkommen og komme i gang",
};
export default function Home() {
  return (
    <main>
      <div className={`${robotoFont.variable}`}>
        {/* <p className="font-roboto">Shoaib</p> */}
      </div>
      <div className={`${racingFont.variable}`}>
        <p className="font-racing">Ali</p>
      </div>
      <p className="font-ubuntu">hello</p>
    </main>
  );
}
