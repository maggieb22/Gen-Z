import React from 'react';

import {
    Row, 
    Col, 
    Container
  } from 'reactstrap';

import {
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

function FAQ() {
    return (
        <div>
            <h2 style={{textAlign: "center", fontWeight: "bold", color: "584E4E", padding: "3rem"}}>FAQ</h2>
            <Container>
            <Row>
              <Col>
                <Card>
                    <CardBody>
                    <CardTitle tag="h5">
                        <div className="mb-2 text-muted">For Students</div>
                    </CardTitle>
                    </CardBody>
                </Card>
                <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        <div>Who is the program for?</div>
                    </CardTitle>
                    <p>
                        Add more info about the service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, condimentum nibh. Donec hendrerit dui ut nisi tempor scelerisque.
                    </p>
                </CardBody>
                </Card>
                <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        <div>What will I learn?</div>
                    </CardTitle>
                    <p>
                        Add more info about the service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, condimentum nibh. Donec hendrerit dui ut nisi tempor scelerisque.
                    </p>
                </CardBody>
                </Card>
                <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        <div>What is the time commitment?</div>
                    </CardTitle>
                    <p>
                        Add more info about the service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, condimentum nibh. Donec hendrerit dui ut nisi tempor scelerisque.
                    </p>
                </CardBody>
                </Card>
                <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        <div>How do I sign up?</div>
                    </CardTitle>
                    <p>
                        Add more info about the service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, condimentum nibh. Donec hendrerit dui ut nisi tempor scelerisque.
                    </p>
                </CardBody>
                </Card>
              </Col>
              <Col>
                <Card>
                {/* <h2 style={{textAlign: "left", fontWeight: "bold", color: "584E4E", padding: "3rem"}}>Our Team</h2> */}
                <CardBody>
                    <CardTitle tag="h5">
                        <div className="mb-2 text-muted">For Mentors</div>
                    </CardTitle>
                    </CardBody>
                </Card>
                <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        <div>What qualifications do I need?</div>
                    </CardTitle>
                    <p>Add more info about the service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, condimentum nibh. Donec hendrerit dui ut nisi tempor scelerisque.</p>
                </CardBody>
                </Card>
                <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        <div>Do I have to be in college?</div>
                    </CardTitle>
                    <p>Add more info about the service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, condimentum nibh. Donec hendrerit dui ut nisi tempor scelerisque.</p>
                </CardBody>
                </Card>
                <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        <div>What is the time commitment?</div>
                    </CardTitle>
                    <p>
                        Add more info about the service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, condimentum nibh. Donec hendrerit dui ut nisi tempor scelerisque.
                    </p>
                </CardBody>
                </Card>
                <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        <div>How do I sign up?</div>
                    </CardTitle>
                    <p>
                        Add more info about the service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, condimentum nibh. Donec hendrerit dui ut nisi tempor scelerisque.
                    </p>
                </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          <br></br>
          <br></br>
        </div>
    )
}

export default FAQ;