import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-6 py-16">
      <h1 className="text-4xl font-bold">Axe demo app</h1>
      <p className="text-lg text-zinc-700">
        This repo is set up to test the axe linter against intentionally broken markup.
      </p>

      <div className="flex flex-col items-start gap-4">
        <Link
          href="/axe-demo"
          className="inline-flex w-fit rounded-md bg-black px-4 py-2 text-white hover:bg-zinc-800"
        >
          Open the first bad accessibility page
        </Link>

        <Link
          href="/axe-demo-two"
          className="inline-flex w-fit rounded-md border border-black px-4 py-2 text-black hover:bg-zinc-100"
        >
          Open the second bad accessibility page
        </Link>
      </div>
    </main>
  );
}
