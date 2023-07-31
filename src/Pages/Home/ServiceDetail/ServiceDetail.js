import React, { useEffect, useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { id } = useParams(0);

    // const [servicesDetails, setServicesDetails] = useState([]);

    const [serviceDetail, setServiceDetail] = useState({});

    useEffect(() => {
        fetch('../servicce.json')
            .then((res) => res.json())
            .then((data) => {
                let serv = data.find(p => p.id == id);
                console.log(serv);
                setServiceDetail(serv);
            });
    }, []);

    // useEffect(() => {
    //     const foundService = servicesDetails.find(
    //         (data) => data.id === id
    //     );

    //     console.log(foundService);

    //     // let serviceDetservicesDetails.filter( data => data.id === id);
    //     setServiceDetail(foundService);
    // }, [servicesDetails]);

    return (
        <div>
            <h1>{id}</h1>
            <h2>This is sigle employee {serviceDetail?.name}</h2>
            <Container>
                <Col>
                    <Card className="services-container">
                        <Card.Img className="service-img" variant="top" src={serviceDetail?.img} />
                        <Card.Body>
                            <Card.Title>{serviceDetail?.name}</Card.Title>
                            <Card.Text>
                                {serviceDetail?.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>

        </div>
    );
};

export default ServiceDetail;
