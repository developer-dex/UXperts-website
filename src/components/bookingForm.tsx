import Image from 'next/image';
import React from 'react';
import formImg from '../../public/logos/Form.png';
import zave from '../../public/logos/zave.svg';
import light from '../../public/logos/light.png';
import recruit from '../../public/logos/recruit.png';
import icon4 from '../../public/logos/icon4.png';
import spatial2 from '../../public/logos/spatial2.png';
import droxy from '../../public/logos/droxy.png';

const BookingForm = () => {
  const numbers = Array.from({ length: 17 }, (_, i) => (i + 1) * 50);

  return (
    <div className='gradient-background border-t border-zinc-800'>
      <div className="relative z-50">
        <article className="vLine">
          <div className="circle top-circle"></div>
          <div className="circle bottom-circle"></div>
        </article>
        <div className="absolute top-0 left-[275px] h-[850px] flex flex-col justify-between py-4">
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
      <section className="w-full py-12 items-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex mb-4 justify-center items-center h-[18px]">
            <div className="flex items-center justify-center w-full">
              <div className="flex justify-center items-center w-[14px] h-[14px] mr-2">
                <div className="w-[10px] h-[10px] bg-[#FF7300] rounded-[40px]"></div>
              </div>
              <div className="font-jetbrains font-medium text-[11px] leading-[15px] text-white tracking-[-0.2px] flex items-center">
                BOOKING FOR 2025
              </div>
            </div>
          </div>
          <div className="flex mb-3 justify-center items-center">
            <div className="flex items-center justify-center w-full">
              <div className="text-center text-white text-[40px] leading-[48px] tracking-[-0.6px] uppercase font-bold">
                <div>READY TO JOIN</div>
                <div>THE <span className='text-[#FF4400]'>WINNING</span> SIDE?</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-12">
            <div className="flex items-center justify-center w-full">
              <p className="text-center text-white text-[15px] leading-[22px] tracking-[-0.2px] font-normal">
                Get in touch. No pitches, just strategic insights.
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src={formImg}
              alt="form"
            />
          </div>
          <div className='flex flex-col gap-6 justify-center items-center mt-14'>
            <p className='font-jetbrains text-[10px] leading-[12px] text-[#71717A] uppercase font-normal'>Trusted by funded startups and tech giants alike</p>
            <div className='flex bg-[#1A1A1A] rounded border border-[#333333]'>
              <section className="overflow-hidden rounded w-[170px]">
                <article className="flex flex-col justify-center p-8 w-full rounded border border-dashed border-[#333333]">
                  <img
                    src={light.src}
                    alt="Content image"
                    className="object-contain aspect-[3.62] w-[116px] brightness-150 contrast-125 filter invert"
                  />
                </article>
              </section>
              <article className="relative h-24 rounded w-[170px] border border-dashed border-[#333333]">
                <figure className="flex justify-center items-center p-8">
                  <img
                    src={recruit.src}
                    alt="RecruitU logo"
                    className="h-[18px] w-[90px] max-md:w-20 max-md:h-4 max-sm:h-3.5 max-sm:w-[70px] brightness-150 contrast-125 filter invert"
                  />
                </figure>
                <div className="absolute bottom-0 h-0.5 w-[180px] max-md:h-0.5 max-sm:h-px">
                  <div className="h-0.5 bg-white w-[100px] max-md:h-0.5 max-sm:h-px" />
                  <div className="h-0.5 bg-white w-[100px] max-md:h-0.5 max-sm:h-px" />
                </div>
              </article>
              <section className="overflow-hidden rounded w-[170px]">
                <article className="flex flex-col justify-center p-8 w-full rounded border border-dashed border-[#333333]">
                  <img
                    src={zave.src}
                    alt="Logo"
                    className="object-contain aspect-[3.62] w-[116px] brightness-150 contrast-125 filter invert"
                  />
                </article>
              </section>
              <section className="overflow-hidden rounded w-[170px]">
                <article className="flex flex-col justify-center p-8 w-full rounded border border-dashed border-[#333333]">
                  <img
                    src={icon4.src}
                    alt="Content image"
                    className="object-contain aspect-[3.62] w-[116px] brightness-150 contrast-125 filter invert"
                  />
                </article>
              </section>
              <section className="overflow-hidden rounded w-[170px]">
                <article className="flex flex-col justify-center p-8 w-full rounded border border-dashed border-[#333333]">
                  <img
                    src={spatial2.src}
                    alt="Logo"
                    className="object-contain aspect-[3.62] w-[116px] brightness-150 contrast-125 filter invert"
                  />
                </article>
              </section>
              <section className="overflow-hidden rounded w-[170px]">
                <article className="flex flex-col justify-center p-8 w-full rounded border border-dashed border-[#333333]">
                  <img
                    src={droxy.src}
                    className="object-contain aspect-[3.62] w-[116px] brightness-150 contrast-125 filter invert"
                    alt="Droxy logo"
                  />
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
          .gradient-background {
            background: linear-gradient(to bottom, #000000 0%, #1A1A1A 20%, #222222 40%, #383838 70%, #404040 90%, #575757 100%);
            background: linear-gradient(to bottom, #000000 0%, #0F0F0F 25%, #151515 50%, #1A1A1A 75%, #222222 100%);
            background: linear-gradient(to bottom, #000000 0%, #0F0F0F 25%, #151515 50%, #1A1A1A 75%, #222222 100%);
          }
          .vLine {
            width: 1px;
            height: 850px;
            background-color: #CBD5E180;
            margin-left: 310px;
            position: absolute;
          }
          .vLine-1 {
            width: 1px;
            height: 850px;
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
  );
};

export default BookingForm;
