import './App.css'
import 'jquery';
import '@popperjs/core'; 
import { Container, Col, Row, } from 'react-bootstrap/';

function Content({Left,Para,Right}) {
    return (
            <Container fluid >
            <Row><Col><pre></pre></Col></Row>
            <Row className="justify-content-lg-center">
                {/* <Col sm={3} className="Rigth">{Left}</Col> */}
                <Col sm={7} id="Rigth">
                   
                        {Para}
                    
                </Col>

                {/*  <Col sm={3} className="Rigth">{Right}</Col> */}

            </Row>
            </Container>


  );
}

export default Content;

//{Left} {Para} {Right}