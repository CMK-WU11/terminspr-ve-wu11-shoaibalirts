"use client";
import Image from "next/image";
import Link from "next/link";
export default function ActivitiesComp({ activities }) {
  // console.log(activities);

  // let random = Math.floor(Math.random() * 100 + 1);
  return (
    <section>
      <h1></h1>
      {activities.map((activity) => (
        <Link
          href={`/activities/${activity.id}`}
          key={`activitydetails-${activity.id}`}
        >
          <article>
            <div className="relative h-96 mb-4 w-[80vw] ">
              <Image
                src={activity.asset.url}
                layout="fill"
                objectFit="cover"
                priority
                alt={`activity-${activity.asset.url}`}
                className="absolute rounded-xl md:rounded-l-xl transform hover:scale-105 hover:rounded-xl duration-200"
              />
              <div className="absolute inset-x-0 bottom-4 bg-pinkish flex flex-col items-center justify-center p-12 text-black tracking-wide text-xl px-12 py-16">
                <h2>{activity.name}</h2>
                <p>
                  {activity.minAge}-<span>{activity.maxAge} år</span>
                </p>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}
