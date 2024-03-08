import React from "react";
import Marquee from "react-fast-marquee";
import {
  PARTNER_1,
  PARTNER_2,
  PARTNER_3,
  PARTNER_4,
  PARTNER_5,
  PARTNER_6,
  PARTNER_7,
  PARTNER_8,
  PARTNER_9,
  PARTNER_10,
} from "@/utils/assets";

export default function OurPartner() {
  const partners = [
    PARTNER_1,
    PARTNER_2,
    PARTNER_3,
    PARTNER_4,
    PARTNER_5,
    PARTNER_6,
    PARTNER_7,
    PARTNER_8,
    PARTNER_9,
    PARTNER_10,
  ];
  return (
    <div className="-mx-16 flex  flex-col items-center gap-y-16 bg-black-base py-16">
      <h2 className="text-3xl font-semibold text-white">Our Customer</h2>
      <Marquee autoFill={true}>
        {partners.map(partner => (
          <Image src={partner} height={80} width={80} className="ml-16" />
        ))}
      </Marquee>
    </div>
  );
}
