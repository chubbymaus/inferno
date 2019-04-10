import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Jumbotron from '../components/Home/Jumbotron'
import LaptopMockup from '../components/Home/LaptopMockup'
import Contact from '../components/Home/Contact'

import About from '../components/Home/About';


// if (typeof window !== 'undefined') {
//   // Make scroll behavior of internal links smooth
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }
const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <About />
    {/* <LaptopMockup /> */}
    <Contact />
  </Layout>
)

export default IndexPage
