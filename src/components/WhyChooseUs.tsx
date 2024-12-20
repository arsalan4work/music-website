"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import Learn from "@/data/images/learn.jpg"
import Lesson from "@/data/images/lesson.jpg"
import Performance from "@/data/images/performance.jpg"
import Communnity from "@/data/images/community.jpg"
import Building from "@/data/images/building.jpg"

const musicSchoolContent = [
   {
     title: "Learn from the Best",
     description:
       "Join classes led by world-class instructors. Our experienced teachers provide personalized guidance to help you master your instrument or vocal skills. Learn at your own pace and take your musical talent to the next level.",
       content: (
         <div className="h-full w-full bg-[#0f172a] flex items-center justify-center text-white">
           <Image src={Learn} alt="Error" width={500} height={500} ></Image>
         </div>
       ),
   },
   {
     title: "Interactive Lessons",
     description:
       "Engage in dynamic, interactive lessons designed to keep you motivated. Our curriculum includes live sessions, practice exercises, and performance feedback to ensure you progress efficiently and enjoy the process.",
       content: (
         <div className="h-full w-full bg-[#000000] flex items-center justify-center text-white">
           <Image src={Lesson} alt="Error" width={500} height={500} ></Image>
         </div>
       ),
   },
   {
     title: "Performance Opportunities",
     description:
       "Showcase your talent through recitals, concerts, and music events. Our academy provides opportunities for students to perform and grow their confidence while gaining valuable stage experience.",
       content: (
         <div className="h-full w-full bg-[#171717] flex items-center justify-center text-white">
           <Image src={Performance} alt="Error" width={500} height={500} ></Image>
         </div>
       ),
   },
   {
     title: "Join a Community",
     description:
       "Become a part of a vibrant community of music enthusiasts. Share your journey, collaborate with fellow students, and gain inspiration from a network of passionate musicians.",
       content: (
         <div className="h-full w-full bg-[#0f172a] flex items-center justify-center text-white">
           <Image src={Communnity} alt="Error" width={500} height={500} ></Image>
         </div>
       ),
   },
   {
      title: "State-of-the-Art Facilities",
      description:
        "Practice and perform in a world-class environment equipped with state-of-the-art instruments and technology. Our facilities are designed to enhance your learning experience and support your musical growth.",
        content: (
         <div className="h-full w-full bg-[#0f172a] flex items-center justify-center text-white">
           <Image src={Building} alt="Error" width={500} height={500} ></Image>
         </div>
       ),
    },
 ];
 

export default function WhyChooseUs() {
   return(
      <div>
         <StickyScroll content={musicSchoolContent}></StickyScroll>
      </div>
   )
}