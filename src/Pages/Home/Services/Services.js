import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./servicce.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            });
    }, [])
    return (
        <div id="services">
            <h2 className="text-primary mt-5 mb-3">Our services</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;