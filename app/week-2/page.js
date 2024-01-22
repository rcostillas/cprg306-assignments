import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
  return (
    <nav>
      <h1>Shopping List</h1>
      <p>Romeo Costillas</p>
      <Link href="https://github.com/rcostillas/cprg306-assignments.git">
        https://github.com/rcostillas/cprg306-assignments.git
      </Link>
    </nav>
  );
}
