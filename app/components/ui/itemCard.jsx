import React from "react";
import Image from "next/image";
import { Eye } from "lucide-react";

export default function ItemCard({ imageSrc, title, category, year, like, share }) {
  return (
    <div className="flex flex-col items-center justify-start">
      <Image alt={imageSrc} src={imageSrc} width={340} height={240} />
      <div className="h-6"></div>
      <div className="flex flex-col items-start justify-start gap-3">
        <p className="text-base font-normal text-black-base">{`${category} . ${year}`}</p>
        <p className="text-xl font-medium text-black-base">{title}</p>
        <div className="flex flex-row gap-8">
          <div className="flex items-center">
            <Eye className="text-daviz-grey-400" />
            <div className="w-2"></div>
            <p className="text-base font-normal text-daviz-grey-400">{like}</p>
          </div>
          <div className="flex items-center">
            <Eye className="text-daviz-grey-400" />
            <div className="w-2"></div>
            <p className="text-base font-normal text-daviz-grey-400">{share}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
