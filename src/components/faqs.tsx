import React, { useEffect, useRef, useState } from 'react'

const Faqs = () => {

  const [activeTab, setActiveTab] = useState<'tab1' | 'tab2' | 'tab3' | 'tab4' | 'tab5' | 'tab6' | 'tab7' | 'tab8' | null>(null);
  const [tab1Height, setTab1Height] = useState<number>(0);
  const [tab2Height, setTab2Height] = useState<number>(0);
  const [tab3Height, setTab3Height] = useState<number>(0);
  const [tab4Height, setTab4Height] = useState<number>(0);
  const [tab5Height, setTab5Height] = useState<number>(0);
  const [tab6Height, setTab6Height] = useState<number>(0);
  const [tab7Height, setTab7Height] = useState<number>(0);
  const [tab8Height, setTab8Height] = useState<number>(0);

  const tab1ContentRef = useRef<HTMLDivElement>(null);
  const tab2ContentRef = useRef<HTMLDivElement>(null);
  const tab3ContentRef = useRef<HTMLDivElement>(null);
  const tab4ContentRef = useRef<HTMLDivElement>(null);
  const tab5ContentRef = useRef<HTMLDivElement>(null);
  const tab6ContentRef = useRef<HTMLDivElement>(null);
  const tab7ContentRef = useRef<HTMLDivElement>(null);
  const tab8ContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tab1ContentRef.current) {
      setTab1Height(tab1ContentRef.current.scrollHeight);
    }
    if (tab2ContentRef.current) {
      setTab2Height(tab2ContentRef.current.scrollHeight);
    }
    if (tab3ContentRef.current) {
      setTab3Height(tab3ContentRef.current.scrollHeight);
    }
    if (tab4ContentRef.current) {
      setTab4Height(tab4ContentRef.current.scrollHeight);
    }
    if (tab5ContentRef.current) {
      setTab5Height(tab5ContentRef.current.scrollHeight);
    }
    if (tab6ContentRef.current) {
      setTab6Height(tab6ContentRef.current.scrollHeight);
    }
    if (tab7ContentRef.current) {
      setTab7Height(tab7ContentRef.current.scrollHeight);
    }
    if (tab8ContentRef.current) {
      setTab8Height(tab8ContentRef.current.scrollHeight);
    }
  }, []);

  const toggleTab = (tab: 'tab1' | 'tab2' | 'tab3' | 'tab4' | 'tab5' | 'tab6' | 'tab7' | 'tab8') => {
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
              onClick={() => toggleTab('tab1')}
            >
              <h3 className="font-extrabold text-lg uppercase">What happens if my project scope changes mid-way?</h3>
              <div className="w-11 h-11 flex items-center justify-center">
                <span className={`text-3xl font-light text-orange-600 transition-transform duration-300 ${activeTab === 'tab1' ? 'transform rotate-45' : ''}`}>+</span>
              </div>
            </div>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100"
              style={{
                maxHeight: activeTab === 'tab1' ? `${tab1Height}px` : '0px',
                opacity: activeTab === 'tab1' ? 1 : 0,
                borderTopWidth: activeTab === 'tab1' ? '1px' : '0px'
              }}
            >
              <div ref={tab1ContentRef} className="p-6">
                {/* Content for tab1 would go here */}
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
              onClick={() => toggleTab('tab2')}
            >
              <h3 className="font-extrabold text-lg uppercase">Can you collaborate with our in-house team?</h3>
              <div className="w-11 h-11 flex items-center justify-center">
                <span className={`text-3xl font-light text-orange-600 transition-transform duration-300 ${activeTab === 'tab2' ? 'transform rotate-45' : ''}`}>+</span>
              </div>
            </div>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100"
              style={{
                maxHeight: activeTab === 'tab2' ? `${tab2Height}px` : '0px',
                opacity: activeTab === 'tab2' ? 1 : 0,
                borderTopWidth: activeTab === 'tab2' ? '1px' : '0px'
              }}
            >
              <div ref={tab2ContentRef} className="p-6">
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
              onClick={() => toggleTab('tab3')}
            >
              <h3 className="font-extrabold text-lg uppercase">why not hire designers full-time?</h3>
              <div className="w-11 h-11 flex items-center justify-center">
                <span className={`text-3xl font-light text-orange-600 transition-transform duration-300 ${activeTab === 'tab3' ? 'transform rotate-45' : ''}`}>+</span>
              </div>
            </div>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100"
              style={{
                maxHeight: activeTab === 'tab3' ? `${tab3Height}px` : '0px',
                opacity: activeTab === 'tab3' ? 1 : 0,
                borderTopWidth: activeTab === 'tab3' ? '1px' : '0px'
              }}
            >
              <div ref={tab3ContentRef} className="p-6">
                {/* Content for tab3 would go here */}
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
              onClick={() => toggleTab('tab4')}
            >
              <h3 className="font-extrabold text-lg uppercase">designme vs other contractors</h3>
              <div className="w-11 h-11 flex items-center justify-center">
                <span className={`text-3xl font-light text-orange-600 transition-transform duration-300 ${activeTab === 'tab4' ? 'transform rotate-45' : ''}`}>+</span>
              </div>
            </div>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100"
              style={{
                maxHeight: activeTab === 'tab4' ? `${tab4Height}px` : '0px',
                opacity: activeTab === 'tab4' ? 1 : 0,
                borderTopWidth: activeTab === 'tab4' ? '1px' : '0px'
              }}
            >
              <div ref={tab4ContentRef} className="p-6">
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
              onClick={() => toggleTab('tab5')}
            >
              <h3 className="font-extrabold text-lg uppercase">how do you charge?</h3>
              <div className="w-11 h-11 flex items-center justify-center">
                <span className={`text-3xl font-light text-orange-600 transition-transform duration-300 ${activeTab === 'tab5' ? 'transform rotate-45' : ''}`}>+</span>
              </div>
            </div>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100"
              style={{
                maxHeight: activeTab === 'tab5' ? `${tab5Height}px` : '0px',
                opacity: activeTab === 'tab5' ? 1 : 0,
                borderTopWidth: activeTab === 'tab5' ? '1px' : '0px'
              }}
            >
              <div ref={tab5ContentRef} className="p-6">
                {/* Content for tab5 would go here */}
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
              onClick={() => toggleTab('tab6')}
            >
              <h3 className="font-extrabold text-lg uppercase">Do you handle content creation, or should we provide copy and visuals?</h3>
              <div className="w-11 h-11 flex items-center justify-center">
                <span className={`text-3xl font-light text-orange-600 transition-transform duration-300 ${activeTab === 'tab6' ? 'transform rotate-45' : ''}`}>+</span>
              </div>
            </div>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100"
              style={{
                maxHeight: activeTab === 'tab6' ? `${tab6Height}px` : '0px',
                opacity: activeTab === 'tab6' ? 1 : 0,
                borderTopWidth: activeTab === 'tab6' ? '1px' : '0px'
              }}
            >
              <div ref={tab6ContentRef} className="p-6">
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
              onClick={() => toggleTab('tab7')}
            >
              <h3 className="font-extrabold text-lg uppercase">What if I only need a small design task?</h3>
              <div className="w-11 h-11 flex items-center justify-center">
                <span className={`text-3xl font-light text-orange-600 transition-transform duration-300 ${activeTab === 'tab7' ? 'transform rotate-45' : ''}`}>+</span>
              </div>
            </div>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100"
              style={{
                maxHeight: activeTab === 'tab7' ? `${tab7Height}px` : '0px',
                opacity: activeTab === 'tab7' ? 1 : 0,
                borderTopWidth: activeTab === 'tab7' ? '1px' : '0px'
              }}
            >
              <div ref={tab7ContentRef} className="p-6">
                {/* Content for tab7 would go here */}
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
              onClick={() => toggleTab('tab8')}
            >
              <h3 className="font-extrabold text-lg uppercase">How soon can you start?</h3>
              <div className="w-11 h-11 flex items-center justify-center">
                <span className={`text-3xl font-light text-orange-600 transition-transform duration-300 ${activeTab === 'tab8' ? 'transform rotate-45' : ''}`}>+</span>
              </div>
            </div>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100"
              style={{
                maxHeight: activeTab === 'tab8' ? `${tab8Height}px` : '0px',
                opacity: activeTab === 'tab8' ? 1 : 0,
                borderTopWidth: activeTab === 'tab8' ? '1px' : '0px'
              }}
            >
              <div ref={tab8ContentRef} className="p-6">
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
