import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

//👇 Configure our font object
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ProfileData = () => {
  return <></>;
};

export default ProfileData;
