import React from 'react';
import imgOne from '../../public/logos/i-1.png'
import imgTwo from '../../public/logos/i-2.png'
import imgThree from '../../public/logos/i-3.png'
import imgFour from '../../public/logos/i-4.png'
import imgFive from '../../public/logos/i-5.png'
import imgSix from '../../public/logos/i-6.png'

const FirstImpression = () => {
  const features = [
    {
      id: 1,
      icon: (
        <img src={imgOne.src} alt='iOne' />
      ),
      title: "CONVERSION-FIRST DESIGN",
      description: "Every pixel is strategically designed to turn visitors into customers. Our focus isn't just on the great looks, but on improving your KPIs."
    },
    {
      id: 2,
      icon: (
        <img src={imgTwo.src} alt='imgTwo' />
      ),
      title: "DEDICATED FOCUS",
      description: "We only take on 3 new clients per month. Why? Quality over quantity. Your project deserves our full attention, not whatever's left after juggling 20 others."
    },
    {
      id: 3,
      icon: (
        <img src={imgThree.src} alt='imgThree' />
      ),
      title: "BEAUTIFUL ANIMATIONS",
      description: "We use a powerful combination of Rive and no-code to engage your users with fluid animations that enhance the experience."
    },
    {
      id: 4,
      icon: (
        <img src={imgFour.src} alt='imgFour' />
      ),
      title: "INDUSTRY EXPERIENCE",
      description: "From MVP to IPO, we design success, convincing investors and crushing your competition. Your tech deserves the best treatment."
    },
    {
      id: 5,
      icon: (
        <img src={imgFive.src} alt='imgFive' />
      ),
      title: "GROWTH-FOCUSED APPROACH",
      description: "Our clients see an average 40% increase in conversions and have secured over $100M in funding after working with us."
    },
    {
      id: 6,
      icon: (
        <img src={imgSix.src} alt='imgSix' />
      ),
      title: "RAPID PACE",
      description: "We turn 'meh' into 'holy sh*t' in 90 days or less. Elevate your brand and user experience to match the quality of your technology."
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <p className="font-jetbrains text-11 leading-12 uppercase text-[#71717A] mb-4">
            First impressions matter more than ever
          </p>
          
          <h2 className="font-inter font-extrabold text-42 leading-50 tracking-tightest uppercase text-black max-w-xl mx-auto mb-4">
            HAVING A GREAT IDEA ISN'T ENOUGH ANYMORE.
          </h2>
          
          <div className="max-w-lg mx-auto mb-16">
            <p className="font-inter font-normal text-base leading-6 text-[#333333] tracking-medium">
              Today's users judge fast and scroll faster. We create
              <br />
              designs that stop them in their tracks through...
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div key={feature.id} className="bg-[#FAFAFA] rounded-12 border border-dashed border-[#CCCCCC] p-5">
              <div className="mb-6 ml-1">
                {feature.icon}
              </div>
              
              <h3 className="font-inter font-extrabold text-lg leading-[27px] uppercase text-[#07111D] mb-4">
                {feature.title}
              </h3>
              
              <p className="font-inter font-normal text-15 leading-22 tracking-slight text-black opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FirstImpression
