import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Services = () => (
  <div className="is-fullheight">
    <div className="about-wrapper has-background-info" id="dots-section">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column ">
            <div className="card has-background-white">
              <div className="card-content has-text-dark">
                <div className="title has-text-dark">
                  <FontAwesomeIcon
                    style={{ fontSize: "2rem" }}
                    icon={["far", "server"]}
                    className="has-text-link"
                  />
                  &nbsp; Hosting
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
