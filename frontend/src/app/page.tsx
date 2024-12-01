import Link from "next/link";
import { Button } from "@/components/ui/button";
import IconButtonLink from "./sqr_link";

export default function Home() {
  return (
    <>
      {/* First Section - Responsive Grid */}
      <div className="min-h-screen w-full bg-[#F5F5F5] grid grid-cols-1 md:grid-cols-2">
        {/* Left Section - Logo */}
        <div className="flex items-center justify-center p-8 md:p-0">
          <img
            className="w-64 md:w-96 h-auto transform md:rotate-[-40deg] object-contain"
            src="/BMS_Logo.svg"
            alt="Bristol Myers Squibb Logo"
          />
        </div>
        
        {/* Right Section - Title and Enter Button */}
        <div className="flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-2xl md:text-4xl mb-4">
            Bristol Myers Squibb™
            <br />-<br />
            Data Provider
          </h1>
          
          {/* Anchor Button */}
          <Link href="#choose" passHref>
            <Button className="mt-4">Enter</Button>
          </Link>
        </div>
      </div>
      
      {/* Second Section - Responsive Flex */}
      <div
        id="choose"
        className="min-h-screen w-full bg-[#222121] flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:space-x-8"
      >
        {/* Container for buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-16">
          {/* Logistic Button */}
          <IconButtonLink 
            text="Logistic" 
            iconUrl="logistic.svg" 
            href="logistic" 
          />
          
          {/* Separator - Responsive */}
          <div className="hidden md:block h-96 w-[4px] bg-gray-300"></div>
          <div className="block md:hidden w-full h-[4px] bg-gray-300 my-8"></div>
          
          {/* Marketing Button */}
          <IconButtonLink 
            text="Marketing" 
            iconUrl="marketing.svg" 
            href="marketing" 
          />
        </div>
      </div>
    </>
  );
}