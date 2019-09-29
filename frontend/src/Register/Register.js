import React, { Component } from "react"
import "./Register.css"
import { Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { Link } from 'react-router-dom';
import firebase from "firebase"
import axios from 'axios';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
    apiKey: "AIzaSyC_u27mI5neEM6BVCM1yqrAN-WHTk8-QKE",
    authDomain: "course-online-b26e1.firebaseapp.com"
})

class Register extends Component {

    state = { 
        isSigndIn: false,
        thName: '',
        enName: '',
        idcard: Number,
        facebook: '',
        email: '',
        address: '',
        phone: '',
    };
    
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callback: {
            signInSuccess: () => false
        }
    };

    componentDidMount = () => {

        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSigndIn:!!user})
        })
    };

    handleChangeMemberTHname  = event => {
        this.setState({ MemberTHname: event.target.value });
    };

    handleChangeMemberENname  = event => {
        this.setState({ MemberENname: event.target.value });
    };

    handleChangeMemberIDcard  = event => {
        this.setState({ MemberIDcard: parseInt(event.target.value) });
    };

    handleChangeMemberAddress  = event => {
        this.setState({ MemberAddress : event.target.value });
    };

    handleChangeMemberPhone  = event => {
        this.setState({  MemberPhone: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
            axios.post(`http://localhost:8000/api/employee`, {
                thName: this.state.MemberTHname,
                enName: this.state.MemberENname,
                idcard: this.state.MemberIDcard,
                facebook: firebase.auth().currentUser.displayName,
                email: firebase.auth().currentUser.email,
                address: this.state.MemberAddress,
                phone: this.state.MemberPhone
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            console.dir(this.state);
            alert('Post Complete!!');
    };

    render(){
    return (
        <div>
            <Form>
                <h1>PERSONAL INFORMATION</h1>
                <br></br>
                <Form.Group controlId="formTHName">
                    <Form.Label>Thai name</Form.Label>
                    <Form.Control  required type="thname" placeholder="Enter Thai name" onChange={this.handleChangeMemberTHname} />
                </Form.Group>

                <Form.Group controlId="formENName">
                    <Form.Label>English name</Form.Label>
                    <Form.Control  required type="engname" placeholder="Enter English name" onChange={this.handleChangeMemberENname} />
                </Form.Group>

                <center>
                {this.state.isSigndIn ? (
                    <span>
                        <h1>Signed In!</h1>
                        <h1>FaceBook: {firebase.auth().currentUser.displayName}</h1>
                        <h1>Email: {firebase.auth().currentUser.email}</h1>
                        <br></br>
                        <img alt="profile picture" src={firebase.auth().currentUser.photoURL + "?height=500"}/>
                    </span>
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
                </center>

                <Form.Group controlId="formIDcard">
                    <Form.Label>IDcard</Form.Label>
                    <Form.Control type="idcard" placeholder="Enter ID Card" onChange={this.handleChangeMemberIDcard} />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="Enter phone" onChange={this.handleChangeMemberPhone} />
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address" placeholder="Enter address" onChange={this.handleChangeMemberAddress} />
                </Form.Group>

                <center>
                <Button variant="primary" type="Confirm" className="Button" onClick={this.handleSubmit}>
                    Confirm
                </Button>
                <br></br><br></br>
                <Link to="/result">
                    <Button variant="success">Result</Button>
                </Link>
                </center>
                
            </Form>
    </div>
    )
  }
}
  
export default Register;