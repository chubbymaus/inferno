import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import HeroImage from "../../images/computers.png"
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
  margin-top: 25%;
  flex-direction: row;
  align-self: flex-end;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Jumbotron = () => (
  <section className="hero is-fullheight is-bold" id="jumbotrn">
    <div className="container is-flid has-text-left">
      <JumboContainer>
        <div className="hero-text">
          <h1 className="title has-text-primary has-text-weight-bold">
            Managing a website can be: <br />
            <Typed
              strings={["DIFFICULT", "TIME CONSUMING", "FRUSTRATING"]}
              typeSpeed={60}
              backSpeed={60}
            />
          </h1>
          <h2 className="has-text-weight-light subtitle has-text-primary">
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
        {/* <div className="is-one-third has-text-right" id="hero-image">
          <img src={HeroImage} alt="Hero" />
        </div> */}
      </JumboContainer>
    </div>
  </section>
)

export default Jumbotron
