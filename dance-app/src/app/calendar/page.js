import Header from "../Header";
import Footer from "../Footer";
import CalendarComp from "@/components/calendar/CalendarComp";
import { getActivities, getUserDataAsPerUserId } from "@/lib/apilandrupdans";
import { cookies } from "next/headers";

export default async function CalendarPage() {
  const allActivities = await getActivities();

  // fetch from api. Check if the role is default or instructor
  const cookieStore = await cookies();
  const cookieUserId = cookieStore.get("cookieUserId").value;
  // console.log(cookieUserId);

  let calendarActivities = await getUserDataAsPerUserId(cookieUserId);
  console.log(calendarActivities);

  let userRole = calendarActivities.role;
  let userId = calendarActivities.id;

  calendarActivities = calendarActivities.activities; // activites of all users (default and instructor)

  console.log(calendarActivities);
  if (userRole === "instructor") {
    // fetch instructor activities
    console.log("it is a instructor");
    console.log("userId: ", userId);
  } else if (userRole === "default") {
    // fetch default activities
    console.log("it is a default");
    console.log("userId: ", userId);
  }
  return (
    <div className="bg-mehroonish flex flex-col items-center justify-center">
      <div className="text-grayish font-ubuntu">
        <Header>Kalender</Header>
        <main>{<CalendarComp activities={calendarActivities} />}</main>
      </div>
      <Footer />
    </div>
  );
}
