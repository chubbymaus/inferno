import React from "react"
// import { Link } from 'gatsby'

import Layout from "../components/layout"
import Jumbotron from "../components/Home/Jumbotron"
import WhyWordpress from "../components/Home/WhyWordpress"
import Contact from "../components/Home/Contact"
import Hosting from "../components/Home/Hosting"
import About from "../components/Home/About"

// if (typeof window !== 'undefined') {
//   // Make scroll behavior of internal links smooth
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }
const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <WhyWordpress />
    <About />
    <Hosting />
    {/* <LaptopMockup /> */}
    <Contact />
  </Layout>
)

export default IndexPage
