import React from 'react';
import './ServiceMain.scss'
const ServiceMain = ({service}) => {
    const {logo, title, details} = service
    return (
        <div className="col-md-4">
            <div className="service-container">
                <img src={logo} alt="" className="service-logo mt-4"/>
                <h5 className="service-title mt-2 mb-2">{title}</h5>
                <p className="service-details">{details}</p>
            </div>
            
        </div>
    );
};

export default ServiceMain;