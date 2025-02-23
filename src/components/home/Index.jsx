"use client"
import { useState } from "react"
import BuildSomething from "./BuildSomething"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import GlobalReach from "./GlobalReach"
import Header from "./Header"
import Hero from "./Hero"
import Newsletter from "./Newsletter"
import OriginalPsp from "./OriginalPsp"
import WorkWithUs from "./WorkWithUs"
import LocalExpertise from "./LocalExpertise"
import Project from "./Project"


function Index() {
  const [darkMode, setDarkMode] = useState(false)
  const handleDarkMode = (e) => {
    e.preventDefault()
    const html = document.documentElement
    if (darkMode) {
      html.classList.remove("dark")
    } else {
      html.classList.add("dark")
    }
    setDarkMode(!darkMode)
  }
  return (
    <>
      <Header darkMode={darkMode} onDarkMode={handleDarkMode} />
      <Hero />
      <OriginalPsp darkMode={darkMode} />
      <WorkWithUs />
      <GlobalReach />
      <LocalExpertise />
      <BuildSomething />
      <ContactUs />
      <Newsletter />
      <Project />
      <Footer darkMode={darkMode} />
    </>
  )
}

export default Index