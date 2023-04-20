// import React from "react";
// export const d_img1 = React.lazy(() =>
//   import("../assets/desktop-image-hero-1.jpg")
// );
import d_img1 from "../assets/desktop-image-hero-1.jpg";
import d_img2 from "../assets/desktop-image-hero-2.jpg";
import d_img3 from "../assets/desktop-image-hero-3.jpg";
import m_img1 from "../assets/mobile-image-hero-1.jpg";
import m_img2 from "../assets/mobile-image-hero-2.jpg";
import m_img3 from "../assets/mobile-image-hero-3.jpg";

export const Products = [
  {
    id: 1,
    heading: "Discover innovative ways to decorate",
    text: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`,
    desktopImg: d_img1,
    mobileImg: m_img1,
  },
  {
    id: 2,
    heading: "We are available all across the globe",
    text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
    desktopImg: d_img2,
    mobileImg: m_img2,
  },
  {
    id: 3,
    heading: "Manufactured with the best materials",
    text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
    desktopImg: d_img3,
    mobileImg: m_img3,
  },
];
