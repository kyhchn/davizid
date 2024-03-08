import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  const categories = ["Health", "Business", "Education", "Technology", "Marketing", "Other"];
  return (
    <main>
      <div className="bg-filler_bg relative w-full bg-contain py-20">
        <div className="flex flex-col items-center gap-3 text-white">
          <h1 className="text-3xl font-semibold">Our Portfolio</h1>
          <p className="text-base font-normal">Our recent works about data visualization</p>
        </div>
        <div className="absolute -bottom-7 left-1/2 z-[5] -translate-x-1/2 transform">
          <Input placeholder="Search" />
        </div>
      </div>
      <div className="h-20"></div>
      <div className="container">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row justify-start gap-4 py-2 text-sm font-normal text-black">
            <p className="mr-4">Sort by categories :</p>
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 transition-all duration-300 hover:text-daviz-red-500"
              >
                {category}
              </button>
            ))}
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Recent" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter by</SelectLabel>
                <SelectItem value="apple">Recent</SelectItem>
                <SelectItem value="banana">Oldest</SelectItem>
                <SelectItem value="blueberry">Most Viewed</SelectItem>
                <SelectItem value="grapes">Most Shared</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="h-16"></div>
        <div className="grid grid-cols-4 gap-8"></div>
      </div>
    </main>
  );
}
