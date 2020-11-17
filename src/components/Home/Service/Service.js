import React from 'react';
import ServiceMain from '../ServiceMain/ServiceMain';
import '../ServiceMain/ServiceMain.scss'
const Service = () => {
    const services = [{
        id: 1,
        logo: 'https://img.techpowerup.org/201116/apartment-1.png',
        title: 'Wide Range of Properties',
        details: 'With a robust selection of popular properties on hand, as well as leading properties from experts',
    },{
        id: 2,
        logo: 'https://img.techpowerup.org/201116/affordable-1.png',
        title: 'Financing Made Easy',
        details: 'Our stress-free finance department that can find financial solutions to save you money.',
    },{
        id: 3,
        logo: 'https://img.techpowerup.org/201116/lessee-1.png',
        title: 'Trusted by Thousands',
        details: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users',
    }
    ]
    return (
        <div className = "hunts" id="service">
        <br/>
        <br/>
        <p className = "house-rent">Service</p>
      
        <h4 className="hunts-hunt">We're an agency tailored to all <br/>client's needs that always delivers</h4>
        <br/>
        <br/>
        <div className="row">
        {
            services.map(service => <ServiceMain service={service} key={service.id}></ServiceMain>)
        }
        </div>
    </div>
    );
};

export default Service;