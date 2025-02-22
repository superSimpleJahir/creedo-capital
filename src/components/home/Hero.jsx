import React from 'react'
import { ProvenPerformanceIcon, SeamlessIntegrationIcon, ZeroComplicationsIcon } from '../common/SvgIcon'

function Hero() {
  return (
    <section className='hero dark:heroDark container dark:bg-gray-900 rounded-b-[40px]'>
      <div className="globalWidth pt-[90px] pb-[122px]">
        <h1 className='heroTitle '>
          Go beyond <br />
          <span >your experience</span>
        </h1>

        <div className="max-w-[760px] flex flex-col gap-3 ml-auto py-11">
          <h4 className='subtitle'>
            Tailored Payment Solutions for Modern Business
          </h4>
          <p className='description'>
            At Creedo.Capital, we redefine payment solutions for businesses worldwide. Our platform offers unmatched flexibility, transparency, and innovation, ensuring your business stays ahead in a fast-paced digital economy. From small startups to enterprise giants, we provide the tools you need to succeed globally.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col gap-5 lg:gap-auto justify-between sm:items-center p-6 rounded-[32px] sm:rounded-[65px] heroButtonLight dark:heroButtonDark">
          <div className="flex sm:flex-row flex-col sm:items-center gap-6 lg:gap-7 xl:gap-[88px]">
            <div className="flex items-center gap-[18px]">
              <div className="">
                <SeamlessIntegrationIcon />
              </div>
              <p className='description font-bold'>
                Seamless integration
              </p>
            </div>

            <div className="flex items-center gap-[18px]">
              <div className="">
                <ProvenPerformanceIcon />
              </div>
              <p className='description font-bold'>
                Seamless integration
              </p>
            </div>

            <div className="flex items-center gap-[18px]">
              <div className="">
                <ZeroComplicationsIcon />
              </div>
              <p className='description font-bold'>
                Seamless integration
              </p>
            </div>
          </div>
          <div className="shrink-0 self-center sm:self-auto">
            <button className='primaryBtn px-8 sm:px-12 py-3.5 text-2xl font-bold'>Get Started Today</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero