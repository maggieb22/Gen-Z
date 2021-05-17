import React from 'react';
import {
    Row, 
    Col, 
    Container
} from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

import ScrollableAnchor from 'react-scrollable-anchor'

import module1Image from '../photos/module1.png'


function Modules() {
    return (
        <div>            
            <div class="my-5">
            <Container>
                <Row className="justify-content-md-center">                    
                    <h2 style={{textAlign: "left", fontWeight: "bold", color: "584E4E", padding: "1rem"}}>Modules</h2>
                </Row>
                <Row>
                    <div class="fixed-left">
                        <CardBody>
                        <CardTitle tag="h5">Resources</CardTitle>
                        <a href='#mod1'><CardText className="mb-2 text-muted">Module 1</CardText></a>
                        <a href='#mod2'><CardText className="mb-2 text-muted">Module 2</CardText></a>
                        <a href='#mod3'><CardText className="mb-2 text-muted">Module 3</CardText></a>
                        <a href='#mod4'><CardText className="mb-2 text-muted">Module 4</CardText></a>
                        <a href='#mod5'><CardText className="mb-2 text-muted">Module 5</CardText></a>
                        <a href='#mod6'><CardText className="mb-2 text-muted">Module 6</CardText></a>
                        </CardBody>
                    </div>                    
                    <Col>
                        <Card>
                            <a href="https://docs.google.com/presentation/d/1FszR9vD1uTSaHS9VDeGRDQlYnC9W0gN9fwVoRwE-sno/edit?usp=sharing"><CardImg top width="100%" src={module1Image} alt="Module 1 Photo" /></a>
                            <CardBody>
                            <ScrollableAnchor id={'mod1'}>
                                <CardTitle tag="h5">Module 1</CardTitle>
                            </ScrollableAnchor>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Doing Your Taxes</CardSubtitle>
                            </CardBody>
                        </Card>
                        <br></br>
                        <Card>
                            <CardImg top width="100%" src="https://mkar.com.ar/wp-content/uploads/2018/04/Blanco-Brillante.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">
                                <ScrollableAnchor id={'mod3'}>
                                    <div>Module 3</div>
                                </ScrollableAnchor>
                            </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor sit amet</CardSubtitle>
                            </CardBody>
                        </Card>
                        <br></br>
                        <Card>
                            <CardImg top width="100%" src="https://mkar.com.ar/wp-content/uploads/2018/04/Blanco-Brillante.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">
                                <ScrollableAnchor id={'mod5'}>
                                    <div>Module 5</div>
                                </ScrollableAnchor>
                            </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor sit amet</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg top width="100%" src="https://mkar.com.ar/wp-content/uploads/2018/04/Blanco-Brillante.jpg" alt="Card image cap" />
                            <CardBody>
                            <ScrollableAnchor id={'mod2'}>
                                <CardTitle tag="h5">Module 2</CardTitle>
                            </ScrollableAnchor>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor sit amet</CardSubtitle>
                            </CardBody>
                        </Card>
                        <br></br>
                        <Card>
                            <CardImg top width="100%" src="https://mkar.com.ar/wp-content/uploads/2018/04/Blanco-Brillante.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">
                                <ScrollableAnchor id={'mod4'}>
                                    <div>Module 4</div>
                                </ScrollableAnchor>
                            </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor sit amet</CardSubtitle>
                            </CardBody>
                        </Card>
                        <br></br>
                        <Card>
                            <CardImg top width="100%" src="https://mkar.com.ar/wp-content/uploads/2018/04/Blanco-Brillante.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">
                                <ScrollableAnchor id={'mod6'}>
                                    <div>Module 6</div>
                                </ScrollableAnchor>
                            </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Lorem ipsum dolor sit amet</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>                    
                </Row>
                </Container>
            </div>
        </div>
    )
}

export default Modules;