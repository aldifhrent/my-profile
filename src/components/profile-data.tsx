import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ImageProfile from "./images-profile";

//👇 Configure our font object
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ProfileData = () => {
  return (
    <>
    <ImageProfile/>
      <div>
        <p
          className={cn(
            "text-black text-xl font-bold mt-2 text-center dark:text-white",
            poppins.className
          )}
        >
          Aldi Ahmad Fahrizi Ilmawan
        </p>
        <div className="max-w-md text-justify mx-4 mt-2 mb-2 md:mx-0">
          An enthusiastic and dedicated individual with a strong desire to learn
          and develop in a professional environment. I have strong skills in
          communication, contributing and ready to take on new challenges.
        </div>
        <p
          className={cn(
            "p-2 text-md font-bold bg-black text-white text-center mt-2 dark:bg-white dark:text-black ",
            poppins.className
          )}
        >
          Web Developer
        </p>
      </div>
    </>
  );
};

export default ProfileData;
