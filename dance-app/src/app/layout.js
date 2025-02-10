import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntuFont = Ubuntu({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "dans app",
  description: "dansh app showing all activities related to dance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntuFont.variable}`}>{children}</body>
    </html>
  );
}
