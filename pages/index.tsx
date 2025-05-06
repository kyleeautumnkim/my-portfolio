import Link from "next/link";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="mb-6">Check out some of my work below:</p>
      <ul className="space-y-4">
        {projects.map((proj) => (
          <li key={proj.slug}>
            <Link href={`/projects/${proj.slug}`} className="text-blue-600 underline">
              {proj.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
