"use client";

import { useRef } from "react";
import "@johanaarstein/dotlottie-player";
import type { DotLottiePlayer } from "@johanaarstein/dotlottie-player";

export default function Home() {
  const animation = useRef<DotLottiePlayer | null>(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <dotlottie-player
        autoplay
        loop
        ref={animation}
        src="https://lottie.host/5ac30703-4e56-4c23-a52f-7f2c93bf88df/9wWOguPj9f.lottie"
      />
      <div className="text-center">
        <h1 className="text-lg">Under maintenance</h1>
        <p className="text-sm">Be back soon!</p>
      </div>
    </main>
  );
}
