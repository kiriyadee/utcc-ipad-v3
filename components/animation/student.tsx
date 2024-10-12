"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export const AnimationStudent = () => {
  const animationURL =
    "https://lottie.host/b3e6c35e-f25e-4773-91c8-2ea4336cc450/FbdfaAqwSr.json";

  return (
    <section className="flex absolute w-1/3">
      <Player src={animationURL} autoplay loop speed={0.8} />
    </section>
  );
};

export const CicleAnimation = () => {
  const animationURL =
    "https://lottie.host/a67b4097-c9a7-4f47-a811-7ea709357ace/zBH6tSjjZc.json";

  return (
    <section className="flex relative w-1/2">
      <Player src={animationURL} autoplay loop speed={0.8} />
    </section>
  );
};
