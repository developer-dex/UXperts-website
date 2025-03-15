import React from 'react'
import flash from "../../public/logos/flash.png";

const HeroContainer = () => {
  return (
    <div>
      <div>
          <div className="notification-banner flex font-medium text-[11px] leading-[16.5px] justify-center items-center mt-[80px]">
            <img src={flash.src} alt="flash" className="mr-2" />
            <span className="font-medium mr-1">We helped Lightdash raise $11M 🎉 -</span>
            <span className="cursor-pointer">see case study →</span>
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}

export default HeroContainer
