import React, { Component, useEffect } from "react";
import logo from './images/logo.png'
import logosm from './images/logosm.png'
import { Link,Switch, HashRouter, Route,withRouter} from 'react-router-dom';
import TherapistLogin from './TherapistLogin';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import { Breakpoint, BreakpointProvider } from 'react-socks';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { faSearch, faHome, faUserCircle, faAddressCard } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component { 
    state = {
        loggedIn: false,
        email: ""
    }

    logoutHandler(event) {
        event.preventDefault()
        sessionStorage.removeItem("email")
        sessionStorage.removeItem("access_token")
        this.setState({ loggedIn: false, email: "" })
    }


    componentDidMount() {
        let email = sessionStorage.getItem("email")
            if (email) {
                this.setState({ loggedIn: true, email: email })
            } else {
                this.setState({ loggedIn: false, email: "" })
            }

        window.addEventListener("storage_event", e => {
            let email = sessionStorage.getItem("email")
                if (email) {
                    this.setState({ loggedIn: true, email: email })
                } else {
                    this.setState({ loggedIn: false, email: "" })
                }
        });
    }

    render(){
        const tabs = [{
            route: "/Home",
            icon: faHome,
            label: "Home"
          },{
            route: "/login",
            icon: faSearch,
            label: "Login"
          },{
            route: "/Services",
            icon: faUserCircle,
            label: "Services"
          },{
            route: "/Contact",
            icon: faAddressCard,
            label: "Contact"
          }]
    return (
        <BreakpointProvider>
        
        <div >   
        <Breakpoint medium down>
        <a class="logo" href="#" style={{width:500,height:500,padding:10}}>
				<img src={logosm} alt="" class="img-fluid logo-img"/>
			</a>
        <div>
            <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation"
            
            style={{backgroundColor:"#F5F5F5",width:"100%",height:"8%"}}>
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
                    <HashRouter>
                  <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      {/* <FontAwesomeIcon size="5px" icon={tab.icon}/> */}
                      <div className="bottom-tab-label" style={{color:"grey"}} onPress={() => this.onClick()}>{tab.label}</div>
                    </div>
                  </NavLink>
                  </HashRouter>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
      </div>
        </Breakpoint>
        <Breakpoint large up>
        <header style={{marginTop:"0%"}}>
        <nav class="navbar navbar-expand-lg navigation" id="navbar" style={{marginTop:"0%"}}>
            <div class="container">
            <a class="navbar-brand" href="#">
				<img src={logo} alt="" class="img-fluid logo-img"/>
			</a>
                <div class="collapse navbar-collapse" id="navbarmain">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active"><HashRouter><Link to={'/'} class="nav-link">Home</Link></HashRouter></li>
                        <li class="nav-item"><HashRouter><Link to={'/services'} class="nav-link" >Services</Link></HashRouter></li>
                        <li class="nav-item"><HashRouter><Link to={'/contact'} class="nav-link" >Contact</Link></HashRouter></li>
                        {!this.state.loggedIn && (
                            <li class="nav-item"><HashRouter><Link to={'/login'} class="nav-link">Login</Link></HashRouter></li>
                        )}
                        {this.state.loggedIn && (
                            <li class="nav-item"><HashRouter><Link to={'/uploadTranscript'} class="nav-link">Upload Transcript</Link></HashRouter></li>
                        )}
                        {this.state.loggedIn && (
                            <li onClick={(e) => {this.logoutHandler(e)}} class="nav-item"><HashRouter><Link to={'/'} class="nav-link">{this.state.email} : Logout</Link></HashRouter></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    {/* <BrowserRouter>  
    <Switch>
          <Route exact path="/" component={withRouter(Home)}/>
          <Route path="/login" component={withRouter(TherapistLogin)}/>
      </Switch>
    </BrowserRouter> */}
    </header>
    </Breakpoint>
    </div >
    </BreakpointProvider>  
       );
    }
  }
    export default NavBar;