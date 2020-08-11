import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import Home from './home.js';
import Account from './account.js';
import Checking from './checking.js';
import Savings from './savings.js';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isHome:true,
            isAccount:false,
            isChecking:false,
            isSavings:false
        }
        this.home = this.home.bind(this);
        this.account = this.account.bind(this);
        this.checking = this.checking.bind(this);
        this.savings = this.savings.bind(this);
    }
    home() {
        this.setState({
            isHome:true,
            isAccount:false,
            isChecking:false,
            isSavings:false
        });
    }
    account() {
        this.setState({
            isHome:false,
            isAccount:true,
            isChecking:false,
            isSavings:false
        });
    }
    checking() {
        this.setState({
            isHome:false,
            isAccount:false,
            isChecking:true,
            isSavings:false
        });
    }
    savings() {
        this.setState({
            isHome:false,
            isAccount:false,
            isChecking:false,
            isSavings:true
        });
    }
            render() {
                console.log(this.props.user);
                console.log("user props in navbar ^^");
                let page;
                if(this.state.isHome===true) {
                    page = <Home user={this.props.user}/>;
                } else if(this.state.isAccount===true) {
                    page = <Account user={this.props.user}/>;
                } else if(this.state.isChecking===true) {
                    page = <Checking user={this.props.user}/>;
                } else if(this.state.isSavings===true) {
                    page = <Savings user={this.props.user}/>;
                }
                return  (
                        <div>
                            <Navbar fixed="top" bg="dark" expand="lg">
                            <Navbar.Brand className="text-light" onClick={this.home}><img src="./bankLogo.png" alt="dollar bank logo"/></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link className="text-light" onClick={this.home}>Home</Nav.Link>
                                    <Nav.Link className="text-light" onClick={this.account}>Account</Nav.Link>
                                    <Nav.Link className="text-light" onClick={this.checking}>Checking</Nav.Link>
                                    <Nav.Link className="text-light" onClick={this.savings}>Savings</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            </Navbar>
                            {page}
                        </div>
                );
            }
}

export default NavBar;