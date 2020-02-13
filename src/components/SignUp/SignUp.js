import React from 'react';
import user from "../../resources/user.svg";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

console.log("re khaa");
export class SignUp extends React.Component {

    constructor(props) {
        console.log("no entiendos")
        super(props);
        this.state = { email: '', password: '', repassword : '', name: '' }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.hanldePasswordChange = this.hanldePasswordChange.bind(this);
        this.hanldeRePasswordChange = this.hanldeRePasswordChange.bind(this);
        this.hanldenameChange = this.hanldenameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.password != this.state.repassword) {
            alert("Password unmatch");
        } else if(this.state.name && this.state.email && this.state.password && this.state.repassword ){
            localStorage.setItem(this.state.email,this.state.password);
            localStorage.setItem("name",this.state.name);
            window.location.href = "/login";
        }
        else{
            alert("incomplete fields")
        }
        
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }

    hanldePasswordChange(e) {
        this.setState({ password: e.target.value })
    }

    hanldeRePasswordChange(e){
        this.setState({ repassword: e.target.value })
    }

    hanldenameChange(e){
        this.setState({ name: e.target.value })
    }

    render() {
        console.log("kha");
        return (
            <MDBContainer style={{ marginTop: "40px" }}>
                <MDBRow>
                    <MDBCol size={8} md={4} className="offset-2 offset-md-4">
                        <p className="h3 text-center">Registration</p>
                    </MDBCol>
                    <MDBCol size={4} md={2} className="offset-4 offset-md-5">
                        <img src={user} className="img-fluid"></img>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md={12}>
                        <form onSubmit={this.onSubmit}>
                            <div className="grey-text">
                                <MDBInput
                                    label="Type your full name"
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    value={this.state.name}
                                    onChange={this.hanldenameChange}
                                />
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
                                    onChange={this.hanldePasswordChange}
                                />
                                <MDBInput
                                    label="Repeat your password"
                                    type="password"
                                    validate
                                    value={this.state.repassword}
                                    onChange={this.hanldeRePasswordChange}
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn gradient="blue" type="submit">Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }

}