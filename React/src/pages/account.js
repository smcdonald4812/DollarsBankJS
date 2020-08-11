import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import LoginService from '../services/loginService.js';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:this.props.user.firstname,
            lastname:this.props.user.lastname,
            username:this.props.user.username,
            password:this.props.user.password,
            country:this.props.user.country,
            mobile:this.props.user.mobile,
            password:this.props.user.password
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let user = {id:this.props.user.id, firstname:this.state.firstname, lastname:this.state.lastname,username:this.state.username,password:this.state.password,
            country:this.state.country, mobile:this.state.mobile, datecreated:this.props.user.datecreated};
        LoginService.update(user);
        this.setState({redirectToReferrer:true});
        event.stopPropigation()
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        //const reg = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
        return (
            <div className="container mr-auto" style={{ marginTop: "100px"}}>
                <Container style={{marginTop:"25px", marginBottom:"25px"}}>
                        <Row>
                            <Col className="rounded" style={{backgroundColor:"#007bff"}} md={{ span: 6, offset: 3 }}>
                                <form className="mr-auto" style={{marginTop:"10px"}} onSubmit={this.handleSubmit}>
                                    <img className="img" src="./bankLogo.png" alt="dollar bank logo"/>
                                    <h3 className="mr-auto text-center text-light">Sign Up</h3>

                                    <div className="form-group">
                                        <label className="text-light">First name</label>
                                        <input type="text" name="firstname" className="form-control" value={this.state.firstname} placeholder={this.props.user.firstname} required onChange={this.handleChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="text-light">Last name</label>
                                        <input type="text" name="lastname" className="form-control" value={this.state.lastname} placeholder={this.props.user.lastname} required onChange={this.handleChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="text-light">Phone Number</label>
                                        <input type="tel" name="mobile" className="form-control" value={this.state.mobile} placeholder={this.props.user.mobile} required onChange={this.handleChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="text-light">Country</label>
                                        <input type="text" name="country" className="form-control" value={this.state.country} placeholder={this.props.user.country} required onChange={this.handleChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="text-light">User name</label>
                                        <input type="text" name="username" className="form-control" value={this.state.username} placeholder={this.props.user.username} required onChange={this.handleChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="text-light">Password</label>
                                        <input type="password" name="password" className="form-control" value={this.state.password} placeholder={this.props.user.password} required pattern='^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$' onChange={this.handleChange}/>
                                    </div>

                                    <Button type="submit" className="btn btn-primary btn-block">Edit</Button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
            </div>
        );
    }
}

export default Account;