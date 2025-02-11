import Link from "next/link";
import { FiHome } from "react-icons/fi"; // home icon
import { CiSearch } from "react-icons/ci"; // search icon
import { IoCalendarClearOutline } from "react-icons/io5"; // calendar icon
export default function Footer() {
  return (
    <footer className="mb-0 bg-grayish shadow-xl w-[100vw] flex justify-between px-20 py-4">
      <Link href="/" className="text-red-black">
        <FiHome className="w-[10vw] h-[10vh]" />
      </Link>
      <Link href="#" className="text-black">
        <CiSearch className="w-[10vw] h-[10vh]" />
      </Link>
      <Link href="#" className="text-black">
        <IoCalendarClearOutline className="w-[10vw] h-[10vh]" />
      </Link>
    </footer>
  );
}
