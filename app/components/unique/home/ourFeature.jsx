import React from "react";
import {
  FEATURE_1,
  FEATURE_2,
  FEATURE_3,
  FEATURE_4,
  FEATURE_5,
  FEATURE_6,
  FEATURE_7,
  FEATURE_8,
} from "@/utils/assets";

export default function OurFeature() {
  const featureList = [
    {
      order: 1,
      title: "Detailed Maps to Low Level",
      desc: "MicroStrategy introduces a revolution in geographic data visualization through its integrated map customization feature with GeoJSON and ESRI\n\n With this feature, users can display data down to the sub-district level, providing unprecedented accuracy and detail.",
      image: FEATURE_1,
    },
    {
      order: 2,
      title: "Chart Drill-Down",
      desc: "The Chart Drill Down feature in MicroStrategy empowers users to dive deep into their data directly from the visualizations presented.With just a few clicks, users can explore more granular layers of data from a chart or graph For example, from a view of overall sales data, users can drill down to sales data by region, then further down to the city, product, or time period level.This feature not only makes it easier to understand trends, patterns, and anomalies in data, but also provides richer and contextual insights with the flexibility to explore various aspects of the data.",
      image: FEATURE_2,
    },
    {
      order: 3,
      title: "Semantic Layers",
      desc: "The Semantic Layer is a virtual layer that sits between the physical data sources and the end-users. It acts as a bridge between the complex data structures of the underlying data sources and the simplified view of the data that end-users see. The semantic layer provides a logical representation of the data, making it easier for end-users to access and analyze data without needing to understand the underlying data structures.",
      image: FEATURE_3,
    },
    {
      order: 4,
      title: "Mobile Access",
      desc: "MicroStrategy Mobile is an interactive interface of the MicroStrategy Business Intelligence (BI) platform that enables mobile business users to harness the analytical power of MicroStrategy through their mobile devices.",
      image: FEATURE_4,
    },
    {
      order: 5,
      title: "Chapter & Page",
      desc: "The Chapter and Page feature in MicroStrategy is a powerful innovation for dashboard management that enables the organization of analytical content in a more organized and systematic way. Within a single dashboard view, you can create multiple Chapters, each of which can contain multiple Pages. This is similar to the structure of a book, where each chapter discusses a specific aspect of the overall data story and each page details specific information within that chapter.\n\nThis feature facilitates navigation and comprehension of complex data by dividing information into more manageable and understandable segments. Users can easily navigate between chapters and pages to explore different aspects of the data, similar to scrolling through a table of contents in a well-structured report or presentation.",
      image: FEATURE_5,
    },
    {
      order: 6,
      title: "Artificial Intelligence",
      desc: "Auto Answers is an AI-powered chatbot that provides fast and accurate responses to business intelligence analysis. Auto Answers acts as a personal data assistant, ensuring that users can optimize information within the organization.",
      image: FEATURE_6,
    },
    {
      order: 7,
      title: "Access to Many Data Sources",
      desc: "The Access to Many Data Sources feature in MicroStrategy is a powerful and flexible data integration capability that allows users to connect to a wide range of data sources, both structured and unstructured, on-premises or in the cloud, SQL or NoSQL. MicroStrategy provides seamless connectivity to tools like Hadoop, Salesforce, Azure, and databases like MySQL and Oracle.\n\nThis feature supports real-time data integration, bringing together information from disparate sources to provide comprehensive and up-to-date insights. Users can easily combine data from CRM systems, ERPs, flat files, web services, and even social media, providing a 360-degree view of their business in a single analytics platform.",
      image: FEATURE_7,
    },
    {
      order: 8,
      title: "HyperIntelligence",
      desc: "HyperIntelligence makes it easy for analysts to create objects called cards. Cards are dynamic data representations that appear interactively when hovered over.",
      image: FEATURE_8,
    },
  ];
  const featureListTile = ({ order, title, desc, image }) => {
    return (
      <div className={`flex items-stretch ${order % 2 == 0 ? "flex-row-reverse" : "flex-row"}`}>
        <div className="relative min-h-72 w-[45%] overflow-visible">
          <img
            src={image}
            alt={title}
            className="w-[calc(100% + 20px) absolute left-0 top-0 -mr-10 w-full"
          />
        </div>
        <div className="w-[10%] "></div>
        <div className="w-[45%] flex-col justify-start">
          <div className="flex w-full flex-row items-center">
            <p className="text-2xl font-bold italic text-daviz-red-500">{"0" + order}.</p>
            <div className="w-3"></div>
            <p className=" text-xl font-medium text-black-base">{title}</p>
          </div>
          <div className="w-6"></div>
          <p className="whitespace-pre-wrap text-justify text-base font-normal text-black-base">
            {desc}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-60 flex flex-col items-center justify-center px-28">
      <div className="inline-block w-auto border-b-8 border-red-500 text-center text-3xl font-semibold text-black-base">
        Our Feature
      </div>
      <div className="h-32"></div>
      <div className="flex w-full flex-col">
        {featureList.map((feature, index) => (
          <div key={index} className="mb-32 w-full">
            {featureListTile(feature)}
          </div>
        ))}
      </div>
    </div>
  );
}
