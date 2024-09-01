import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <nav className="flex justify-between items-center px-5 pt-2">
        <Image src="/logo.png" alt="logo" width={150} height={100} />
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </nav>
      <h1>Home</h1>
    </main>
  );
}
