import React from "react"
// import { Link } from 'gatsby'

import BlogLayout from "../components/BlogLayout"

import styled from "styled-components"

const RequestWrapper = styled.div`
  margin-top: 0px;

  @media only screen and (max-width: 600px) {
    padding: 15px !important;
  }
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ContactPage = () => (
  <BlogLayout>
    <div id="contact-container">
      <RequestWrapper className="container is-fluid">
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <HeroText className="column is-half">
                  <h1 className="title has-text-dark">
                    Start your new site today!
                  </h1>
                  <h2 className="subtitle has-text-dark">
                    See the future of business collaboration and how it can make
                    your business faster, safer, and more transparent.
                  </h2>
                </HeroText>
                <div className="column is-half">
                  <div className="card shadowed">
                    <div className="card-content">
                      <h1 className="title has-text-dark">
                        See how Inferno works.
                      </h1>
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
                              name="firstName"
                              placeholder="First Name"
                            />
                          </div>
                          <div className="control is-expanded">
                            <input
                              className="input"
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
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
                          <div className="control is-expanded">
                            <input
                              className="input"
                              type="text"
                              name="companyName"
                              placeholder="Company Name"
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
                              className="button is-info is-medium is-fullwidth"
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
              </div>
            </div>
          </div>
        </section>
      </RequestWrapper>
    </div>
  </BlogLayout>
)

export default ContactPage
