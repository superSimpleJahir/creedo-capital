import React from 'react'

function Project() {
  return (
    <section className='container my-20'>
      <div className="globalWidth">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9 project max-h-[434px] p-8 rounded-3xl ">
            <div className="flex flex-col gap-3 h-full justify-end">
              <h3 className='text-white text-3xl font-bold line-clamp-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h3>

              <p className='navLink text-white  line-clamp-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="col-span-3">
            <div className="project1">
              <img className='w-[150px] rounded-2xl ' src="./image/project1.png" alt="" />
              <div className="">
                <h3 className='navLink dark:text-navText font-bold line-clamp-1'>Title</h3>
                <p className='navLink dark:text-navText line-clamp-2'>subtitle subtitle subtitle subtitle</p>
              </div>
            </div>
            <div className="project1 mt-6">
              <img className='w-[150px] rounded-2xl ' src="./image/project1.png" alt="" />
              <div className="">
                <h3 className='navLink dark:text-navText font-bold line-clamp-1'>Title</h3>
                <p className='navLink dark:text-navText line-clamp-2'>subtitle subtitle subtitle subtitle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project