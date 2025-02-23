import React from 'react'
import { CostIcon, UnmatchedIcon } from '../common/SvgIcon'

function WorkWithUs() {
  return (
    <section className='container my-20'>
      <div className="globalWidth">
        <div className="grid grid-cols-2 gap-14">
          <div className="flex flex-col gap-[151px]">
            <h3 className='text-3xl font-bold text-navText dark:text-white '>
              Why work with us
            </h3>
            <h1 className='text-[50px] font-bold text-navText dark:text-white max-w-[500px] leading-[120%]'>
              The Engine Behind Your Success — <span className='GlobalReachTitle'>Now in Plain Sight</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col justify-between WorkWithUsCard dark:WorkWithUsCardDark">
              <div className="">
                <UnmatchedIcon />
              </div>
              <div className="navLink text-xl font-bold">
                <h3>Unmatched Transparency</h3>
                <p className='navLink text-sm mt-2'>
                  From pricing to performance, enjoy unmatched clarity and control over your transactions
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between WorkWithUsCard dark:WorkWithUsCardDark">
              <div className="">
                <CostIcon />
              </div>
              <div className="navLink text-xl font-bold">
                <h3>Cost <br /> Efficiency</h3>
                <p className='navLink text-sm mt-2'>
                  Cut out additional layers of fees and unlock better rates tailored to your business model
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkWithUs