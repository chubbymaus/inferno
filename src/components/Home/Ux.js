import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const JumboContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Jumbotron = () => (
  <section
    className="hero has-background-dark is-fullheight is-bold"
    id="about"
  >
    <div className="container has-text-left">
      <h1 className="title has-text-white  has-text-weight-bold">
        <span className="half-highlight">PLAN.DESIGN.DEVELOP.</span>
      </h1>
      <JumboContainer class="columns">
        <div className="column hero-text">
          <Fade bottom duration={800}>
            <h1 className="title has-text-white">Planning.</h1>
            <h2 className="has-text-weight-light subtitle has-text-white">
              Wordpress powers over 30% of all websites. Wordpress powers over
              30% of all websites. Wordpress powers over 30% of all websites.
            </h2>
            <ul className="has-text-white">
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </Fade>
        </div>
        <div className="column hero-text">
          <Fade bottom duration={1600}>
            <h1 className="title has-text-white">Design.</h1>
            <h2 className="has-text-weight-light subtitle has-text-white">
              Wordpress powers over 30% of all websites. Wordpress powers over
              30% of all websites. Wordpress powers over 30% of all websites.
            </h2>
            <ul className="has-text-white">
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </Fade>
        </div>
        <div className="column hero-text">
          <Fade bottom duration={2400}>
            <h1 className="title has-text-white">Development.</h1>
            <h2 className="has-text-weight-light subtitle has-text-white">
              Wordpress powers over 30% of all websites. Wordpress powers over
              30% of all websites. Wordpress powers over 30% of all websites.
            </h2>
            <ul className="has-text-white">
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </Fade>
        </div>
      </JumboContainer>
    </div>
  </section>
)

export default Jumbotron
