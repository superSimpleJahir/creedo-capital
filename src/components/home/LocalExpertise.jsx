import React from 'react'

function LocalExpertise() {
  return (
    <section className='container my-20'>
      <div className="globalWidth">
        <h1 className='GlobalReachTitle text-center text-[120px] font-bold'>Local Expertise</h1>

        <div className="grid grid-cols-2 gap-10">
          <div className="">
            <img src="./image/Bangladesh.png" alt="" />
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <h4 className='navLink text-2xl font-bold'>
                Most popular payment solution
              </h4>
              <div className="flex items-center gap-6">
                <img src="./image/bkash.png" alt="" />
                <img src="./image/nagad.png" alt="" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 ">
              <h4 className='navLink text-2xl font-bold'>
                Overview
              </h4>
              <p className='navLink'>
                From pricing to performance, enjoy unmatched clarity and control over your transactions
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className='navLink text-2xl font-bold'>
                Key Services
              </h4>
              <div className="flex flex-col gap-1.5 ">
                <h5 className='navLink text-lg font-bold'>Mobile Financial Services (MFS)</h5>
                <p className='navLink'>
                  Tools to enable cross-border transactions for Bangladeshi exporters.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 ">
                <h5 className='navLink text-lg font-bold'>Localized E-commerce Solutions</h5>
                <p className='navLink'>
                  Tools to enable cross-border transactions for Bangladeshi exporters.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <h4 className='navLink text-2xl font-bold'>Why Bangladesh Matters</h4>
              <ul className='list-disc ml-5'>
                <li className='navLink'>Over 60% of transactions are mobile-based.</li>
                <li className='navLink'>Government-backed initiatives to digitize the economy.</li>
                <li className='navLink'>A young, tech-savvy population driving digital adoption.</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <button className='primaryBtn px-12 text-2xl font-bold'>
                Explore Our Global Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocalExpertise