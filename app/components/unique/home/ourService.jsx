import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function OurService() {
  const dropdownData = [
    {
      title: "Daviz Dashboard Management",
      content:
        "Daviz Dashboard Management is an innovative service designed to provide intuitive and interactive data visualization solutions. Using the Daviz platform, we develop dashboards that are not only visually stunning, but also rich in analytical features. This service allows users to see and understand data in a more effective and efficient way.",
    },
    {
      title: "Daviz Dashboard Management",
      content:
        "Daviz Dashboard Management is an innovative service designed to provide intuitive and interactive data visualization solutions. Using the Daviz platform, we develop dashboards that are not only visually stunning, but also rich in analytical features. This service allows users to see and understand data in a more effective and efficient way.",
    },
    {
      title: "Daviz Dashboard Management",
      content:
        "Daviz Dashboard Management is an innovative service designed to provide intuitive and interactive data visualization solutions. Using the Daviz platform, we develop dashboards that are not only visually stunning, but also rich in analytical features. This service allows users to see and understand data in a more effective and efficient way.",
    },
    {
      title: "Daviz Dashboard Management",
      content:
        "Daviz Dashboard Management is an innovative service designed to provide intuitive and interactive data visualization solutions. Using the Daviz platform, we develop dashboards that are not only visually stunning, but also rich in analytical features. This service allows users to see and understand data in a more effective and efficient way.",
    },
  ];
  const dropDownBuilder = ({ dropdownList }) => {
    return (
      <Accordion type="single" collapsible className="w-full">
        {dropdownList.map((dropdown, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger>
              <div className="flex flex-row items-center justify-center underline-offset-0">
                <p className="text-lg font-normal text-daviz-grey-400">
                  {index.toString().padStart(2, "0")}
                </p>
                <div className="w-8"></div>
                <p className="text-2xl font-medium text-black-base">{dropdown.title}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-[52px]">{dropdown.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };
  return (
    <div className="flex flex-col justify-center">
      <h2 className="mb-16 text-center text-3xl font-semibold text-black-base">Our Service</h2>
      {dropDownBuilder({ dropdownList: dropdownData })}
    </div>
  );
}
