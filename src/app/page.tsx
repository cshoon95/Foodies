import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p><Link href="/meals">Meals</Link></p>
      <p><Link href="/meals/share">Sharemeals</Link></p>
      <p><Link href="/community">Community</Link></p>
    </main>
  );
}
