import React from "react";
import Image from "next/image";
import { THREE_DOT } from "@/utils/assets";
import { dollarFormatter } from "@/utils/extension";

export default function Jumbotron() {
  const informationCards = [
    {
      title: "Total Sales",
      desc: "For January 2024",
      growth: 2,
      value: 1024.19,
    },
    {
      title: "Average Sales",
      desc: "Each Month in 2023",
      growth: -5,
      value: 241.13,
    },
    {
      title: "Market Cap",
      desc: "For 2023 - 2024",
      growth: 8,
      value: 121024.17,
    },
    {
      title: "Total Sales",
      desc: "In Surabaya",
      growth: -3,
      value: 421.11,
    },
  ];
  const informationCard = ({ title, desc, growth, value }) => {
    const highlightColor = growth > 0 ? "#47CC45" : "red-500";
    return (
      <div className="flex flex-col rounded-lg bg-white p-4 shadow-md">
        <div className="flex flex-row items-start justify-between">
          <div>
            <p className="mb-2 text-base text-daviz-grey-700">{title}</p>
            <p className="text-xs text-daviz-grey-400">{desc}</p>
          </div>
          <div className="rounded bg-daviz-grey-700 p-2 opacity-5">
            <img src={THREE_DOT} alt="threedots" width={16} height={16} />
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="h-4 w-4" style={{ backgroundColor: highlightColor }}></div>
            <p className={`text-base font-normal`} style={{ color: highlightColor }}>
              {growth + "%"}
            </p>
          </div>
          <p className="text-lg font-semibold text-black-base">{dollarFormatter(value)}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="relative w-full justify-center">
      <Image
        src="/assets/jumbotron.png"
        alt="jumbotron"
        layout="responsive"
        width={1920}
        height={1080}
        sizes="100vw"
      />
      <div className="absolute top-12 w-full px-40 text-center">
        <p className="mb-4 text-xl font-semibold text-daviz-red-500">Data Driven Decision</p>
        <p className="mb-4 text-4xl font-semibold text-black-base">
          Unleash The Power of Data Analytics
        </p>
        <p className="mb-4 text-base font-medium text-daviz-grey-500">
          How to Turn Data into the Most Valuable Asset for the <br /> Progress of Your Organization
          or Company?
        </p>
      </div>
      <div className="absolute -bottom-5 grid h-auto w-full grid-cols-4 gap-4 px-7">
        {informationCards.map((card, index) => (
          <div key={index}>{informationCard(card)}</div>
        ))}
      </div>
    </div>
  );
}
