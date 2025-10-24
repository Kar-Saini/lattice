"use client";

import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center  from-gray-50 to-gray-100 px-6">
      <div className="max-w-3xl text-center flex flex-col items-center gap-6">
        <div className="space-y-3">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            Real-time, Interactive Peer Rooms
          </h1>
          <p className="text-lg text-gray-600">
            Collaborate, code, and connect — all in one seamless experience.
          </p>
        </div>

        <button
          onClick={() => router.push("/main")}
          className="mt-4 px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl 
                     shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-800"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
