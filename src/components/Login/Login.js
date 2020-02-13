import React from 'react';
import login from "../../resources/login.png";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (localStorage.getItem( this.state.email ) === this.state.password ) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem('correo', this.state.email);
            window.location.href = "/";        
        } else {
            alert("Incorrect Credentials")
        }

    }

    render() {
        return (
            <MDBContainer style={{ marginTop: "80px" }}>
                <MDBRow>
                    <MDBCol size={8} md={4} className="offset-2 offset-md-4">
                        <p className="h3 text-center">Task Planner</p>
                    </MDBCol>
                    <MDBCol size={4} md={2} className="offset-4 offset-md-5">
                        <img src={login} className="img-fluid"></img>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md={12}>
                        <form onSubmit={this.handleSubmit}>
                            <div className="grey-text">
                                <MDBInput
                                    label="Type your email"
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                />
                                <MDBInput
                                    label="Type your password"
                                    type="password"
                                    validate
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn gradient="aqua" type="submit">Login</MDBBtn>
                            </div>
                        </form>
                        <div className="text-center" style={{ marginTop: "20px" }}>
                            <a href="/signUp">Create Account</a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }



}