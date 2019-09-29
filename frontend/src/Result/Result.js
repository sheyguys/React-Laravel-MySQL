import React, { Component } from "react"
import { Form } from "react-bootstrap"
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from "react-bootstrap"
import "./Result.css"

class Result extends Component {
    constructor(prop) {
        super(prop)

        this.state = { row:[] }
    }

    componentDidMount() {
        var Allmember = []
        axios.get('http://localhost:8000/api/employees').then(response => {
          console.log(response.data);
          response.data.forEach(member => {
            Allmember.push(member)
          })
          this.setState({ row : Allmember })
        })
        .catch(error => {
          console.log(error);
        });
      }
    
    handleDelete(id){
        axios.delete('http://localhost:8000/api/employee/'+id)
        console.log(id);
        alert('Delete Complete!!');
    }

    refresh(){
        window.location.reload();
    }

    render(){
        return (
            <div>
                <Form>
                    <h1>EMPLOYEE RECORDS</h1>                
                    <br></br>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Eng Name</TableCell>
                                <TableCell>Thai Name</TableCell>
                                <TableCell>ID.card</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Facebook</TableCell>
                                <TableCell>DELETE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.row.map(member => (
                            <TableRow key={member.id}>
                                <TableCell>{member.enName}</TableCell>
                                <TableCell>{member.thName}</TableCell>
                                <TableCell>{member.idcard}</TableCell>
                                <TableCell>{member.phone}</TableCell>
                                <TableCell>{member.address}</TableCell>
                                <TableCell>{member.email}</TableCell>
                                <TableCell>{member.facebook}</TableCell>
                                <TableCell><Button variant="danger" onClick={() => this.handleDelete(member.id)}>DELETE</Button></TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <br></br>
                    <center>
                    <Button variant="warning"  className="Button" onClick={this.refresh}>Refresh</Button>
                    </center>
                </Form>
            </div>

        )
    }
}
export default Result;