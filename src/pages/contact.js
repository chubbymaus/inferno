import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'

import styled from 'styled-components'

const RequestWrapper = styled.div `
  margin-top:0px;

  @media only screen and (max-width: 600px){
    padding: 15px !important;
}
`;

const HeroText = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const ContactPage = () => (
  <Layout>
    <div id="contact-container">
     <RequestWrapper className="container is-fluid">


      <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                    <HeroText className="column is-half">
                        
                    <h1 className="title has-text-primary">
                          See how Squibly works.
                        </h1>
                        <h2 className="subtitle has-text-primary">
                          See the future of business collaboration and how it can make your business faster, safer, and more transparent. 
                        </h2>

                    </HeroText>
                  <div className="column is-half">
                    <div className="card shadowed">
                    <div className="card-content">
                    <h1 className="title has-text-primary">
                          See how Squibly works.
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
                        <input className="input" type="text" name="firstName" placeholder="First Name"/>
                      </div>
                      <div className="control is-expanded">
                        <input className="input" type="text" name="lastName" placeholder="Last Name"/>
                      </div>
                    
                    </div>

                    <div className="field">
                      <div className="control is-expanded">
                        <input className="input" type="email" name="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input className="input" type="tel" name="phoneNumber" placeholder="Phone" />
                      </div>
                      <div className="control is-expanded">
                        <input className="input" type="text" name="companyName" placeholder="Company Name" />
                      </div>
                    </div>
                    <div className="field ">
                      <div className="control is-expanded">
                        <label className="label">Department</label>
                        <div className="select" >
                          <select name="department">
                            <option>CEO</option>
                            <option>Customer Support</option>
                            <option>Engineering</option>
                            <option>Finance</option>
                            <option>Human Resources</option>
                            <option>IT</option>
                            <option>Marketing</option>
                            <option>Sales & Business Development</option>
                            <option>Operations</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="control is-expanded">
                        <label className="label">Company Size</label>
                        <div className="select">
                          <select name="companySize">
                            <option>5000+</option>
                            <option>1000-4999</option>
                            <option>500-999</option>
                            <option>100-499</option>
                            <option>50-99</option>
                            <option>1-49</option>
                          </select>
                        </div>
                      </div>

                    </div>


                    <div className="field">
                      <div className="control">
                        <textarea className="textarea" name="message" placeholder="Message"></textarea>
                      </div>
                    </div>

                    <div className="field">
                      <p className="control">
                        <button className="button is-info is-medium is-fullwidth" type="submit">
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
  </Layout>
)

export default ContactPage
