import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

function AboutCard(props) {
  return (
    <div>
      <Card style={{ width: '20rem', flex: 1 }}>
        <CardImg src={ props.photo } alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{ props.name }</CardTitle>
          <CardText style={{textAlign: 'left'}}>{ props.bio }</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutCard;