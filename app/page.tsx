"use client";

import { useState } from "react";
import { DotLottiePlayer, PlayerEvents } from "@dotlottie/react-player";

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center">
      <DotLottiePlayer
        className="lg:w-1/2 md:w-3/4 w-full"
        autoplay={true}
        loop={true}
        src="/under-maintenance.lottie"
        onEvent={(event: PlayerEvents) => {
          if (event === PlayerEvents.Ready) {
            setIsReady(true);
          }
        }}
      />
      {isReady && (
        <div className="text-center">
          <h1 className="text-lg">Under maintenance</h1>
          <p className="text-sm">Be back soon!</p>
        </div>
      )}
    </main>
  );
}
