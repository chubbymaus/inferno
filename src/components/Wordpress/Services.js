import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Services = () => (
  <div className="hero has-background-dark is-fullheight">
    <div className="about-wrapper has-background-dark" id="about">
      <div className="container is-fluid">
        <h1 className="title is-center has-text-white has-text-weight-bold">
          <span className="">Packages</span>
        </h1>

        <div className="columns">
          <div className="column is-one-third">
            <div>
              <div className="has-text-white">
                <div className="title has-text-white">
                  <span className="half-highlight">
                    <FontAwesomeIcon
                      style={{ fontSize: "2rem" }}
                      icon={["far", "user-edit"]}
                      className="has-text-white"
                    />
                    &nbsp; Personal
                  </span>
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
          <div className="column is-one-third">
            <div>
              <div className="has-text-white">
                <div className="title has-text-white">
                  <span className="half-highlight">
                    <FontAwesomeIcon
                      style={{ fontSize: "2rem" }}
                      icon={["far", "store-alt"]}
                      className="has-text-white"
                    />
                    &nbsp; Small Business
                  </span>
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
          <div className="column is-one-third">
            <div>
              <div className="has-text-white">
                <div className="title has-text-white">
                  <span className="half-highlight">
                    <FontAwesomeIcon
                      style={{ fontSize: "2rem" }}
                      icon={["far", "shopping-cart"]}
                      className="has-text-white"
                    />
                    &nbsp; eCommerce
                  </span>
                </div>
                <hr />
                <div>
                  <p>
                    Reduce reliance on trusted intermediaries and lower
                    transaction costs.
                  </p>
                  <ul>
                    <li>Smart Contracts</li>
                    <li>Smart Contracts</li>
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
