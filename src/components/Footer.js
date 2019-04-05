import React from 'react'

import styled from 'styled-components';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const FooterSection = styled.footer`
    a{
      color: #f1f0ee;
    }
    a:hover{
      color: #22A0F3;
    }
`;


const Footer = () => (
    <FooterSection className="section has-background-primary is-small has-text-centered">
      <div className="container is-narrow">
        <div className="logo"></div>
        <div className="columns has-text-white is-centered"> 
          <div className="column is-half">
            <h1 className="title has-text-white ">Securing workplace collaboration one user at a time!</h1>
          </div>
        </div>
        <div className="columns has-text-white is-centered"> 
          <div className="column is-half">
            <h3 style={{fontSize: '2rem'}}>
            
            {/* <span>&nbsp;&nbsp;
              <a href="https://www.behance.net/court090c">
              <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a>
            </span> */}
            
            {/* <span>&nbsp;&nbsp;
              <a href="https://angel.co/court-garr?public_profile=1">
              <FontAwesomeIcon icon={['fab', 'angellist']} />
              </a>
            </span> */}
            <span>&nbsp;&nbsp;
             <a href="https://twitter.com/SquiblyHQ">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
            </span>
            <span>&nbsp;&nbsp;
             <a href="https://www.linkedin.com/company/squibly/">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </a>
            </span>
            </h3>
        <br/>
          </div>
        </div>
        <p className="has-text-white"> &copy; {new Date().getFullYear()} Squibly</p>
      </div>
    </FooterSection>

)

export default Footer;