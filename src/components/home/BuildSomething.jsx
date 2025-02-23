import React from 'react'
import { ConsultationIcon, DownArrowIcon, GoLiveIcon, IntegrationIcon, MerchantIcon, ReachOutIcon } from '../common/SvgIcon'

function BuildSomething() {
  return (
    <section className='container'>
      <div className="globalWidth">
        <h1 className='text-center text-navText dark:text-white text-5xl font-bold'>
          Let’s Build Something Great <span className='GlobalReachTitle'>Together</span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="buildSomethingCard dark:buildSomethingCardDark">
            <div className="flex items-center justify-between gap-4">
              <div>
                <ReachOutIcon />
              </div>
              <h1 className="number">
                1
              </h1>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="navLink text-lg font-bold">
                Reach Out
              </h3>
              <p className="navLink">
                Fill out our contact form or reach us via email or Telegram.
              </p>
            </div>
          </div>

          <div className="buildSomethingCard dark:buildSomethingCardDark">
            <div className="flex items-center justify-between gap-4">
              <div>
                <ConsultationIcon />
              </div>
              <h1 className="number">
                2
              </h1>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="navLink text-lg ">
                <span className='font-bold'>Consultation</span> (1-2 Days)
              </h3>
              <p className="navLink">
                Speak with our specialists to determine the best solution for your business.
              </p>
            </div>
          </div>

          <div className="buildSomethingCard dark:buildSomethingCardDark">
            <div className="flex items-center justify-between gap-4">
              <div>
                <MerchantIcon />
              </div>
              <h1 className="number">
                3
              </h1>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="navLink text-lg font-bold">
                <span className='font-bold'>Merchant Portal Setup </span> (1 Day)
              </h3>
              <p className="navLink">
                Get access to your account and start configuring your payment system.
              </p>
            </div>
          </div>

          <div className="buildSomethingCard dark:buildSomethingCardDark">
            <div className="flex items-center justify-between gap-4">
              <div>
                <IntegrationIcon />
              </div>
              <h1 className="number">
                4
              </h1>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="navLink text-lg font-bold">
                <span className='font-bold'>Integration </span> (Up to 1 Week)
              </h3>
              <p className="navLink">
                Use our unified API with full technical support for seamless integration.
              </p>
            </div>
          </div>

          <div className="buildSomethingCard dark:buildSomethingCardDark">
            <div className="flex items-center justify-between gap-4">
              <div>
                <GoLiveIcon />
              </div>
              <h1 className="number">
                5
              </h1>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="navLink text-lg font-bold">
                <span className='font-bold'>Go Live</span>
              </h3>
              <p className="navLink">
                Launch your payment system and enjoy uninterrupted service.
              </p>
            </div>
          </div>

          <div className="buildSomethingCardGradient">
            <div className="flex items-center justify-between gap-4">
              <h1 className="text-white text-3xl font-bold">
                Request a Demo
              </h1>
            </div>

            <div className="">
              <DownArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildSomething