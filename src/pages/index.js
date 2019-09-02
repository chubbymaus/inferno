import React from "react"
// import { Link } from 'gatsby'

import Layout from "../components/layout"
import Jumbotron from "../components/Home/Jumbotron"
import Ux from "../components/Home/Ux"
import Services from "../components/Home/Services"
import Stack from "../components/Home/Stack"
import Wordpress from "../components/Home/Wordpress"
import Contact from "../components/Home/Contact"

// if (typeof window !== 'undefined') {
//   // Make scroll behavior of internal links smooth
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }
const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <Ux />
    <Stack />
    <Wordpress />
    {/* <Services /> */}
    <Contact />
  </Layout>
)

export default IndexPage
