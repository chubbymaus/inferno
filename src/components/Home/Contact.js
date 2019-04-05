import React from 'react'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'


const Contact = () => (
    <div className="is-fullheight">
        
        <div className="about-wrapper has-background-link" id="dots-section">
            <div className="container is-fluid">
            <h1 className="title has-text-primary has-text-weight-bold">
                           Squibly helps boost productivity while facilitating...
                        </h1>
                <div className="columns features">
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
                    <div className="column is-half">
                        <div className="card has-background-primary">
                            <div className="card-content has-text-white">
                                <div className="title has-text-white">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'folders']} />
                                    &nbsp; 
                                    Transparency
                                </div>
                                <hr/>
                                <div className="content">

                                    <p>Digital signatures eliminate phishing and notarize all actions on the network.</p>
                                    <ul>
                                        <li>Squibly Explorer</li>
                                        <li>Digital Signatures</li>
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