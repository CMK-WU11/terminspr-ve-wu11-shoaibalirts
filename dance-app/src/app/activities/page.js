import ActivitiesComp from "@/components/activities/ActivitiesComp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getActivities } from "@/lib/apilandrupdans";

export const metadata = {
  title: "Aktiviteter | Dans App",
  description: "List of all activities",
};
export default async function ActivitiesPage() {
  const activities = await getActivities();
  //   console.log(activities);

  return (
    <div className="bg-mehroonish min-h-screen flex flex-col items-center justify-center">
      <div className="text-grayish font-ubuntu">
        <Header>Aktiviteter</Header>
        <main>
          <ActivitiesComp activities={activities} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
