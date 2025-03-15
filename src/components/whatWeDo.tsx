import React from 'react';
import figma from '../../public/logos/figma.png';
import icTwo from '../../public/logos/ic-2.png';
import icThree from '../../public/logos/ic-3.png';
import icFour from '../../public/logos/ic-4.png';
import icFive from '../../public/logos/ic-5.png';
import icSix from '../../public/logos/ic-6.png';
import icSeven from '../../public/logos/ic-7.png';
import icEight from '../../public/logos/ic-8.png';
import icNine from '../../public/logos/ic-9.png';
import icTen from '../../public/logos/ic-10.png';

const WhatWeDo = () => {

  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-jetbrains text-xs uppercase text-gray-500 mb-2">
            WHAT WE DO
          </p>
          <h2 className="font-inter font-extrabold text-5xl tracking-tight mb-6">
            DESIGNME, IN A NUTSHELL.
          </h2>
          <p className="font-inter text-base text-gray-700 max-w-xl mx-auto">
            If you're a startup founder or scaling your business, and any of
            this sounds familiar, we're a great fit to work together.
          </p>
        </div>

        <div className='bg-white rounded-xl shadow-card mx-auto px-5 p-5' style={{ maxWidth: '960px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left column - Who we work with */}
            <div className="bg-[#F5F5F5] rounded-xl p-5">
              <h3 className="font-inter text-xs uppercase text-gray-500 mb-6">
                WHO WE WORK WITH:
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  AI
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  AR/VR
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  Fintech
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  SaaS
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  Emerging tech
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  web3
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  e-com
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  BI
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  Real estate
                </span>
              </div>

              <h3 className="font-inter text-xs uppercase text-gray-500 mt-10 mb-6">
                OUR CLIENTS INCLUDE:
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  SeamlessAI
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  Datawizz
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  Lightdash
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  Spatialinc
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  GanAI
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  DroxyAI
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  Zave.it
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  Intro.co
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  ColdIQ
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  RecruitU
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  GetQuotient
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  GymCrush
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  TravelWith
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  Sincera.io
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  Blockview.ai
                </span>
                <span className="font-inter px-2 py-0.5 bg-white rounded-md border border-dashed border-gray-300 text-sm leading-tight h-[29px] flex items-center">
                  Servicebell
                </span>
                <button className="font-inter px-4 py-0.5 bg-black text-white rounded-md text-sm leading-tight h-[29px] flex items-center ml-2">
                  View all
                </button>
              </div>
            </div>

            {/* Right column - What we do */}
            <div className="bg-[#000000] text-white rounded-xl p-5">
              <h3 className="font-inter text-xs uppercase text-gray-400 mb-6">
                WHAT WE DO:
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  UX Research
                </span>
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  Web/mobile app design
                </span>
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  No-code
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  Visual design
                </span>
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  Branding
                </span>
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  MVPs
                </span>
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  Motion
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  Design systems
                </span>
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  Pitch decks
                </span>
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  UX copywriting
                </span>
              </div>

              <h3 className="font-inter text-xs uppercase text-gray-400 mt-10 mb-6">
                HOW FAST WE DO IT:
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  Brand sprints: 1-2 weeks
                </span>
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  MVPs: 1-3 months
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  Websites: 2-10 weeks
                </span>
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  Design systems: 2-6 weeks
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  UX audits: 1-4 weeks
                </span>
                <span className="font-inter px-2 py-0.5 bg-[#000000] border border-dashed border-gray-700 rounded-md text-sm leading-tight h-[29px] flex items-center">
                  Rive animations: 1-4 weeks
                </span>
              </div>
            </div>
          </div>
          {/* Tool stack */}
          <div className="text-center">
            <h3 className="font-jetbrains text-xs uppercase text-gray-500 mb-8">
              OUR TOOL STACK
            </h3>
            <div className="flex justify-center gap-8">
              {/* Tool icons */}
              <img src={figma.src} alt="Figma" />
              <img src={icTwo.src} alt="Figma" />
              <img src={icThree.src} alt="Figma" />
              <img src={icFour.src} alt="Figma" />
              <img src={icFive.src} alt="Figma" />
              <img src={icSix.src} alt="Figma" />
              <img src={icSeven.src} alt="Figma" />
              <img src={icEight.src} alt="Figma" />
              <img src={icNine.src} alt="Figma" />
              <img src={icTen.src} alt="Figma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
