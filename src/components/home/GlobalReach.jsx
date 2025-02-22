import React from 'react'

function GlobalReach() {
  return (
    <section className='container GlobalReach dark:GlobalReachDark rounded-[48px] pt-[115px] pb-[88px]'>
      <div className="flex flex-col gap-10 globalWidth">
        <div className="flex flex-col gap-3">
          <h1 className='GlobalReachTitle max-w-[440px]  md:text-[140px] text-[70px] leading-[90%] font-bold'>
            Global Reach
          </h1>
          <p className='navLink max-w-[440px]'>
            We offer seamless payment processing across borders, with in-depth knowledge of specific markets to help you navigate local regulations and optimize your operations.
          </p>
        </div>

        <div className="max-w-[660px] flex flex-col gap-4">
          <h3 className='GlobalReachTitle text-[32px] font-bold'>Asia</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
            <div className="flex flex-col gap-2">
              <p className='navLink'> Population</p>
              <h4 className='GlobalReachSubtitle'>
                <span className='text-lg'>over</span> 4,7B
              </h4>
            </div>
            <div className="flex flex-col gap-2">
              <p className='navLink'>Internet penetration</p>
              <h4 className='GlobalReachSubtitle'>
                <span className='text-lg'>over</span> 67%
              </h4>
            </div>
            <div className="flex flex-col gap-2">
              <p className='navLink'>E-commerce market volume</p>
              <h4 className='GlobalReachSubtitle'>
                <span className='text-lg'>over</span> $416T
              </h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 max-w-[610px]">
          <p className='GlobalReachSubText'>
            <b>We pave the way to new opportunities. </b>
            By dominating the most challenging goes.
          </p>
          <button className='GlobalReachButton self-start'>
            Request a Demo
          </button>
        </div>

      </div>
    </section>
  )
}

export default GlobalReach