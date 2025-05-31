"use client";
import FirstImpression from "@/components/firstImpression";
import Header from "./Header";
import HeroContainer from "@/components/heroContainer";
import WhatWeDo from "@/components/whatWeDo";
import EngagementThatDelivers from "@/components/engagementThatDelivers";
import HowWeHelped from "@/components/howWeHelped";
import HappyClients from "@/components/happyClients";
import Faqs from "@/components/faqs";
import DesignPartner from "@/components/designPartner";
import Footer from "@/components/footer";
import BookingForm from "@/components/bookingForm";

export default function Home() {
  // Generate array of numbers from 50 to 850 with step of 50
  const numbers = Array.from({ length: 17 }, (_, i) => (i + 1) * 50);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      <div className="w-full min-h-screen bg-gradient-to-b from-white to-[#F7F7F7] relative overflow-x-hidden">
        <hr className="w-full h-[1px] bg-[#CBD5E180] mt-[60px]" />
        <div className="relative">
          <article className="vLine">
            <div className="circle top-circle"></div>
            <div className="circle bottom-circle"></div>
          </article>
          <div className="absolute top-0 left-[275px] h-[898px] flex flex-col justify-between py-4">
            {numbers.map((num) => (
              <div key={num} className="flex items-center marker-container">
                <span className="number-label">{num}</span>
                <div className="marker-line"></div>
              </div>
            ))}
          </div>
        </div>
        <article className="vLine-1">
          <div className="circle top-circle"></div>
          <div className="circle bottom-circle"></div>
        </article>
        <div className="absolute left-[475px] h-[898px] flex flex-col justify-between py-4">
        </div>
        <Header />
        <HeroContainer />
        <FirstImpression />
        <WhatWeDo />
        <hr />
        <EngagementThatDelivers />
        <hr />
        <HowWeHelped />
        <hr />
        <HappyClients />
        <hr />
        <Faqs />
        <DesignPartner />
        <BookingForm />
        <Footer />
        <style jsx>{`
          .vLine {
            width: 1px;
            height: 898px;
            background-color: #CBD5E180;
            margin-left: 310px;
            position: absolute;
          }
          .vLine-1 {
            width: 1px;
            height: 898px;
            background-color: #CBD5E180;
            margin-left: 1750px;
            position: absolute;
          }
          .circle {
            width: 4px;
            height: 4px;
            background-color: #CBD5E180;
            border-radius: 50%;
            position: absolute;
            left: -1.5px;
          }
          .top-circle {
            top: -2px;
          }
          .bottom-circle {
            bottom: -2px;
          }
          .marker-container {
            transform: translateY(-50%);
          }
          .number-label {
            font-size: 10px;
            color: #64748B;
            transform: rotate(-90deg);
            margin-right: 8px;
            width: 20px;
            text-align: right;
          }
          .marker-line {
            width: 8px;
            height: 1px;
            background-color: #CBD5E180;
          }
          .notification-banner {
            font-family: 'Inter', sans-serif;
        `}</style>
      </div>
    </>
  );
}
