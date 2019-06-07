import React from "react"
import Mockups from "../../images/infernomockups.png"
import Link from "gatsby-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Services = () => (
  <div className="is-fullheight" id="dots-section">
    <div className="about-wrapper has-background-lnk" id="services_section">
      <div className="container is-fluid">
        <h1 className="title is-center has-text-white has-text-weight-bold has-text-centered">
          WHAT WE DO
        </h1>
        <h2 className="has-text-centered has-text-white subtitle">
          Here at Inferno we focus on building beautiful websites and <br />{" "}
          mobile apps to with ease of maintainability in mind.
        </h2>
        <div className="columns">
          <div className="column is-one-third">
            <div className="card has-background-white">
              <div className="card-content has-text-primary">
                <div className="title has-text-primary">
                  <FontAwesomeIcon
                    style={{ fontSize: "2rem" }}
                    icon={["far", "user-edit"]}
                    className="has-text-link"
                  />
                  &nbsp; Personal
                </div>
                <hr />
                <div className="content">
                  <p>
                    Everything your team needs to collaborate in one secure
                    place. Chat, share and store files with the security you
                    need
                  </p>
                  <ul>
                    <li>Chat/File Sharing</li>
                    <li>App Integration</li>
                  </ul>

                  <div className="navbar-tem">
                    <Link
                      to="/contact"
                      className="button is-fullwidth is-success has-text-white shadowed"
                    >
                      Say Hello
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card has-background-white">
              <div className="card-content has-text-primary">
                <div className="title has-text-primary">
                  <FontAwesomeIcon
                    style={{ fontSize: "2rem" }}
                    icon={["far", "store-alt"]}
                    className="has-text-link"
                  />
                  &nbsp; Small Business
                </div>
                <hr />
                <div className="content">
                  <p>
                    Everything your team needs to collaborate in one secure
                    place. Chat, share and store files with the security you
                    need
                  </p>
                  <ul>
                    <li>Chat/File Sharing</li>
                    <li>App Integration</li>
                  </ul>
                  <div className="navbar-tem">
                    <Link
                      to="/contact"
                      className="button is-fullwidth is-success has-text-white shadowed"
                    >
                      Say Hello
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card shadowed has-background-white">
              <div className="card-content has-text-primary">
                <div className="title has-text-primary">
                  <FontAwesomeIcon
                    style={{ fontSize: "2rem" }}
                    icon={["far", "shopping-cart"]}
                    className="has-text-link"
                  />
                  &nbsp; eCommerce
                </div>
                <hr />
                <div className="content">
                  <p>
                    Reduce reliance on trusted intermediaries and lower
                    transaction costs.
                  </p>
                  <ul>
                    <li>Smart Contracts</li>
                    <li>Smart Contracts</li>
                  </ul>
                  <div className="navbar-tem">
                    <Link
                      to="/contact"
                      className="button is-fullwidth is-success has-text-white shadowed"
                    >
                      Say Hello
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column ">
            <div className="card has-background-white">
              <div className="card-content has-text-primary">
                <div className="title has-text-primary">
                  <FontAwesomeIcon
                    style={{ fontSize: "2rem" }}
                    icon={["far", "server"]}
                    className="has-text-link"
                  />
                  &nbsp; Custom Development
                </div>
                <hr />
                <div className="content">
                  <p>
                    Everything your team needs to collaborate in one secure
                    place. Chat, share and store files with the security you
                    need
                  </p>
                  <ul>
                    <li>Chat/File Sharing</li>
                    <li>App Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Services
