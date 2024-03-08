import * as React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import CarouselSection from "@/components/sections/home/carouselSection";
import OurPartner from "@/components/sections/home/ourPartner";
import ContactUs from "@/components/unique/home/contactUs";
import Description from "@/components/unique/home/description";
import Jumbotron from "@/components/unique/home/jumbotron";
import OurFeature from "@/components/unique/home/ourFeature";
import OurService from "@/components/unique/home/ourService";
import OurPartner from "@/components/sections/home/ourPartner";

export default function Home() {
  return (
    <main>
      <div className="bg-white px-16">
        {/* Jumbotron */}
        <Jumbotron />
        {/* Our Partner */}
        <div className="h-44"></div>
        <OurPartner />
        {/* Description */}
        <div id="profile">
          <Description />
        </div>
        {/* Our Feature */}
        <div id="feature">
          <OurFeature />
        </div>
        <div className="h-20"></div>
        {/*Our Service */}
        <div id="service">
          <OurService />
        </div>
        <div className="h-44"></div>
        {/* Our Portfolio */}
        <div id="dashboard">
          <CarouselSection type={"portfolio"} />
        </div>
        {/* Contact Us */}
        <div id="contact">
          <ContactUs />
        </div>
        {/* Article */}
        <CarouselSection type={"article"} />
      </div>
      <div className="h-44"></div>
    </main>
  );
}
