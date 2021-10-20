import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './Expert.css'
const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div>
            <Container>
                <Col>
                    <Card className="card-container">
                        <Card.Img className="card-img" variant="top" src={img} />
                        <Card.Body className="card-container mb-5">
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <h3>{expertize}</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default Expert;