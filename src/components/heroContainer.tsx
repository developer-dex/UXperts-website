import React from 'react'
import flash from "../../public/logos/flash.png";
import { AvatarStack } from './avatarStack';
import { StatusIndicator } from './footer';
import zave from '../../public/logos/zave.svg';
import light from '../../public/logos/light.png';
import recruit from '../../public/logos/recruit.png';
import icon4 from '../../public/logos/icon4.png';
import spatial2 from '../../public/logos/spatial2.png';
import droxy from '../../public/logos/droxy.png';
import Tag from './tag';

const HeroContainer = () => {
  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto px-4'>
          <div className="mb-6 notification-banner flex font-medium text-[11px] leading-[16.5px] justify-center items-center mt-[80px]">
            <img src={flash.src} alt="flash" className="mr-2" />
            <span className="font-medium mr-1">We helped Lightdash raise $11M 🎉 -</span>
            <span className="cursor-pointer">see case study →</span>
          </div>
          <div className="flex relative justify-center items-center w-full h-[58px]">
            <AvatarStack />
          </div>
          <div className='flex justify-center items-center'>
            <h1 className="font-black text-center w-[980px] leading-[86px] uppercase text-zinc-900 text-7xl">
              Premium <span className='relative'>design
                <Tag text="& NO-CODE" classname='left-[190px] top-[63px] rotate-5 !px-1 py-0' />
              </span> <br /> for AI & tech startups
            </h1>
          </div>
          <div className='flex justify-center items-center'>
            <p className="flex gap-1.5 text-base tracking-wide text-center text-zinc-800">
              <span>We create tech</span>
              <span className="text-neutral-900">products</span>
              <span className="basis-auto">users love and investors can't resist.</span>
            </p>
          </div>
          <div className="flex justify-center items-center mt-10 gap-2.5">
            <button className="bg-zinc-900 text-white uppercase font-medium px-8 py-4 rounded-full">
              Book an intro call
            </button>
            <button className="uppercase border border-slate-300 font-medium px-8 py-4 rounded-full">
              &copy; 2024 work
            </button>
          </div>
          <div className='flex flex-col gap-6 justify-center items-center mt-12 mb-[155px]'>
            <p className='mt-8 text-[#71717A] text-[10px] leading-3 uppercase font-jetbrains'>Trusted by funded startups and tech giants alike</p>
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
      <div className="h-[52px]">
        <div className="border-t border-slate-200" />
        <div className="flex justify-center items-center size-full">
          <div className="h-[52px] w-[440px] max-md:hidden shrink-0">
            <div className="border-r border-r-slate-200 h-[52px]" />
          </div>
          <div className="flex justify-between items-center p-4 h-[52px] w-[1080px] max-md:px-2.5 max-md:py-4 max-md:w-full max-sm:flex-col max-sm:gap-2.5 max-sm:items-center">
            <div className="flex items-center text-xs leading-3 text-neutral-400 max-sm:justify-center border-r pr-16 border-dashed border-r-slate-200 h-[52px]">
              <div className="uppercase">Gdansk |</div>
              <div>8:02:40 AM GMT+1</div>
            </div>
            <div className="flex gap-2.5 items-center">
              <StatusIndicator />
              <div className="text-xs font-medium tracking-normal text-neutral-400">
                BOOKING FOR 2025
              </div>
            </div>
            <div className="flex items-center text-xs leading-3 text-neutral-400 max-sm:justify-center border-l pl-16 border-dashed border-l-slate-200 h-[52px]">
              <div className="uppercase">NYC |</div>{""}
              <div>2:02:40 AM EST</div>
            </div>
          </div>
          <div className="h-[52px] w-[400px] max-md:hidden">
            <div className="border-l border-l-slate-200 h-[52px]" />
          </div>
        </div>
        <div className="relative z-10 border-b border-slate-200" />
      </div>
    </>
  )
}

export default HeroContainer
