import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DAVIZ_LOGO } from "@/utils/assets";

export default function Navbar() {
  const listItem = ["Profile", "Feature", "Service", "Contact"];
  return (
    <nav className="sticky left-0 top-0 z-10 flex h-36 items-center justify-between bg-white px-16 shadow-md">
      <Link href={"/"}>
        <Image className="flex" src={DAVIZ_LOGO} alt="logo" width={112} height={50} />
      </Link>
      <div className="flex flex-row items-center justify-start">
        <ul className="flex gap-8 text-base font-medium text-daviz-grey-500">
          {listItem.map(item => (
            <li key={item}>{navItem(item)}</li>
          ))}
        </ul>
        <div className="w-8"></div>
        <Button asChild>
          <Link href="/#dashboard">
            <p className="text-base font-medium text-white">Our Portfolio</p>
          </Link>
        </Button>
      </div>
    </nav>
  );
}
function navItem(label) {
  return (
    <Link
      href={`/#${label.toString().toLowerCase()}`}
      className="transition-all duration-300 hover:text-red-500"
    >
      {label}
    </Link>
  );
}
