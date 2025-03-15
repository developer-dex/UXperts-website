import React, { useState, useRef, useEffect } from 'react'

const EngagementThatDelivers = () => {
  const [activeTab, setActiveTab] = useState<'retainers' | 'projects' | null>(null);
  const [retainersHeight, setRetainersHeight] = useState<number>(0);
  const [projectsHeight, setProjectsHeight] = useState<number>(0);

  const retainersContentRef = useRef<HTMLDivElement>(null);
  const projectsContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (retainersContentRef.current) {
      setRetainersHeight(retainersContentRef.current.scrollHeight);
    }
    if (projectsContentRef.current) {
      setProjectsHeight(projectsContentRef.current.scrollHeight);
    }
  }, []);

  const toggleTab = (tab: 'retainers' | 'projects') => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <>
      <div className="w-full py-24 bg-white relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Heading */}
            <div>
              <p className="text-11 text-zinc-500 uppercase font-jetbrains mb-4">
                Engagement That Delivers
              </p>
              <h2 className="text-42 font-extrabold font-inter uppercase leading-50 tracking-tightest max-w-lg">
                NO MORE BUDGET HEADACHES.WE KEEP IT SIMPLE AND FLEXIBLE.
              </h2>
            </div>

            {/* Right side - Options */}
            <div className="flex flex-col justify-end">
              <div className="mb-6">
                <p className="text-xl font-semibold">
                  Choose between <span className="underline">monthly product retainers</span>
                </p>
                <p className="text-xl font-semibold mt-4">
                  and <span className="underline">one-time fixed projects.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Content layout with how we work section on right side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {/* Left side - empty */}
            <div className="hidden lg:block"></div>

            {/* Right side - How we work section */}
            <div className='max-w-[570px]'>
              <p className="text-11 text-zinc-500 uppercase font-jetbrains mb-8">
                how we work
              </p>

              {/* Accordion */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden">
                {/* Retainers tab */}
                <div className="border-b border-gray-100">
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() => toggleTab('retainers')}
                  >
                    <h3 className="font-extrabold text-lg uppercase">Design + Dev Retainers</h3>
                    <div className="w-11 h-11 flex items-center justify-center">
                      <span className={`text-3xl font-light text-orange-600 transition-transform duration-300 ${activeTab === 'retainers' ? 'transform rotate-45' : ''}`}>+</span>
                    </div>
                  </div>

                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100"
                    style={{
                      maxHeight: activeTab === 'retainers' ? `${retainersHeight}px` : '0px',
                      opacity: activeTab === 'retainers' ? 1 : 0,
                      borderTopWidth: activeTab === 'retainers' ? '1px' : '0px'
                    }}
                  >
                    <div ref={retainersContentRef} className="p-6">
                      {/* Content for retainers tab would go here */}
                      <p className="text-sm text-gray-700 mb-8">
                        Monthly retainer packages starting at $X,XXX per month.
                      </p>

                      <div className="space-y-6">
                        {/* Bullet points would go here */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projects tab */}
                <div>
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() => toggleTab('projects')}
                  >
                    <h3 className="font-extrabold text-lg uppercase">One-time projects</h3>
                    <div className="w-11 h-11 flex items-center justify-center">
                      <span className={`text-3xl font-light text-orange-600 transition-transform duration-300 ${activeTab === 'projects' ? 'transform rotate-45' : ''}`}>+</span>
                    </div>
                  </div>

                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100"
                    style={{
                      maxHeight: activeTab === 'projects' ? `${projectsHeight}px` : '0px',
                      opacity: activeTab === 'projects' ? 1 : 0,
                      borderTopWidth: activeTab === 'projects' ? '1px' : '0px'
                    }}
                  >
                    <div ref={projectsContentRef} className="p-6">
                      <p className="text-sm text-gray-700 mb-8">
                        Crystal-clear scope, timeline, and deliverables. Starting at $15k.
                      </p>

                      <div className="space-y-6">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <p className="text-15 leading-5">50% upfront, 25% on design approval, 25% on delivery</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <p className="text-15 leading-5">Clearly defined scope with a detailed SOW document</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <p className="text-15 leading-5">Bulletproof milestone-based delivery (4-12 weeks)</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <p className="text-15 leading-5">A-Z project management by DesignMe</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <p className="text-15 leading-5">Dedicated design (and/or development) team</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <p className="text-15 leading-5">Industry-specific expertise (AI, SaaS, Tech)</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <a href="#" className="inline-flex items-center group relative">
                  <span className="text-lg font-medium">Start a new project</span>
                  <div className="ml-2 w-6 h-6 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13L13 1M13 1H1M13 1V13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EngagementThatDelivers
