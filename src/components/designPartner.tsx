import React from 'react';
import bgImage from '../../public/logos/bg-image.png';

const DesignPartner = () => {
  return (
    <div className="w-full pb-24 bg-black relative">
      <div className="container mx-auto px-4 max-w-7xl flex justify-center items-center">
        {/* <img src={bgImage.src} alt='background' /> */}
        <section className="max-w-[946px] mx-auto bgImage pt-[320px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base tracking-wide leading-6 max-md:mt-10 max-md:max-w-full">
                <h2
                  className={`text-3xl font-black tracking-tight leading-10 text-white uppercase max-md:max-w-full`}
                >
                  Your search for a design <br />
                  <span className="relative">
                    Partner <span className="text-[#FF4400]">ends here</span>.
                  </span>
                </h2>

                <p className="mt-6 mr-5 max-md:mr-2.5 max-md:max-w-full text-[#E3E3E3]">
                  You're not here for another cookie-cutter design agency. You're{" "}
                  here because you need a team that gets it. That's us.
                </p>

                <p className="self-start mt-28 pl-5 max-md:mt-10 max-md:ml-2.5 border-l text-[#E3E3E3]">
                  At DesignMe, we're building more than interfaces. We're
                  building the future of tech, one pixel at a time.
                </p>
              </div>
            </div>

            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base tracking-wide text-[#E3E3E3] max-md:mt-10 max-md:max-w-full">
                <p className="self-start font-bold">
                  We're headquartered in Gdansk but our work is global.
                </p>

                <p className="mt-8 leading-6 max-md:mr-2.5 max-md:max-w-full text-[#E3E3E3]">
                  A squad of 10+ battle-hardened designers, animators, developers,{" "}
                  <br />
                  UX strategists and managers spread across Poland, US, Iceland,{" "}
                  <br />
                  Ireland, and United Kingdom.
                </p>

                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/05f5c638e32df83e512d341db369fbd0e59d7356f5953c107a98a2500f5a5291?placeholderIfAbsent=true&apiKey=e9c16f4162d64b8191dcdb7a32baf992"
                  alt="Global team distribution map"
                  className="object-contain mt-7 aspect-[5.75] w-[449px] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DesignPartner
