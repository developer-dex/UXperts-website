import React from 'react'
import recruitU from '../../public/logos/recruitU.png';
import brooks from '../../public/logos/brooks.png';
import zave from '../../public/logos/zave.svg';
import light from '../../public/logos/light.png';
import recruit from '../../public/logos/recruit.png';
import icon4 from '../../public/logos/icon4.png';
import spatial2 from '../../public/logos/spatial2.png';
import droxy from '../../public/logos/droxy.png';
const HappyClients = () => {

  const numbers = Array.from({ length: 17 }, (_, i) => (i + 1) * 50);

  return (
    <>
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
      <div className="absolute left-[475px] h-[850px] flex flex-col justify-between py-4">
      </div>
      <section className="w-full py-24 bg-[#FAFAFA] items-center">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-jetbrains text-xs uppercase text-gray-500 mb-2">
              what they say about us
            </p>
            <h2 className="font-inter font-extrabold text-5xl tracking-tight mb-6">
              HAPPY CLIENTS
            </h2>
            <p className="font-inter text-base text-gray-700 max-w-xl mx-auto">
              We're not for everyone. Just the ones who want to win.
            </p>
          </div>
          <div className='mt-14 bg-white rounded-lg flex justify-center items-center flex-col'>
            <div className='flex max-w-[590px] flex-col gap-6 py-20 text-center items-center mb-10'>
              <img src={recruitU.src} alt='recruitU' />
              <p><span className='font-bold text-base'>"Their versatility and expertise are unmatched.</span>Working with DesignMe has
                been incredible. They <span className='font-bold text-base'>quickly grasped our business model</span> and <span className='font-bold text-base'>vision</span>,
                transforming our landing page, creating pitch decks, and more. "
              </p>
              <div className='flex gap-2 text-start'>
                <img src={brooks.src} alt='brooks' />
                <div>
                  <p className='font-bold text-base'>Brooks Gammill</p>
                  <p className='font-medium text-sm'>Co-Founder</p>
                </div>
              </div>
            </div>
            <div className='flex'>
              <section className="overflow-hidden rounded bg-neutral-100 w-[170px]">
                <article className="flex flex-col justify-center border border-dashed p-8 w-full rounded border-neutral-200">
                  <img
                    src={light.src}
                    alt="Content image"
                    className="object-contain aspect-[3.62] w-[116px]"
                  />
                </article>
              </section>
              <article className="relative h-24 bg-white rounded border border-dashed border-neutral-200 w-[170px]">
                <figure className="flex justify-center items-center p-8">
                  <img
                    src={recruit.src}
                    alt="RecruitU logo"
                    className="h-[18px] w-[90px] max-md:w-20 max-md:h-4 max-sm:h-3.5 max-sm:w-[70px]"
                  />
                </figure>
                <div className="absolute bottom-0 h-0.5 bg-white w-[180px] max-md:h-0.5 max-sm:h-px">
                  <div className="h-0.5 bg-black w-[100px] max-md:h-0.5 max-sm:h-px" />
                </div>
              </article>
              <section className="overflow-hidden rounded bg-neutral-100 w-[170px]">
                <article className="flex flex-col justify-center border border-dashed p-8 w-full rounded border-neutral-200">
                  <img
                    src={zave.src}
                    alt="Logo"
                    className="object-contain aspect-[3.62] w-[116px]"
                  />
                </article>
              </section>
              <section className="overflow-hidden rounded bg-neutral-100 w-[170px]">
                <article className="flex flex-col justify-center border border-dashed p-8 w-full rounded border-neutral-200">
                  <img
                    src={icon4.src}
                    alt="Content image"
                    className="object-contain aspect-[3.62] w-[116px]"
                  />
                </article>
              </section>
              <section className="overflow-hidden rounded bg-neutral-100 w-[170px]">
                <article className="flex flex-col justify-center border border-dashed p-8 w-full rounded border-neutral-200">
                  <img
                    src={spatial2.src}
                    alt="Logo"
                    className="object-contain aspect-[3.62] w-[116px]"
                  />
                </article>
              </section>
              <section className="overflow-hidden rounded bg-neutral-100 w-[170px]">
                <article className="flex flex-col justify-center border border-dashed p-8 w-full rounded border-neutral-200">
                  <img
                    src={droxy.src}
                    className="object-contain aspect-[3.62] w-[116px]"
                    alt="Droxy logo"
                  />
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
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
    </>
  )
}

export default HappyClients
