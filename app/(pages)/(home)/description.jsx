import React from "react";
import Image from "next/image";
import { DAVIZ_DESC, WHAT_IS_DAVIZ } from "@/utils/assets";

export default function Description() {
  return (
    <div className="mt-20 flex flex-col items-center justify-start px-20">
      <p className="text-3xl font-semibold text-black-base">
        What is <span className="text-red-500">Daviz</span>?
      </p>
      <div className="h-12"></div>
      <p className="whitespace-pre-wrap text-center text-lg font-normal text-black-base">
        {DAVIZ_DESC}
      </p>
      <div className="h-16"></div>
      <Image
        className="w-full px-16"
        src={WHAT_IS_DAVIZ}
        alt="whatisdaviz"
        width={928}
        height={400}
      />
    </div>
  );
}
