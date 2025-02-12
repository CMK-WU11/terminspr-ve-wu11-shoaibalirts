"use client";
import Cookies from "js-cookie";
import Image from "next/image";
export default function FitnessDetailComp({ fitness }) {
  const myToken = Cookies.get("cookieToken");

  console.log("myToken in FitnessDetailCom: ", myToken);
  //   console.log(fitness);
  function abc() {
    if (myToken === undefined) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <section>
        <div className="relative h-96 mb-4 w-[100vw]">
          <Image
            src={fitness.asset.url}
            layout="fill"
            objectFit="cover"
            priority
            alt={`fitness-${fitness.asset.url}`}
            className="absolute md:rounded-xl transform md:hover:scale-105 md:hover:rounded-xl md:duration-200"
          />
          {abc() && (
            <button className="absolute right-1/4 bottom-4 rounded-xl px-32 py-8 bg-mehroonish text-grayish font-ubuntu text-2xl">
              Forlad
            </button>
          )}
        </div>
        <div className="flex flex-col p-12 text-white px-12 py-4 brightness-100">
          <h2 className="text-[24px]">{fitness.name}</h2>
          <p className="text-[18px]">
            {fitness.minAge}-<span>{fitness.maxAge} år</span>
          </p>
          <p className="text-[18px]">{fitness.description}</p>
        </div>
      </section>
    </>
  );
}
