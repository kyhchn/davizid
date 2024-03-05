import Image from "next/image";
import {
  DAVIZ_DESC,
  FEATURE_1,
  FEATURE_2,
  FEATURE_3,
  FEATURE_4,
  FEATURE_5,
  FEATURE_6,
  FEATURE_7,
  FEATURE_8,
  THREE_DOT,
  WHAT_IS_DAVIZ,
} from "@/utils/assets";
import { dollarFormatter } from "@/utils/extension";

export default function Home() {
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
  const informationCard = ({ title, desc, growth, value }) => {
    const highlightColor = growth > 0 ? "#47CC45" : "red-500";
    return (
      <div className="flex flex-col rounded-lg bg-white p-4 shadow-md">
        <div className="flex flex-row items-start justify-between">
          <div>
            <p className="text-daviz-grey-700 mb-2 text-base">{title}</p>
            <p className="text-daviz-grey-400 text-xs">{desc}</p>
          </div>
          <div className="bg-daviz-grey-700 rounded p-2 opacity-5">
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
          <p className="text-black-base text-lg font-semibold">{dollarFormatter(value)}</p>
        </div>
      </div>
    );
  };
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
            <p className="text-daviz-red-500 text-2xl font-bold italic">{"0" + order}.</p>
            <div className="w-3"></div>
            <p className=" text-black-base text-xl font-medium">{title}</p>
          </div>
          <div className="w-6"></div>
          <p className="text-black-base whitespace-pre-wrap text-justify text-base font-normal">
            {desc}
          </p>
        </div>
      </div>
    );
  };
  return (
    <main>
      <div className="h-12"></div>
      <div className="bg-white px-16">
        {/* Jumbotron */}
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
            <p className="text-daviz-red-500 mb-4 text-xl font-semibold">Data Driven Decision</p>
            <p className="text-black-base mb-4 text-4xl font-semibold">
              Unleash The Power of Data Analytics
            </p>
            <p className="text-daviz-grey-500 mb-4 text-base font-medium">
              How to Turn Data into the Most Valuable Asset for the <br /> Progress of Your
              Organization or Company?
            </p>
          </div>
          <div className="absolute -bottom-5 grid h-auto w-full grid-cols-4 gap-4 px-7">
            {informationCards.map((card, index) => (
              <div key={index}>{informationCard(card)}</div>
            ))}
          </div>
        </div>
        {/* Description */}
        <div className="mt-20 flex flex-col items-center justify-start px-20">
          <p className="text-black-base text-3xl font-semibold">
            What is <span className="text-red-500">Daviz</span>?
          </p>
          <div className="h-12"></div>
          <p className="text-black-base whitespace-pre-wrap text-center text-lg font-normal">
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
        {/* Our Feature */}
        <div className="mt-60 flex flex-col items-center justify-center px-28">
          <div className="text-black-base inline-block w-auto border-b-8 border-red-500 text-center text-3xl font-semibold">
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
      </div>
      <div className="h-12"></div>
    </main>
  );
}
