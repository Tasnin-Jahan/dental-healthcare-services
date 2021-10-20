import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([])
    useEffect(() => {
        fetch('./expertt.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, [])
    return (
        <div id="experts">
            <h2 className="text-primary mt-5 mb-3">Our Expert Doctors</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </Row>
        </div>
    );
};

export default Experts;