import React from 'react';
import {
  Row, 
  Col, 
  Container, 
  Card, 
  CardTitle, 
  CardText, 
  Button
} from 'reactstrap';

import './Home.css';
import Contact from './Contact.js'

const Home = props => {
  return (
    <React.Fragment>
      <div class="banner vertical-center">
        <Container>
          <Row>
            <Col md={{ size: 4, offset: 8}} className="text-right">
              <h1>The Gen Z Project</h1>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 3, offset: 9}}>
              <p>The Gen-Z Project provides Brown University mentors to teach personal finance to high school students.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Row className="mt-5 justify-content-md-center">
          <h1 class="mx-3">By Gen-Z, For Gen-Z</h1>
        </Row>
        <Row className="mt-4 mb-4 justify-content-md-center">
          <Col lg={{ size: 8, offset: 2}} className="center mx-3">
            <p className="description">At The Gen-Z Project we recognize the lack of personal financial education provided for high schoolers. 
              Using our position as college students, we aim to help younger students learn difficult financial topics, 
              such as investing, taxes, college loans, credit, and budgeting. More about us. {/* add link here*/}
            </p>
          </Col>
        </Row>
      </div>
      <div class="my-5">
        <Container>
          <Row>
            <Col>
              <Card className="shadow border-0 card p-4 my-3">
                <CardTitle tag="h2">Support</CardTitle>
                <CardText>
                  Lesson plans designed by leaders in the personal finance industry and 
                  refined by current college students provide structure and simplification 
                  of complicated topics for high school students. Additional resources will
                  be available on this website for students to use.
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card className="shadow border-0 card p-4 my-3">
                <CardTitle tag="h2">Structure</CardTitle>
                <CardText>
                  Lessons taught by Brown University students provide a near-to-peer system 
                  to actively engage young adults. With small team sizes, students will have 
                  the opportunity to ask questions and direct lessons towards topics that are 
                  relevant to them. Brown students will not be seen as teachers to high school 
                  students, but as mentors guiding them towards knowledge in personal finance.
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card className="shadow border-0 card p-4 my-3">
                <CardTitle tag="h2">Incentive</CardTitle>
                <CardText>
                  Through participating in the Gen-Z Project, students will come away with 
                  extensive knowledge regarding personal finance, and may compete in a final 
                  competition against other students for a monetary reward. This system provides 
                  an incentive for students to participate as they may increase their money in 
                  both the short and long term.
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="my-5 pt-5 pb-3" style={{ backgroundColor: 'white' }}>
        <Container style={{ backgroundColor: 'white' }}>
          <Row className="justify-content-md-center">
            <Col>
              <h2>Want to join or partner with us?</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center my-5">
            <Col>
              <Button className="mx-3">For Mentors</Button>
              <Button className="mx-3">For Schools</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="my-5">
        <Contact />
      </div>
    </React.Fragment>
  )
}

export default Home;