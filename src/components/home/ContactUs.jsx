import Link from 'next/link'
import React from 'react'
import { EmailIcon, RoundedListIcon, TelegramIcon } from '../common/SvgIcon'

function ContactUs() {
  return (
    <section className='container mt-20'>
      <div className="globalWidth contactUs">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5 py-10 ps-16  flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h4 className='contactUsSubtitle'>Unlock Your Growth Potential</h4>
              <h1 className='GlobalReachTitle text-[56px] font-bold leading-[120%]'>Your Vision, Our Expertise</h1>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className='contactUsSubtitle'>Contact us to get more <br /> information about</h4>
              <ul className='flex flex-col gap-3'>
                <li className='navLink flex items-center gap-2'><RoundedListIcon /> Customization options</li>
                <li className='navLink flex items-center gap-2'><RoundedListIcon /> Transparent Fee Structures</li>
                <li className='navLink flex items-center gap-2'><RoundedListIcon /> Flexible Payment Options</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className='contactUsSubtitle'>Prefer direct contact?</h4>
              <ul className='flex flex-col gap-3'>
                <li>
                  <Link href={"#"} className='flex items-center gap-2 underline'>
                    <span><TelegramIcon /></span>
                    @creedo.capital
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className='flex items-center gap-2 underline'>
                    <span><EmailIcon /></span>
                    sales@creedo.capital
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h4 className='GlobalReachTitle text-[21px] font-bold '>
                Grow smarter. <br />Partner with Creedo.Capital.
              </h4>
            </div>
          </div>
          <div className="col-span-7 bg-white py-10 ps-10 pr-16 rounded-[48]">
            <div className="flex flex-col gap-2">
              <h4 className='GlobalReachTitle text-2xl font-bold'>Fill in your details</h4>
              <p className='navLink text-xl '>and we’ll share insights, demos, and answers </p>
            </div>
            <form className='flex flex-col gap-6 mt-6'>
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className='inputLabel'>Name</label>
                  <input className='input' type="text" name="" id="name" placeholder='Enter your name' />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="Telegram" className='inputLabel'>Telegram</label>
                  <input className='input' type="text" name="" id="Telegram" placeholder='Enter your telegram' />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="Email" className='inputLabel'>Email</label>
                <input className='input' type="email" name="" id="Email" placeholder='Enter your email' />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="Website" className='inputLabel'>Website</label>
                <input className='input' type="text" name="" id="Website" placeholder='Enter your website' />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className='inputLabel'>Message <span>(optional)</span></label>
                <textarea className='input' rows={8} name="" id="message" placeholder='Enter your message' />
              </div>

              <button className='GlobalReachButton self-start'>
                Request a Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs