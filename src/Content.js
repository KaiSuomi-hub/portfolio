import './App.css'
import 'jquery';
import '@popperjs/core'; 
import { Container, Col, Row, } from 'react-bootstrap/';

function Content({Para}) {
    return (
            <Container fluid >
            <Row><Col><pre></pre></Col></Row>
            <Row className="justify-content-lg-center">
                <Col sm={7} id="Rigth">
                {Para}
                </Col>
            </Row>
            </Container>
);
}
export default Content;
