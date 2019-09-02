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

const Stack = () => (
  <section
    className="hero has-background-white is-fullheight is-bold"
    id="wordpress"
  >
    <div className="container has-text-left">
      <JumboContainer class="columns">
        <div className="column hero-text has-text-dark columns">
          <div className="column">
            <Fade bottom duration={800}>
              <div>
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  style={{ fontSize: "12rem" }}
                />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <FontAwesomeIcon
                  icon={["fab", "node-js"]}
                  style={{ fontSize: "12rem" }}
                />
              </div>
            </Fade>
          </div>
          <div className="column has-text-center">
            <Fade bottom duration={1200}>
              <div>
                <FontAwesomeIcon
                  icon={["fab", "docker"]}
                  style={{ fontSize: "12rem" }}
                />
                &nbsp;
                <FontAwesomeIcon
                  icon={["fab", "linux"]}
                  style={{ fontSize: "12rem" }}
                />
              </div>
            </Fade>
          </div>
        </div>
        <div className="column hero-text">
          <h1 className="title has-text-dark  has-text-weight-bold">
            <span className="half-highlight-alt">Modern Web Stack</span>
          </h1>
          <Fade bottom duration={800}>
            <h1 className="title has-text-white">Planning.</h1>
            <h2 className="has-text-weight-light subtitle has-text-dark">
              Wordpress powers over 30% of all websites. Wordpress powers over
              30% of all websites. Wordpress powers over 30% of all websites.
            </h2>
          </Fade>
        </div>
      </JumboContainer>
    </div>
  </section>
)

export default Stack
