"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The music school provided me with an unforgettable experience. The instructors were incredibly knowledgeable and supportive, helping me refine my skills and explore new musical horizons.",
    name: "Emily Johnson",
    title: "Piano Enthusiast",
  },
  {
    quote:
      "Attending the music school was a life-changing decision for me. The diverse range of courses allowed me to delve deep into different genres and instruments, expanding my musical repertoire beyond my expectations.",
    name: "Michael Smith",
    title: "Guitar Virtuoso",
  },
  {
    quote:
      "I never imagined I could learn so much about music in such a short time. The school's dedicated faculty and immersive learning environment made every lesson a joy.",
    name: "Sophia Martinez",
    title: "Aspiring Vocalist",
  },
  {
    quote:
      "The music school's emphasis on creativity and expression truly set it apart. Through their innovative programs and supportive community, I was able to unleash my musical potential and find my unique voice as an artist.",
    name: "Daniel Lee",
    title: "Songwriter Extraordinaire",
  },
  {
    quote:
      "Enrolling in the music school was one of the best decisions I've ever made. The connections I formed and the skills I acquired have opened up countless opportunities for me in the music industry.",
    name: "Jessica Nguyen",
    title: "Future Music Producer",
  },
  {
    quote:
      "The music school exceeded all my expectations. Not only did I receive top-notch instruction, but I also found a supportive community of fellow musicians who share my passion for music.",
    name: "David Brown",
    title: "Drum Enthusiast",
  },
  {
    quote:
      "I'll forever be grateful to the music school for helping me discover my true musical potential. Their comprehensive curriculum and expert guidance have equipped me with the skills and confidence to pursue my dreams in the world of music.",
    name: "Olivia Wilson",
    title: "Violin Virtuoso",
  },
  {
    quote:
      "From the moment I stepped into the music school, I knew I was in the right place. The personalized attention and hands-on learning approach made my musical journey both rewarding and enjoyable.",
    name: "Ethan Thompson",
    title: "Aspiring Composer",
  },
];
