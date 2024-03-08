import * as React from "react";
import CarouselSection from "../../components/unique/home/carouselSection";
import ContactUs from "../../components/unique/home/contactUs";
import Description from "../../components/unique/home/description";
import Jumbotron from "../../components/unique/home/jumbotron";
import OurFeature from "../../components/unique/home/ourFeature";
import OurService from "../../components/unique/home/ourService";

export default function Home() {
  return (
    <main>
      <div className="bg-white px-16">
        {/* Jumbotron */}
        <Jumbotron />
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
