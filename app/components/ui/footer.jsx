import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DAVIZ_FOOTER, DAVIZ_LOGO } from "@/utils/assets";
import { toKebabCase } from "@/utils/extension";
import { Separator } from "./separator";

export default function Footer() {
  const detailInfoList = ["Services", "Feature", "Portfolio", "Article"];
  const contactList = [
    {
      name: "Email",
      link: "mailto:alvinkn.dev@gmail.com",
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/628972155433",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/alvinkn/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/aaalvinkn/",
    },
  ];
  const otherList = ["Privacy Policy", "Terms"];
  const HeaderType = {
    ID: "id",
    URL: "url",
    ROUTE: "route",
  };
  const headerSectionBuilder = (title, list, type) => (
    <div className="flex flex-col gap-6">
      <p className="text-lg font-medium text-white">{title}</p>
      <div className="flex flex-col text-white text-opacity-60">
        <ul className="space-y-3">
          {list.map((item, index) => (
            <li key={index}>
              <Link
                href={
                  type === HeaderType.ID
                    ? `/#${toKebabCase(item)}`
                    : type === HeaderType.ROUTE
                      ? `/${toKebabCase(item)}`
                      : item.link
                }
                className="transition-all hover:scale-105 hover:text-white hover:opacity-100"
                target={type === HeaderType.URL ? "_blank" : ""}
              >
                {type === HeaderType.ID || type === HeaderType.ROUTE ? item : item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  return (
    <footer>
      <div className="relative flex w-full flex-col gap-8 bg-black-base p-16">
        <Image
          src={DAVIZ_FOOTER}
          alt="daviz footer"
          className="absolute left-0 top-0"
          objectFit="contain"
          width={180}
          height={180}
        />

        <div className="flex flex-row">
          <div className="flex flex-1 flex-col text-lg font-medium text-white">
            <p>PT.Infonika Parasa</p>
            <div className="h-8"></div>
            <p>Contact Person</p>
            <div className="h-3"></div>
            <div className="text-base text-white text-opacity-60">
              <p>Wirman Kurniawan, ST.</p>
              <p>Email: wirman@infonikaparasa.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-16">
            {headerSectionBuilder("Detail Info", detailInfoList, HeaderType.ID)}
            {headerSectionBuilder("Contact", contactList, HeaderType.URL)}
            {headerSectionBuilder("Other", otherList, HeaderType.ROUTE)}
          </div>
        </div>
        <Separator />
        <div className="flex flex-row items-center justify-between">
          <Image src={DAVIZ_LOGO} alt="daviz footer" width={112} height={41} />
          <p className="text-base font-medium text-white text-opacity-60">
            Copyright © 2024 PT. Infonika Parasa. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
