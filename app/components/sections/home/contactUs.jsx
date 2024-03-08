import React from "react";
import Image from "next/image";
import { CONTACT_ILLUST, FILLER_BG } from "@/utils/assets";

export default function ContactUs() {
  const socialMediaList = [
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

  const socialLinker = ({ name, link }) => {
    return (
      <a
        href={link}
        target="_blank"
        className="hover:scale105 hover text-opacity-90 transition-all hover:text-black-base hover:text-opacity-100"
      >
        {name}
      </a>
    );
  };
  return (
    <div className="my-44 flex flex-row items-stretch rounded-xl">
      <div className="flex flex-1 flex-row items-center justify-start rounded-l-xl bg-contact_bg bg-cover p-10">
        <Image src={CONTACT_ILLUST} width={177} height={177} />
        <div className="w-12"></div>
        <div className="flex flex-col">
          <p className="text-3xl font-semibold text-white">Interest in our Product</p>
          <div className="h-3"></div>
          <p className="text-xl font-normal text-white text-opacity-70">
            Contact us through the contact <br />
            information on the side
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-r-xl border-[0.4px] border-l-0 px-20 py-12">
        <p className="text-lg font-medium text-black-base">Contact</p>
        <div className="h-4"></div>
        <div className="flex flex-col gap-2 text-base font-medium text-black-base text-opacity-60">
          {socialMediaList.map((social, index) => (
            <div key={index}>{socialLinker(social)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
