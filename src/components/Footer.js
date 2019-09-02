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
  .section {
    padding: 1rem 1rem;
  }
`

const Footer = () => (
  <FooterSection>
    <div className="section has-background-dark  has-text-left">
      <div className="container is-narrow">
        <p className="has-text-white">
          {" "}
          &copy; {new Date().getFullYear()} InfernoApps
        </p>
      </div>
    </div>
  </FooterSection>
)

export default Footer
