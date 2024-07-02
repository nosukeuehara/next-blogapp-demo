import { redirect } from "next/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/signin"}>SignIn</Link>
      <Link href={"/signup"}>SignUp</Link>
    </div>
  );
}
