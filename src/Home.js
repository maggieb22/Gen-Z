import React from 'react';
import {
  Row, 
  Col, 
  Container, 
  Card
} from 'reactstrap';

import './Home.css';

const Home = props => {
  return (
    <React.Fragment>
      <div class="banner vertical-center">
        <Container>
          <Row>
            <Col className="left" md={{ size: 5, offset: 7}}>
              <h1>The Gen Z Project</h1>
              <p>The Gen-Z Project provides Brown University mentors to teach personal finance to high school students.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Row lg="1" className="mt-5">
          <h1>By Gen-Z, For Gen-Z</h1>
        </Row>
        <Row className="mt-4 mb-4">
          <Col lg={{ size: 8, offset: 2}} className="center">
            <p className="description">At The Gen-Z Project we recognize the lack of personal financial education provided for high schoolers. 
              Using our position as college students, we aim to help younger students learn difficult financial topics, 
              such as investing, taxes, college loans, credit, and budgeting. More about us.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <Card>Card!</Card>
      </div>
      <Container>
      </Container>
    </React.Fragment>
  )
}

export default Home;