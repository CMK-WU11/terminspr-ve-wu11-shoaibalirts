import Footer from "@/app/Footer";
import FitnessDetailComp from "@/components/activities/FitnessDetailComp";
import { getFitnessActivity } from "@/lib/apilandrupdans";
export const metadata = {
  title: "Junior Fitness | Dans App",
  description: "List of all activities",
};

export default async function FitnessPage({ params }) {
  const id = (await params).id;
  // call to api and get data according to id
  const fitness = await getFitnessActivity(id);
  // console.log(fitness);

  return (
    <>
      <main className="bg-mehroonish min-h-screen flex flex-col w-[100vw]">
        <FitnessDetailComp fitness={fitness} activityId={id} />
      </main>
      <Footer />
    </>
  );
}
