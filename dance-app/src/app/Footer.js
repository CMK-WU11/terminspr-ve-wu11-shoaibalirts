import Link from "next/link";
import { FiHome } from "react-icons/fi"; // home icon
import { CiSearch } from "react-icons/ci"; // search icon
import { IoCalendarClearOutline } from "react-icons/io5"; // calendar icon
import { cookies } from "next/headers";
export default async function Footer() {
  const cookieStore = await cookies();
  const hasRole = cookieStore.has("cookieRole");
  const hasToken = cookieStore.has("cookieToken");
  const hasUserId = cookieStore.has("cookieUserId");

  function loginPageOrCalendarPage() {
    if (!hasRole || !hasToken || !hasUserId) {
      return "/login";
    } else {
      return "/calendar";
    }
  }
  return (
    <footer className="mb-0 bg-grayish shadow-xl w-[100vw] flex justify-between px-20 py-4">
      <Link href="/activities" className="text-red-black">
        <FiHome className="w-[10vw] h-[10vh]" />
      </Link>
      <Link href="/search" className="text-black">
        <CiSearch className="w-[10vw] h-[10vh]" />
      </Link>
      <Link href={loginPageOrCalendarPage()} className="text-black">
        <IoCalendarClearOutline className="w-[10vw] h-[10vh]" />
      </Link>
    </footer>
  );
}
