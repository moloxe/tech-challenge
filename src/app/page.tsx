import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center p-4 min-h-screen w-full">
      <Link
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="/rotate-matrix"
      >
        Rotate Matrix (Challenge page)
      </Link>
    </main>
  );
}
