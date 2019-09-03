import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import Typed from "react-typed"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`
const JumboContainer = styled.div`
  display: flex;
  margin-top: 10%;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Jumbotron = () => (
  <section className="hero dots-section is-fullheight is-bold" id="jumbotron">
    <div className="container has-text-left">
      <JumboContainer>
        <div className="hero-text">
          <h1 className="title has-text-dark has-text-weight-bold">
            Wordpress Sites By Inferno Are: <br />
            <span className="half-highlight">
              <Typed
                strings={[
                  "Easy To Manage",
                  "Inexpensive",
                  "Perfect for Small Businesses",
                ]}
                typeSpeed={60}
                backSpeed={60}
              />
            </span>
          </h1>
          <h2 className="has-text-weight-light subtitle has-text-dark">
            Don't worry! We are here to make everything easier, faster, and
            prettier.
          </h2>
          <ButtonGroup>
            <a href="#about">
              <div className="is-dark jumbotron-button button first_button is-medium is-fullwidth">
                Learn More
              </div>
            </a>
            <div>&nbsp;&nbsp;</div>
            <Link to="/contact">
              <div className="is-dark is-outlined jumbotron-button button is-medium is-fullwidth">
                Contact Us
              </div>
            </Link>
          </ButtonGroup>
        </div>
        <Fade right>
          <FontAwesomeIcon
            icon={["fab", "wordpress"]}
            style={{ fontSize: "30rem" }}
            className="has-text-dark"
          />
        </Fade>
      </JumboContainer>
    </div>
  </section>
)

export default Jumbotron
