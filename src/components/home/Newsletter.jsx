import React from 'react'

function Newsletter() {
  return (
    <section className='container my-20'>
      <div className="globalWidth">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-5">
            <h1 className='text-[72px] font-bold leading-[100%] dark:text-white'>
              <span className='GlobalReachTitle'>Stay Ahead</span> in the World of Payments
            </h1>
          </div>

          <div className="col-span-7 newsletterCard dark:newsletterCardDark">
            <h2 className='text-[44px] font-bold text-navText dark:text-white'>
              Newsletter <br /> Subscription
            </h2>

            <form className="flex gap-3 w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <label htmlFor="Email" className='inputLabel'>Email</label>
                <input className='input' type="email" name="" id="Email" placeholder='Enter your email' />
              </div>

              <button className='GlobalReachButton shrink-0'>
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter