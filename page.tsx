import React from "react";
import Particles from "./components/ui/particles";

export default function Page(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-8">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          cursor
          <span className="glitch inline-block">.new</span>
        </h1>
      </div>

      {/* Footer content */}
      <div className="text-center space-y-4">
        <p className="text-sm md:text-base text-gray-400">
          Currently building something amazing...
        </p>
        <a
          href="mailto:myavuzyalcintas@gmail.com"
          className="inline-block text-sm md:text-base text-gray-400 hover:text-white transition-colors"
        >
          myavuzyalcintas@gmail.com
        </a>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={1000}
        color="#ffffff"
        refresh
      />
    </main>
  );
}
