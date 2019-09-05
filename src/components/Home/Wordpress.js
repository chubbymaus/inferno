import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const JumboContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${"" /* align-content: center; */}
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Wordpress = () => (
  <section
    className="hero has-background-dark is-fullheight is-bold"
    id="wordpress"
  >
    <div className="container has-text-left">
      <JumboContainer class="columns">
        <div className="column hero-text">
          <h1 className="title has-text-white  has-text-weight-bold">
            <span className="half-highlight-link">Wordpress Solutions</span>
          </h1>
          <Fade bottom duration={800}>
            <h1 className="title has-text-white">Planning.</h1>
            <h2 className="has-text-weight-light subtitle has-text-white">
              Wordpress powers over 30% of all websites. Wordpress powers over
              30% of all websites. Wordpress powers over 30% of all websites.
            </h2>
            <Link to="/wordpress">
              <div className="is-white is-outlined jumbotron-button button is-medium">
                More About Wordpress &nbsp;
                <FontAwesomeIcon
                  className="arrow-right"
                  icon={["far", "angle-right"]}
                />
              </div>
            </Link>
          </Fade>
        </div>
        <div className="column hero-text has-text-white has-text-right">
          <Fade bottom duration={1600}>
            <FontAwesomeIcon
              icon={["fab", "wordpress"]}
              style={{ fontSize: "30rem" }}
            />
          </Fade>
        </div>
      </JumboContainer>
    </div>
  </section>
)

export default Wordpress
