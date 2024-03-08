import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DAVIZ_LOGO } from "@/utils/assets";

export default function Navbar() {
  const listItem = ["Profile", "Feature", "Service", "Dashboard", "Contact"];
  return (
    <nav className="sticky left-0 top-0 z-10 flex h-36 items-center justify-between bg-white px-16 shadow-md">
      <Image className="flex" src={DAVIZ_LOGO} alt="logo" width={112} height={50} />
      <ul className="flex gap-8 text-base font-medium text-daviz-grey-500">
        {listItem.map(item => (
          <li key={item}>{navItem(item)}</li>
        ))}
      </ul>
    </nav>
  );
}
function navItem(label) {
  return (
    <Link href={`/${label.toLowerCase}`} className="transition-all duration-300 hover:text-red-500">
      {label}
    </Link>
  );
}
