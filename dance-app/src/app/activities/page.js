import Activities from "@/components/activities/Activities";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getActivities } from "@/lib/apilandrupdans";

export const metadata = {
  title: "Aktiviteter",
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
          <Activities activities={activities} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
