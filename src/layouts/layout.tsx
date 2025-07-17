import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

export default function layout() {
  return (
    <div className="min-h-screen bg-white text-black font-sans relative">
      <div className="fixed inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Grayscale city skyline with modern buildings"
          src="/images/background.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/80 to-white"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <main
          className="container mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-16"
          style={{ opacity: 1 }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
