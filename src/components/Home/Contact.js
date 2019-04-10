import React from 'react'
import Mockups from '../../images/infernomockups.png';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'


const Contact = () => (
    <div className="is-fullheight" id="dots-section">
        
        <div className="about-wrapper has-background-lnk" id="laptop_section">
            <div className="container is-fluid">
            <h1 className="title has-text-primary has-text-weight-bold">
                           Squibly helps boost productivity while facilitating...
                        </h1>
                <div className="columns features">
                   <div className="column is-half">
                        <img src={Mockups} alt="Hero"  />
                    </div>
                    <div className="column is-half">
                        <div className="card has-background-white">

                            <div className="card-content has-text-primary">
                                <div className="title has-text-info">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'lock-alt']} />
                                    &nbsp; Security 
                                </div>
                                <hr/>
                                <div className="content">
                                    <p>End-to-end encryption on a peer-to-peer network,
                                     and distributed file storage. Consolidate file storage and sharing with Squibly to save money while maintaining the highest levels of security.</p>
                                    <ul>
                                        <li>Distributed File Storage</li>
                                        <li>Peer-to-Peer Network</li>
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

export default Contact