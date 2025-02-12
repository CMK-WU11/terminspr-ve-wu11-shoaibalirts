"use client";
import { getUserData } from "@/lib/apilandrupdans";
import Cookies from "js-cookie";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function FitnessDetailComp({ fitness }) {
  const [isTextBtn, setIsTextBtn] = useState();
  const myRole = Cookies.get("cookieRole");
  const myToken = Cookies.get("cookieToken");
  const userId = Cookies.get("cookieUserId");
  // console.log("myToken in FitnessDetailComp: ", myToken);
  //   console.log(fitness);
  function abc() {
    if (myToken === undefined || myRole === "instructor") {
      return false;
    } else {
      return true;
    }
  }

  let userData;
  let numOfActivitiesThisUserHas;
  useEffect(() => {
    (async () => {
      userData = await getUserData(userId);
      console.log(
        "no. of activities this user has (console log in FitnessDetailComp): ",
        userData.activities.length
      );
      numOfActivitiesThisUserHas = userData.activities.length;
      if (numOfActivitiesThisUserHas === 0 && myRole !== "instructor") {
        setIsTextBtn("Tilmeld");
      } else {
        setIsTextBtn("Forlad");
      }
      if (myRole === "instructor") {
      }
    })();
  }, []);

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
              {isTextBtn}
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
