import React from "react"

import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterSection = styled.footer`
  a {
    color: #f1f0ee;
  }
  a:hover {
    color: #22a0f3;
  }
`

const Footer = () => (
  <FooterSection className="section has-background-dark is-small has-text-centered">
    <div className="container is-narrow">
      <div className="logo"></div>
      <div className="columns has-text-white is-centered">
        <div className="column is-half">
          <h1 className="title has-text-white ">
            Securing workplace collaboration one user at a time!
          </h1>
        </div>
      </div>

      <p className="has-text-white">
        {" "}
        &copy; {new Date().getFullYear()} Inferno Apps
      </p>
    </div>
  </FooterSection>
)

export default Footer
