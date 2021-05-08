import React from 'react';
import axios from 'axios';
import {
    Row, 
    Col, 
    Container,
    Button, 
    Form,
    Input
  } from 'reactstrap';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          subject:'',
          message: ''
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }

    onMsgChange(event) {
        this.setState({message: event.target.value})
    }

    submitEmail(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:'http://localhost:5877/send', 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
          } else if (response.data.status === 'fail') {
              alert("Message failed to send.")
          }
        })
    }

    resetForm() {
        this.setState({name: '', email: '',subject:'', message: ''})
    }

    render() {
        return (
            <div class="my-5">
                <h2>Contact Us</h2>
                <Container>
                    <Row className="justify-content-md-center">
                    <Col md="9">
                        <Form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
                                    method="POST">
                        <Input 
                            type="email" 
                            placeholder="Email:" 
                            className="my-2" 
                            aria-describedby="emailHelp"
                            required value={this.state.email} onChange=
                            {this.onEmailChange.bind(this)}
                        />
                        <Input 
                            type="text" 
                            placeholder="Subject:" 
                            className="my-2"
                            required value={this.state.subject}
                            onChange={this.onSubjectChange.bind(this)}
                        />
                        <Input 
                            type="textarea" 
                            placeholder="Message:" 
                            className="my-2"
                            required value={this.state.message}
                            onChange= {this.onMsgChange.bind(this)}
                        />
                        <div class="text-right">
                            <Button>Submit</Button>
                        </div>
                        </Form>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact;
