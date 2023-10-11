import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/form">Form</Link>
          </li>
        </ul>
      </nav>
      <main className="container px-5 py-3">This is the home page</main>
    </>
  );
}
