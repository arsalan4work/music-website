"use client"
import courseData from "../data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
import { title } from "process"

interface Course{
       id: number,
       title: string,
       slug: string,
       description: string,
       price: number,
       instructor: string,
       isFeatured: boolean,
}

export default function FeaturedCourses() {
   const featuredCourses =courseData.courses.filter((course:Course) => 
      course.isFeatured)
   return(
      <div className="py-12 bg-gray-900">
         {/* Heading & Text */}
         <div>
            <div className="text-center">
               <h2 className="text-xl sm:text-2xl text-teal-400
               font-semibold tracking-wide uppercase"> 
               Featured Courses </h2>
               <p className="mt-2 text-2xl leading-8
               font-extrabold tracking-wide text-white
               sm:text-3xl"> Learn With The Best </p>
            </div>
         </div>

         {/* Featured Cards */}
         <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-3 gap-8 justify-center mx-auto">
               {featuredCourses.map((course:Course) => (
                  <div key={course.id} className="flex justify-center">
                     <BackgroundGradient className="flex flex-col rounded-[22px]
                     bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-md">
                        {/* Card Styling */}
                        <div className="py-4 sm:p-8 flex flex-col items-center 
                        text-center flex-grow">
                           <p className="text-lg sm:text-xl text-black 
                           mt-2 mb-4 dark:text-neutral-400 
                           flex-grow">{course.title}</p>
                           <p className="text-sm text-neutral-600 
                           dark:text-neutral-400 
                           flex-grow">{course.description}</p>
                           <Link className="py-2 px-4 bg-white text-black 
                           mt-6 rounded-lg" href={`/courses.${course.slug}`}> 
                           Learn More </Link>
                        </div>
                     </BackgroundGradient>
                  </div>
               ))}
            </div>
         </div>

         {/* Button */}
         <div className="mt-20 text-center transition duration-200
          hover:scale-110 hover:shadow-lg">
            <Link href={"/courses"} className="px-4 py-3
            rounded-lg text-neutral-800
            bg-white hover:bg-gray-100 "> View All Courses </Link>
         </div>
      </div>
   )
}