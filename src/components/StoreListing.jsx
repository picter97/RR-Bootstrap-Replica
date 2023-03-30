import React from 'react'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StoreListing() {
  return (
    <Container>
      <Row>
        <Col>Aldi</Col>
        <Col>Costco</Col>
        <Col>Bj's</Col>
      </Row>
      <Row>
        <Col>Walmart</Col>
        <Col>Stop & Shop</Col>
        <Col>ShopRite</Col>
      </Row>
    </Container>
  );
}

export default StoreListing;