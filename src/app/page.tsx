import { redirect } from "next/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/signup"}>SignUp</Link>
    </div>
  );
}
