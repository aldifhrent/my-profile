import Contact from "@/components/contact";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-3/5 mt-24 w-full ">
      <div className="text-5xl text-center mb-12 font-bold">My Contact</div>
      <div className="grid grid-cols-2 gap-x-12 items-center justify-center">
        <Contact
          Icon={AiFillLinkedin}
          link={"https://www.linkedin.com/in/aldiahmadfahriziilmawan/"}
          name="Linked In"
        />
        <Contact
          Icon={AiFillGithub}
          link={"https://github.com/aldifhrent"}
          name="Github"
        />
      </div>
      <Separator className="w-1/5 mt-4" orientation="horizontal" />
      <div className="flex flex-col mt-4 gap-y-4 justify-left">
        <Link href="" className="flex items-center gap-x-4 justify-center   ">
          <FaPhoneAlt /> <span>+62 82218718161</span>
        </Link>
        <Link href="" className="flex items-center gap-x-4 justify-center   ">
          <MdEmail /> <span>aldifahriziilmawan@gmail.com</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
