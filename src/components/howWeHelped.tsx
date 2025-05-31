import React from 'react';
import lightDash from '../../public/logos/light-dash.png';
import lightDashOne from '../../public/logos/light-dash-1.png';
import spatial from '../../public/logos/spatial.png';
import spatialOne from '../../public/logos/spatial-1.png';
import gradientImage from '../../public/logos/gradient-img.png';
import arrowWhite from '../../public/logos/vector-white.png';
import arrowBlack from '../../public/logos/vector-black.png';
import Tag from './tag';

const BusinessIntelligenceChip = ({ text }: { text: string }) => {
  return (
    <div className="px-2 py-1 rounded-[10px] border">
      <span className="font-jetbrains font-light text-[12px] leading-[14px] flex items-center tracking-[-0.24px] text-black">
        {text}
      </span>
    </div>
  );
};

const ColoredBullet = () => {
  return (
    <div className="w-[2px] h-[2px] bg-[#FF4400] rounded-full"></div>
  );
};

const HowWeHelped = () => {
  return (
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-jetbrains text-xs uppercase text-gray-500 mb-2">
            how we helped others succeed
          </p>
          <h2 className="font-inter font-extrabold uppercase text-5xl tracking-tight mb-6">
            Our success stories
          </h2>
        </div>
        <div className='flex justify-between p-5 bg-white rounded-12'>
          <img src={lightDash.src} alt="lightdash" />
          <div className='flex flex-col justify-between my-5 max-w-[488px]'>
            <div>
              <img src={lightDashOne.src} alt="lightdash-1" />
              <p className='font-semibold text-26 leading-30 my-[23px] tracking-tighter'>Taking redesigned Lightdash to an $11
                million series A funding</p>
              <div className='flex gap-2 w-full'>
                <BusinessIntelligenceChip text="dbt" />
                <BusinessIntelligenceChip text="business intelligence" />
                <BusinessIntelligenceChip text="SaaS" />
              </div>
            </div>
            <div>
              <hr />
              <p className='font-semibold text-lg leading-[21px] tracking-tighter my-[10px]'><span className='text-3xl'>$19.4M </span>in funding</p>
              <div className='flex gap-2'>
                <div className="flex items-center gap-2">
                  <p className="font-jetbrains text-xs uppercase text-gray-500">
                    BRANDING
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ColoredBullet />
                  <p className="font-jetbrains text-xs uppercase text-gray-500">
                    PRODUCT
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ColoredBullet />
                  <p className="font-jetbrains text-xs uppercase text-gray-500">
                    WEBFLOW
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ColoredBullet />
                  <p className="font-jetbrains text-xs uppercase text-gray-500">
                    RIVE
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ColoredBullet />
                  <p className="font-jetbrains text-xs uppercase text-gray-500">
                    SOCIALS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-between p-5 bg-white rounded-12 my-20'>
          <div className='flex flex-col justify-between my-5 max-w-[488px]'>
            <div>
              <img src={spatialOne.src} alt="spatial-1" />
              <p className='font-semibold text-26 leading-30 my-[23px] tracking-tighter'>Elevating Spatialinc.com for their
                Apple VisionOS partnership with a bold
                new brand & website</p>
              <div className='flex gap-2 w-full'>
                <BusinessIntelligenceChip text="AR?VR" />
                <BusinessIntelligenceChip text="Spatial Audio" />
              </div>
            </div>
            <div>
              <hr />
              <p className='font-semibold text-2xl leading-[28px] tracking-tighter my-[10px]'>Series B privately funded</p>
              <div className='flex gap-2'>
                <div className="flex items-center gap-2">
                  <p className="font-jetbrains text-xs uppercase text-gray-500">
                    BRANDING
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ColoredBullet />
                  <p className="font-jetbrains text-xs uppercase text-gray-500">
                    WEB DESIGN
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ColoredBullet />
                  <p className="font-jetbrains text-xs uppercase text-gray-500">
                    WEBFLOW
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={spatial.src} alt="spatial" />
        </div>

        <div className='bg-black rounded-20 flex justify-between items-center'>
          <div className='ml-10'>
            <h2 className='uppercase text-white font-extrabold text-42 leading-50 tracking-tightest mb-[10px]'>view MORE work</h2>
            <p className='text-[#E3E3E3] font-normal text-base mb-[40px]'>And see how your project could look like soon.</p>
            <div className='flex gap-[10px]'>
              <button className='flex gap-1 bg-white text-black px-4 py-2 rounded-[50px] text-sm font-bold'>
                <img src={arrowBlack.src} alt='arrow-black' className='shrink-0' height={10} width={10} />
                See all case studies
              </button>
              <button className='flex gap-1 text-white border border-white px-4 py-2 rounded-[50px] text-sm font-bold'>
                <img src={arrowWhite.src} alt='arrow-white' className='shrink-0' height={10} width={10} />
                See all case studies
              </button>
            </div>
          </div>
          <div className='relative'>
            <img src={gradientImage.src} alt='gradient' />
            <Tag text="NEW PROJECTS" classname='right-5 top-5' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeHelped
