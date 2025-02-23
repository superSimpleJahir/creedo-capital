import React from 'react'
import { OriginalPspMiddleDarkIcon, OriginalPspMiddleIcon } from '../common/SvgIcon'
// import originalPspLeft from '@/public/image/originalPspLeft.png';

function OriginalPsp({ darkMode }) {
  return (
    <section className='container my-20 relative'>
      <div className="absolute top-0 left-0 max-w-[453px] z-[1]">
        <img src="/image/originalPspLeft.png" alt="" />
      </div>
      <div className="globalWidth h-[876px] originalPsp dark:originalPspDark rounded-[48px]">
        <div className="bg-white dark:bg-[#201925] rounded-[48px] py-16 relative">
          <div className="absolute bottom-[-48px] left-1/2 transform -translate-x-1/2">
            {darkMode ? <OriginalPspMiddleDarkIcon /> : <OriginalPspMiddleIcon />}
          </div>
          <h1 className='text-center GlobalReachTitle text-[48px] font-bold'>
            You’ve finally found your original PSP
          </h1>
          <p className='max-w-[688px] text-center mx-auto text-lg text-navText dark:text-white mt-2'>
            For years, Creedo.Capital has powered the payment infrastructure behind countless businesses worldwide. Even if you weren’t aware, our technology has likely been the invisible force driving your transactions—trusted by intermediaries, white-label providers, and service platforms.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 max-w-[500px] z-[1]">
        <img src="/image/originalPspRight.png" alt="" />
      </div>
    </section>
  )
}

export default OriginalPsp