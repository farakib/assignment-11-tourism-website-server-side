import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
           <Container>
  <Row>
    <Col xs><h2>Latest Posts</h2>
    <p>Traveling – It Leaves You Speechless, 
        Then Turns You Into A Storyteller</p>
    </Col>
    <Col xs={{ order: 12 }}>
         <h2>Twitter Feed</h2>
         <p>Thanks for writing in! 
             Please submit a ticket on our helpcenter,
              and our agents will be…</p>
     </Col>
    <Col xs={{ order: 1 }}>
        <h2>Instagram Feed</h2>
        <p>A Journey Is Always Best Measured In New Friends, 
            Rather Than Miles</p>
    </Col>
  </Row>
</Container>
            <hr />
            <p className="m-0">© 2020 All Rights Reserved Terms of Use</p>
        </div>
    );
};

export default Footer;