import React from "react";
import { useState } from "react";
import Accordion from "./Accordion";

const data = [
  {
    title: "How do I send money overseas using Adaremit?",
    content: "You can send money overseas through the adaremit website, adaremit mobile app and adaremit whatsapp (+62 12312 231312)",
  },
  {
    title: "To which countries can you send money using Adaremit?",
    content:
      "we can send money to over 60 countries. Asia Pasific : Australia, Bangladesh, Cambodia, China, Hong Kong, India, Japan, Malaysia,Myanmar, Nepal, Pakistan, Philippines, Singapore, South Korea, Sri Lanka, Thailand, Vietnam.    Europe : Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Lithuania,  Liechtenstein, Luxembourg, Malta, Monaco, Norway, Poland, Portugal, Romania, Russia, San Marino, Slovakia, Slovenia, Spain, Sweden, Switzerland, United Kingdom, Vatican City. Africa : Ghana, Niger, Nigeria, South Afric America : Argentina, Canada, Brazil, USA, Turkey",
  },
  {
    title: "How do I pay for my transfer?",
    content:
      "In order to use our services, you can make your payment through Mobile Banking, Internet Banking, ATM and Cash (case to case basis). As soon as you have made and confirm your payment, a notification will be sent to you via app/email.",
  },
  {
    title: "Why is the order pending and delayed? ",
    content:
      "There are several factors that cause the money pending/delay. Reasons for pending / delay" +
      "- Because we havent received payment or the amount you pay is incorrect.- We didnt receive payment confirmation from you.- It is a public holiday either in the destination country or Indonesia.- There is some internal issues with the bank.",
  },
  {
    title: "Is Adaremit safe and trustworthy?",
    content:
      "The safety of your money is our priority.  Adaremit is regulated by Bank Indonesia under regulation 19/10/PBI/2017 with license no. 12/68/MDN/7. As a fund transfer provider regulated since 2010, we have been trusted by clients move trillions of Rupiah.  We hold the trust of our customers in a very high regard and will make sure to transfer your money  securely in every transaction.",
  },
];

const AccGroup = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="overflow-hidden rounded-[10px] bg-white">
      {data.map((item, index) => {
        return <Accordion key={index} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title={item.title} content={item.content} />;
      })}
    </div>
  );
};

export default AccGroup;
