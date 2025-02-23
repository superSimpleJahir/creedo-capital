import Link from 'next/link'
import React from 'react'
import { LogoDarkIcon, LogoLightIcon } from '../common/SvgIcon'

function Footer({ darkMode }) {
  return (
    <footer className='container mt-10 footer dark:footerDark'>
      <div className="globalWidth">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link href={"#"}>{darkMode ? <LogoDarkIcon /> : <LogoLightIcon />}</Link>
          </div>
          <ul className='flex gap-6 items-center'>
            <li>
              <Link href={"#"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.7744 0.236328H7.22563C3.23502 0.236328 0 3.48633 0 7.49541V24.9772C0 28.9863 3.23502 32.2363 7.22563 32.2363H24.7744C28.765 32.2363 32 28.9863 32 24.9772V7.49541C32 3.48633 28.765 0.236328 24.7744 0.236328ZM25.406 6.63633H22.1348L16.7435 12.7715L12.0831 6.63633H5.33333L13.3981 17.1376L5.75446 25.8363H9.02745L14.9277 19.1249L20.0835 25.8363H26.6667L18.2596 14.7697L25.406 6.63633ZM20.9865 23.8868H22.7996L11.0987 8.48392H9.15334L20.9865 23.8868Z" fill="#363636" />
                </svg>
              </Link>
            </li>

            <li>
              <Link href={"#"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                  <path d="M6.90196 0.236328H25.098C28.9099 0.236328 32 3.32644 32 7.13829V25.3344C32 29.1462 28.9099 32.2363 25.098 32.2363H22.0813V19.8457H26.2413L26.864 15.0163H22.0813V11.9323C22.0813 10.535 22.4693 9.58166 24.4747 9.58166L27.032 9.58033V5.26033C26.5893 5.20166 25.072 5.06966 23.3053 5.06966C19.6173 5.06966 17.0933 7.32033 17.0933 11.4537V15.015H12.9227V19.8443H17.0933V32.2363H6.90196C3.09011 32.2363 0 29.1462 0 25.3344V7.13829C0 3.32644 3.09011 0.236328 6.90196 0.236328Z" fill="#363636" />
                </svg>
              </Link>
            </li>

            <li>
              <Link href={"#"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                  <path d="M25.3333 0.236328H6.66667C2.98533 0.236328 0 3.22166 0 6.903V25.5697C0 29.251 2.98533 32.2363 6.66667 32.2363H25.3333C29.016 32.2363 32 29.251 32 25.5697V6.903C32 3.22166 29.016 0.236328 25.3333 0.236328ZM10.6667 25.5697H6.66667V10.903H10.6667V25.5697ZM8.66667 9.21233C7.37867 9.21233 6.33333 8.15899 6.33333 6.86033C6.33333 5.56166 7.37867 4.50833 8.66667 4.50833C9.95467 4.50833 11 5.56166 11 6.86033C11 8.15899 9.956 9.21233 8.66667 9.21233ZM26.6667 25.5697H22.6667V18.0977C22.6667 13.607 17.3333 13.947 17.3333 18.0977V25.5697H13.3333V10.903H17.3333V13.2563C19.1947 9.80833 26.6667 9.55366 26.6667 16.5577V25.5697Z" fill="#363636" />
                </svg>
              </Link>
            </li>

            <li>
              <Link href={"#"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.157 11.1435C19.1064 10.743 20.4009 10.2334 21.0338 10.0113C22.8934 9.35869 23.6949 9.5196 23.6949 10.5458C23.6949 11.4788 22.0452 21.9117 21.6734 23.3305C21.4459 24.1983 21.0279 24.6133 20.3817 24.6133C19.902 24.6133 19.3913 24.3244 16.7946 22.5836C15.1292 21.4672 13.661 20.3919 13.5317 20.1938C13.3342 19.8909 13.326 19.7787 13.4806 19.4887C13.5818 19.299 14.918 17.9318 16.4501 16.4504C19.1324 13.8571 19.6285 13.2375 18.9122 13.3757C18.7341 13.4101 16.8477 14.6039 14.7197 16.0286L10.8509 18.619L9.90103 18.6092C8.97182 18.5995 6.87794 18.0541 5.95764 17.5821C5.46111 17.3274 5.48168 16.8906 6.00871 16.497C6.43965 16.1754 11.1129 14.116 18.157 11.1435ZM8 0.236328C3.58172 0.236328 0 3.81805 0 8.23633V24.2363C0 28.6546 3.58172 32.2363 8 32.2363H24C28.4183 32.2363 32 28.6546 32 24.2363V8.23633C32 3.81805 28.4183 0.236328 24 0.236328H8Z" fill="#363636" />
                </svg>
              </Link>
            </li>

            <li>
              <Link href={"#"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 0.236328C3.58172 0.236328 0 3.81805 0 8.23633V24.2363C0 28.6546 3.58172 32.2363 8 32.2363H24C28.4183 32.2363 32 28.6546 32 24.2363V8.23633C32 3.81805 28.4183 0.236328 24 0.236328H8ZM12.1897 6.27285C10.371 6.34964 9.25014 6.67234 8.26482 7.40276C7.27626 8.13563 6.61233 9.14402 6.2971 10.3915C6.05264 11.3588 6.00004 12.3932 6 16.2332C5.99996 20.677 6.06873 21.5613 6.50572 22.7359C7.01452 24.1033 8.13253 25.2217 9.49948 25.7307C10.6672 26.1654 11.567 26.2363 15.92 26.2363C20.4432 26.2363 21.4271 26.159 22.5448 25.7157C23.924 25.1686 24.9897 24.0919 25.4943 22.7359C25.9313 21.5613 26 20.677 26 16.2332C26 11.7713 25.9232 10.8098 25.4768 9.67844C25.0522 8.60243 24.2488 7.65407 23.3041 7.1138C22.3383 6.56149 21.4243 6.34732 19.7003 6.26945C18.6837 6.22355 13.2999 6.22599 12.1897 6.27285ZM12.4402 8.07413C11.9894 8.09177 11.4237 8.13511 11.1831 8.17045C10.109 8.32799 9.27798 8.75981 8.7287 9.44566C8.45872 9.78281 8.3057 10.0674 8.15901 10.5054C7.85043 11.4268 7.82027 11.9416 7.82115 16.2732C7.82199 20.4224 7.84831 20.9333 8.10537 21.7955C8.45964 22.9834 9.25202 23.7761 10.4396 24.1305C11.2935 24.3853 11.8243 24.4123 16 24.4134C20.3059 24.4145 20.8055 24.3852 21.7219 24.0781C23.0375 23.6372 23.8268 22.616 24.0596 21.054C24.1512 20.4391 24.2002 18.7595 24.2002 16.2332C24.2002 13.6919 24.1512 12.0319 24.0573 11.3911C23.9421 10.6049 23.6497 9.89285 23.2462 9.41649C22.8071 8.89807 22.3606 8.60087 21.6805 8.37449C21.1024 8.18205 20.5968 8.11702 19.3174 8.07056C18.0506 8.02455 13.6469 8.02683 12.4402 8.07413ZM21.1257 9.71362C20.536 9.82918 20.1449 10.2986 20.1449 10.8909C20.1449 11.9963 21.508 12.5142 22.2369 11.6858C22.5199 11.3642 22.6044 10.904 22.4601 10.4695C22.2889 9.95404 21.6746 9.60605 21.1257 9.71362ZM15.5933 11.1162C13.8054 11.233 12.1712 12.359 11.3614 14.0322C10.7129 15.372 10.7129 17.0943 11.3614 18.4341C12.0974 19.9546 13.4898 21.0099 15.1352 21.294C15.5904 21.3726 16.4096 21.3726 16.8648 21.294C18.9919 20.9268 20.6887 19.2439 21.0599 17.1334C21.1423 16.665 21.1423 15.8013 21.0599 15.3329C20.7845 13.7674 19.7415 12.3699 18.308 11.646C17.4577 11.2166 16.6048 11.0502 15.5933 11.1162ZM15.4103 12.9561C14.2863 13.1435 13.2485 14.032 12.8624 15.1373C12.5434 16.0509 12.6388 17.0389 13.1306 17.9132C13.3585 18.3184 13.9154 18.8755 14.3205 19.1035C15.02 19.4972 15.7862 19.6374 16.5561 19.5124C17.7141 19.3244 18.7453 18.4523 19.1376 17.329C19.382 16.6291 19.382 15.8372 19.1376 15.1373C18.8108 14.2017 18.0308 13.4214 17.0954 13.0945C16.5953 12.9197 15.9476 12.8665 15.4103 12.9561Z" fill="#363636" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <ul className='max-w-[550px] mx-auto flex gap-12 mt-6'>
          <li>
            <Link href={"#"} className='navLink'>About Us</Link>
          </li>

          <li>
            <Link href={"#"} className='navLink'>Terms of Use</Link>
          </li>

          <li>
            <Link href={"#"} className='navLink'>Privacy Policy</Link>
          </li>

          <li>
            <Link href={"#"} className='navLink'>AML Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer