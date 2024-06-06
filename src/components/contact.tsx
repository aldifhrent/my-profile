import Link from "next/link";
import React from "react";

export interface ContactProps {
  Icon: React.ElementType; // Assuming Instagram returns a ReactNode
  link: string;
  name: string;
}
const Contact = ({ Icon, link, name }: ContactProps) => {
  return (
    <div>
      <Link href={link}>
        <div className="relative text-center">
          <Icon size={100} className="p-2 rounded-full " />
        </div>
      </Link>
      <h1 className="font-semibold text-center mt-2">{name}</h1>
    </div>
  );
};

export default Contact;
