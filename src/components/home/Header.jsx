import Link from "next/link"
import { LogoDarkIcon, LogoLightIcon, MoonIcon, SunIcon } from "../common/SvgIcon"

function Header({ darkMode, onDarkMode }) {
  return (
    <>
      <header className="header dark:headerDark">
        <div className="container text-navText dark:text-white">
          <div className="flex justify-between items-center globalWidth">
            <div className="logo">
              <Link href={"#"}>{darkMode ? <LogoDarkIcon /> : <LogoLightIcon />}</Link>
            </div>
            <nav>
              <ul className="flex items-center gap-6">
                <li>
                  <Link href={"#"} className="navLink">Solutions</Link>
                </li>

                <li>
                  <Link href={"#"} className="navLink">Geo</Link>
                </li>

                <li>
                  <Link href={"#"} className="navLink">Contacts</Link>
                </li>

                <li>
                  <Link href={"#"} onClick={onDarkMode}>{darkMode ? <SunIcon /> : <MoonIcon />} </Link>
                </li>

                <li>
                  <Link href={"#"} className="primaryBtn">Request a demo</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header