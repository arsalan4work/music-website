'use client'

import { Meteors } from "@/components/ui/meteors";

export default function Contact() {
   return(
      <div className="">
      <div className=" w-full relative max-w-full h-[700px] ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden flex flex-col justify-end items-start">
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />

          {/* Form */}
          <div className="max-w-3xl mx-auto p-4">
      <form className="space-y-4 ">
        <div className="">
          {/* First Name */}
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              className="mt-1 text-center h-[38px] w-[200px] md:h-[60px] md:w-[400px]  block rounded-md bg-black text-white border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-md"
            />
          </div>
        </div>
        {/* Contact */}
        <div>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Enter your contact number"
            className="mt-1 block text-center h-[38px] w-[200px] md:h-[60px] md:w-[400px] bg-black text-white rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-md"
          />
        </div>
        {/* Address */}
        <div>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            className="mt-1 block text-center h-[38px] w-[200px] md:h-[60px] md:w-[400px] bg-black text-white rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-md"
          />
        </div>
        {/* ZIP Code */}
        <div>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            placeholder="Enter your ZIP code"
            className="mt-1 text-center h-[38px] w-[200px] md:h-[60px] md:w-[400px] bg-black text-white block rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-md"
          />
        </div>
        {/* Textarea */}
        <div>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Enter your message"
            className="mt-1 text-center h-[38px] w-[200px] md:h-[60px] md:w-[400px] block bg-black text-white rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 text-md"
          ></textarea>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
        </div>
      </div>
    </div>
   )
}