import Footer from "@/app/Footer";
// import FitnessDetailComp from "@/components/activities/FitnessDetailComp";
// import { getFitnessActivity } from "@/lib/apilandrupdans";
export const metadata = {
  title: "Kalendar Detail | Dans App",
  description: "List of all default Calendar data",
};

export default async function CalendarDetailPage({ params }) {
  const id = (await params).id;
  // call to api and get data according to id
  //   const fitness = await getFitnessActivity(id);
  // console.log(fitness);

  return (
    <>
      <main className="bg-mehroonish min-h-screen flex flex-col w-[100vw]">
        {/* <FitnessDetailComp fitness={fitness} /> */}
        <p>Calendar Page Detail</p>
      </main>
      <Footer />
    </>
  );
}
