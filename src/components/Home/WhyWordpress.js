import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import HeroImage from "../../images/computers.png"
import Typed from "react-typed"
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
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Jumbotron = () => (
  <section className="hero has-background-info is-large is-bold">
    <div className="container is-fluid has-text-left">
      <JumboContainer class="columns">
        <div className="column is-half" id="hero-image">
          <FontAwesomeIcon
            style={{ fontSize: "28rem" }}
            icon={["fab", "wordpress-simple"]}
            className="has-text-white"
          />
        </div>
        <div className="column is-half hero-text">
          <h1 className="title has-text-primary has-text-weight-bold">
            Why Wordpress?
          </h1>
          <h2 className="has-text-weight-light subtitle has-text-primary">
            Wordpress powers over 30% of all websites. Wordpress powers over 30%
            of all websites. Wordpress powers over 30% of all websites.
            Wordpress powers over 30% of all websites. Wordpress powers over 30%
            of all websites.
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
    <div className="container is-fluid has-text-left">
      <JumboContainer class="columns">
        <div className="column is-half hero-text">
          <h1 className="title has-text-primary has-text-weight-bold">
            InfernoTuts
          </h1>
          <h2 className="has-text-weight-light subtitle has-text-primary">
            Wordpress powers over 30% of all websites. Wordpress powers over 30%
            of all websites. Wordpress powers over 30% of all websites.
            Wordpress powers over 30% of all websites. Wordpress powers over 30%
            of all websites.
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
        <div className="column is-half" id="hero-image">
          <FontAwesomeIcon
            style={{ fontSize: "15rem" }}
            icon={["fab", "wordpress-simple"]}
            className="has-text-white"
          />
        </div>
      </JumboContainer>
    </div>
  </section>
)

export default Jumbotron
