import SearchComp from "@/components/search/SearchComp";
import Header from "../Header";
import Footer from "../Footer";
import { getActivities } from "@/lib/apilandrupdans";
export const metadata = {
  title: "Søg Aktiviteter | Dans App",
  description: "List of all activities",
};
export default async function SearchPage() {
  const activities = await getActivities();
  return (
    <>
      <div className="text-grayish font-ubuntu">
        <Header>Søg</Header>
      </div>
      <main className="min-h-screen bg-mehroonish text-white">
        <SearchComp activities={activities} />
      </main>
      <Footer />
    </>
  );
}
