import React from "react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex h-16 border-b p-4  justify-between items-center">
      <h1 className="font-bold text-xl bg-black text-white dark:bg-white dark:text-black">
        aldifhrent.
      </h1>
      <div className="flex gap-x-4 items-center">
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/portfolio">Contact</Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
