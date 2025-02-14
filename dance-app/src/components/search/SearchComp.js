"use client";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function SearchComp({ activities }) {
  const [results, setResults] = useState(activities);
  const [isFound, setIsFound] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  function handleSearch(e) {
    setSearchVal(e.target.value);
    // console.log("e: ", e);

    const filteredResults = activities.filter((result) => {
      if (result.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        setIsFound(true);
        return result;
      }
      console.log(result);
    });
    setResults(filteredResults);
    console.log(results);
  }
  return (
    <>
      <search className="ml-12 mb-4 flex border-2 w-[50vw]">
        <input
          type="search"
          onChange={(event) => handleSearch(event)}
          value={searchVal}
          className="p-2 px-4 text-grayish bg-transparent border-none focus:outline-none"
        />
        <div className="text-grayish">
          <CiSearch className="w-10 h-10" />
        </div>
      </search>

      <section className="ml-12 mb-4 w-[80vw]">
        <h1></h1>
        {isFound && searchVal !== "" && (
          <ul>
            {results.map((activity) => (
              <Link
                href={`/activities/${activity.id}`}
                key={`activitydetails-${activity.id}`}
              >
                <li>
                  <div className="relative h-96 mb-4 w-[80vw] ">
                    <Image
                      src={activity.asset.url}
                      layout="fill"
                      objectFit="cover"
                      priority
                      alt={`activity-${activity.asset.url}`}
                      className="absolute rounded-xl md:rounded-l-xl transform hover:scale-105 hover:rounded-xl duration-200"
                    />
                    <div className="absolute inset-x-0 bottom-4 bg-pinkish rounded-tr-[48px] rounded-bl-[48px] opacity-75 flex flex-col items-center justify-center p-12 text-black tracking-wide text-xl px-12 py-16">
                      <h2>{activity.name}</h2>
                      <p>
                        {activity.minAge}-<span>{activity.maxAge} år</span>
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        )}

        {(!isFound || searchVal === "") && (
          <output className="text-grayish text-xl">
            Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget
            andet.
          </output>
        )}
      </section>
    </>
  );
}
