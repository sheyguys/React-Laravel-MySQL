import React, { Component } from "react"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import photolaravel from './laravel.png';
import photomysql from './mysql.png';
import "./Home.css"

class Home extends Component {
    render(){
        return (
            <div>
                <Form>
                    <center>
                    <h1>React Laravel MySQL</h1>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <br></br>
                    <img src={photolaravel}/>
                    <br></br>
                    <img src={photomysql}/>                  
                    <br></br>
                    <Link to="/register">
                    <Button variant="warning">Register</Button>
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to="/result">
                    <Button variant="success">Result</Button>
                    </Link>
                    </center>
                </Form>
            </div>

        )
    }

}
export default Home;