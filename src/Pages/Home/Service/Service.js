import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description } = service;
    return (
        <div>
            <Container>
                <Col>
                    <Card className="services-container">
                        <Card.Img className="service-img" variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description.slice(0, 150)}
                                <br />
                                <Link to={`/serviceDetail/${id}`}><button className="mt-3 service-button">Show Details</button></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default Service;