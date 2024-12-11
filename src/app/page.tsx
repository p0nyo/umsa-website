import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="border-red-500 border-2 w-full">
          <div className="min-h-screen">
            <h1 className="border-red-500 border-2 font-poppins text-9xl font-bold text-center text-white">umsa</h1>
            <div className="border-red-500 border-2 relative flex items-center justify-center">
              <img className="" src="/umsa-globe.png"/>
            </div>
            <div className="h-[200vh]"></div>
            <footer className="z-50 text-center p-4 bg-white">Footer</footer>
          </div>

        </div>
      </main>
  );
}
