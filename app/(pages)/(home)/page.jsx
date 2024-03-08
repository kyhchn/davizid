import * as React from "react";
import CarouselSection from "./carouselSection";
import ContactUs from "./contactUs";
import Description from "./description";
import Jumbotron from "./jumbotron";
import OurFeature from "./ourFeature";
import OurService from "./ourService";

export default function Home() {
  return (
    <main>
      <div className="bg-white px-16">
        {/* Jumbotron */}
        <Jumbotron />
        {/* Description */}
        <Description />
        {/* Our Feature */}
        <OurFeature />
        <div className="h-20"></div>
        {/*Our Service */}
        <OurService />
        <div className="h-44"></div>
        {/* Our Portfolio */}
        <CarouselSection type={"portfolio"} />
        {/* Contact Us */}
        <ContactUs />
        {/* Article */}
        <CarouselSection type={"article"} />
      </div>
      <div className="h-44"></div>
    </main>
  );
}
