import React, { useEffect, useRef, useState } from 'react'

const Faqs = () => {

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
    <section className="w-full py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 flex justify-between">
        <div className="mb-12">
          <p className="font-jetbrains text-xs uppercase text-gray-500 mb-2">
            FAQS
          </p>
          <h2 className="font-inter font-extrabold text-42 tracking-tight mb-6 max-w-[376px]">
            YOUR QUESTIONS, <span className=''>ANSWERED</span>.
          </h2>
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
        <div className="border border-gray-100 rounded-2xl overflow-hidden">
          <div className="border-b border-gray-100">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleTab('retainers')}
            >
              <h3 className="font-extrabold text-lg uppercase">What happens if my project scope changes mid-way?</h3>
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
          <div className="border-b border-gray-100">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleTab('projects')}
            >
              <h3 className="font-extrabold text-lg uppercase">Can you collaborate with our in-house team?</h3>
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
          <div className="border-b border-gray-100">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleTab('retainers')}
            >
              <h3 className="font-extrabold text-lg uppercase">why not hire designers full-time?</h3>
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
          <div className="border-b border-gray-100">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleTab('projects')}
            >
              <h3 className="font-extrabold text-lg uppercase">designme vs other contractors</h3>
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
          <div className="border-b border-gray-100">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleTab('retainers')}
            >
              <h3 className="font-extrabold text-lg uppercase">how do you charge?</h3>
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
          <div className="border-b border-gray-100">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleTab('projects')}
            >
              <h3 className="font-extrabold text-lg uppercase">Do you handle content creation, or should we provide copy and visuals?</h3>
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
          <div className="border-b border-gray-100">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleTab('retainers')}
            >
              <h3 className="font-extrabold text-lg uppercase">What if I only need a small design task?</h3>
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
          <div>
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleTab('projects')}
            >
              <h3 className="font-extrabold text-lg uppercase">How soon can you start?</h3>
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
      </div>
    </section>
  )
}

export default Faqs
