import React from "react"
// import { Link } from 'gatsby'

import Layout from "../components/layout"
import Jumbotron from "../components/Wordpress/Jumbotron"
import WhyWordpress from "../components/Wordpress/WhyWordpress"
import InfernoTuts from "../components/Wordpress/InfernoTuts"
import Hosting from "../components/Wordpress/Hosting"
import Services from "../components/Wordpress/Services"
import Contact from "../components/Wordpress/Contact"

// if (typeof window !== 'undefined') {
//   // Make scroll behavior of internal links smooth
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }
const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <WhyWordpress />
    <InfernoTuts />
    <Hosting />
    <Services />
    <Contact />
  </Layout>
)

export default IndexPage
