import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Velkommen",
  description: "Velkommen og komme i gang",
};
export default function HomePage() {
  return (
    <>
      <main className="flex items-center justify-center relative">
        <Hero text1="landrup" text2="dans" linkText="kom i gang" />
        {/* <p className="font-ubuntu">hello</p> */}
      </main>
    </>
  );
}
