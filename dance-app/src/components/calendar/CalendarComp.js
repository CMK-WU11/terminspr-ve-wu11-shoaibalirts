import Link from "next/link";
export default function CalendarComp({ activities }) {
    
  return (
    <section>
      <h1></h1>
      {activities.map((activity) => (
        <Link
          href={`/calendar/${activity.id}`}
          key={`calendarrdetails-${activity.id}`}
        >
          <article>
            <div className="relative h-[20vh] w-[80vw] ">
              <div className="absolute rounded-xl inset-x-4 ml-6 bg-grayish flex flex-col items-center justify-center text-black tracking-wide text-xl">
                <h2>{activity.name}</h2>
                <p>{activity.weekday}</p>
                <p>{activity.time}</p>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}
