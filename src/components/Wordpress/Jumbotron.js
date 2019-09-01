import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import Typed from "react-typed"

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
  flex-direction: row;
  justify-content: center;
  align-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Jumbotron = () => (
  <section className="hero has-background-white is-fullheight is-bold">
    <div className="container is-fluid has-text-left">
      <JumboContainer>
        <div className="is-half hero-text">
          <h1 className="title has-text-dark has-text-weight-bold">
            Managing a website can be: <br />
            <Typed
              strings={["DIFFICULT", "TIME CONSUMING", "FRUSTRATING"]}
              typeSpeed={60}
              backSpeed={60}
            />
          </h1>
          <h2 className="has-text-weight-light subtitle has-text-dark">
            A Wordpress site built and hosted by Inferno makes everything
            easier.
          </h2>
          <ButtonGroup>
            <a href="#about">
              <div className="is-info jumbotron-button button first_button shadowed is-medium is-fullwidth">
                Learn More
              </div>
            </a>
            <div>&nbsp;&nbsp;</div>
            <Link to="/contact">
              <div className="is-success shadowed jumbotron-button button is-medium is-fullwidth">
                Contact Us
              </div>
            </Link>
          </ButtonGroup>
        </div>
      </JumboContainer>
    </div>
  </section>
)

export default Jumbotron
