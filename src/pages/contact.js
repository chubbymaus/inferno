import React from "react"
// import { Link } from 'gatsby'

import Layout from "../components/layout"

import styled from "styled-components"

const JumboContainer = styled.div`
  display: flex;
  margin-top: 10%;
  flex-direction: row;
  align-self: flex-end;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const ContactPage = () => (
  <Layout>
    <section className="hero dust-section is-fullheight is-bold" id="jumbotron">
      <div className="container has-text-left">
        <JumboContainer className="columns">
          <div className="hero-text column">
            <h1 className="title has-text-left has-text-dark">
              <span className="half-highlight">Located In Utah</span>
            </h1>
            <h1 className="title has-text-dark has-text-weight-bold">
              Managing a website can be: <br />
            </h1>
            <h2 className="has-text-weight-light subtitle has-text-dark">
              A Wordpress site built and hosted by Inferno makes everything
              easier.
            </h2>
          </div>
          <div className="column">
            <div className="card shadowed">
              <div className="card-content">
                <h1 className="title has-text-dark">See how Inferno works.</h1>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="field is-grouped">
                    <div className="control is-expanded">
                      <input
                        className="input"
                        type="text"
                        name="fullName"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control is-expanded">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control is-expanded">
                      <input
                        className="input"
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea"
                        name="message"
                        placeholder="Message"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <p className="control">
                      <button
                        className="button is-dark shadowed is-medium is-fullwidth"
                        type="submit"
                      >
                        Submit
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </JumboContainer>
      </div>
    </section>
  </Layout>
)

export default ContactPage
