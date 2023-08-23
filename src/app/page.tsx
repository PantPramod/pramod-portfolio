import React from 'react'
import {
  Projects,
  Skills,
  Blogs,
  Footer,
  PageProgress,
  About,
  ButtonGroup
} from './components'

const Home = () => {
  return (
    <>
      <PageProgress />
      <About />
      <ButtonGroup />
      <Skills />
      <Projects />
      <Blogs />
      <Footer />
    </>
  )
}

export default Home
