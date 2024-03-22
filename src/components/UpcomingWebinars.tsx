'use client'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link'
import React from 'react'

function UpcomingWebinars() {
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FUTURE WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className='mt-10'>
            <HoverEffect items={projects} />
        </div>
        <div className='mt-10 text-center'>
        <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}
export const projects = [
    {
      title: "Music Theory Workshop Series",
      description:
        "An interactive workshop series designed to deepen your understanding of music theory. Explore key concepts such as harmony, rhythm, and melody under the guidance of experienced instructors.",
      link: "#",
    },
    {
      title: "Virtual Concert Series",
      description:
        "Experience the magic of live music from the comfort of your home with our virtual concert series. Featuring talented musicians and diverse genres, our concerts showcase the beauty and power of music.",
      link: "#",
    },
    {
      title: "Instrument Mastery Program",
      description:
        "Take your skills to the next level with our instrument mastery program. Whether you're a beginner or advanced player, our comprehensive curriculum and personalized instruction will help you unlock your full potential.",
      link: "#",
    },
    {
      title: "Songwriting Competition",
      description:
        "Showcase your songwriting talents and compete for exciting prizes in our annual songwriting competition. Get valuable feedback from industry professionals and gain recognition for your original compositions.",
      link: "#",
    },
    {
      title: "Music Production Workshop",
      description:
        "Learn the art of music production from industry experts in our hands-on workshop. Discover recording techniques, audio mixing, and mastering to create professional-quality tracks.",
      link: "#",
    },
    {
      title: "Music Outreach Program",
      description:
        "Make a difference in your community through music with our outreach program. Collaborate with local schools, nursing homes, and community centers to bring the joy of music to people of all ages and backgrounds.",
      link: "#",
    },
  ];

export default UpcomingWebinars
  
