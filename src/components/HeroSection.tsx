import { div } from "framer-motion/client";
import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

export default function HeroSection () {
   return(
      // Main
      <div className="h-auto md:h-[40rem] w-full rounded-md flex 
      flex-col items-center justify-center relative overflow-hidden
      mx-auto py-10 md:py-0">
         {/* Spot Light */}
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
         {/* Hero Section Text */}
         <div className="p-4 relative z-10 w-full text-center">

            <h1 className="mt-20 mb-6 md:mt-0 text-4xl md:text-7xl font-bold
            bg-clip-text text-transparent bg-gradient-to-b from-neutral-50
            to-neutral-400"> Master the art of music</h1>

            <p className="mt-4  font-normal text-base md:text-lg 
             text-neutral-300 max-w-lg mx-auto">
               Dive into our comprehensive music courses and transform your 
               musical journey today. Whether you're a beginner or looking 
               to refine your skills, join us to unlock your true potential. </p>

            {/* Hero Section Button */}
            <div className="mt-6 ">
               <Link href={"/courses"}> 
                  <Button borderRadius="1.75rem"
                   className="bg-white dark:bg-black 
                   text-black dark:text-white 
                   border-neutral-200 dark:border-slate-800">
                   Explore Courses
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   )
}