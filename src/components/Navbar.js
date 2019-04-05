import React, { Component } from 'react'
import Link from 'gatsby-link'
import Logo from '../images/infernodarkerblue.png'

class Navbar extends Component {
    state = {
        menuOpen: false,
        isTop: true,
        navColor: 'navbar is-white',
        logo: Logo,
        mobile: 'navbar-menu has-background-white has-text-primary',
        mobileToggle: 'navbar-burger has-text-primary'
    };

    menuToggleClickHandler = () => {
        this.setState((prevState) => {
            return { menuOpen: !prevState.menuOpen };
        });
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 75;
          if (isTop !== this.state.isTop) {
            this.setState({
              navColor: 'navbar is-white is-fixe-top shadowed',
              
              mobile: 'navbar-menu has-background-white has-text-primary',
              mobileToggle: 'navbar-burger has-text-primary'
            })
          } else {
            this.setState({
                navColor: 'navbar is-white ',
                
                mobile: 'navbar-menu has-background-white has-text-primary',
                mobileToggle: 'navbar-burger has-text-primary'
              })
          }
        });
      }
    render() {
        return (
            <div>
                <nav className={this.state.navColor}>
                    <div className="container is-fluid" >
                        <div className="navbar-brand">
                            <Link className="navbar-item" to="/">
                                <img src={this.state.logo} alt="Logo"/>
                            </Link>
                            <div
                                
                                role="button"
                                className = {
                                  this.state.menuOpen ? `${this.state.mobileToggle} is-active` : `${this.state.mobileToggle}`
                                }
                                data-target="navMenu"
                                aria-label="menu"
                                aria-expanded="false"
                                onClick={this.menuToggleClickHandler} >
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </div>
                        </div>
                        <div className = {
                          this.state.menuOpen ? `${this.state.mobile}  has-text-white is-active` : 'navbar-menu'
                        }
                        id="navMenu">
                            
                            <div className="navbar-end is-primary">
                                <div className="navbar-item">
                                    <a href="#about" className="has-text-primary">
                                        About
                                    </a>
                                </div>
                                <div className="navbar-item">
                                    <a href="#portfolio" className="has-text-primary">
                                        Recent Work
                                    </a>
                                </div>
                                <div className="navbar-item">
                                    <a href="#contact" className="button is-fullwidth is-success has-text-white shadowed">
                                        Say Hello
                                    </a>
                                </div>

  
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Navbar