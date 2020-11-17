import React from 'react';
import fakeDta from '../../FackData/FackData';
import { useParams } from 'react-router-dom';
import './RentHouse.scss'
import BookingForm from '../BookingForm/BookingForm';

const RentHouse = () => {
    const {houseKey} = useParams();
    const rentHouseDetails = fakeDta.find(house => house.id == houseKey)
    console.log(rentHouseDetails)
    const  {name,image, image2, image3, image4, image5, location,price, price_details, property_details,quality} = rentHouseDetails;
    
    const {rent_month, service_charge, security_deposit, flat_release_policy} = price_details;
    const {address_area, flat_size, Floor, additional_facilities, facilities,room_category} =  property_details;

    return (
        <div className="hunts2-container">
            <div className="hunt-header-container">
                <img src="https://img.techpowerup.org/201116/rectangle-13.jpg" alt="" className="hunt2-header-img"/>
                <div className="apartment-text-box">
                <h2 className="hunt2-header-title">Apartment</h2>
                </div>
            </div>
        
            <div className="row">
                <div className="col-md-8">
                <div className="HomeDetails-all-container">
                    <div className="home-details-container">
                       <img src={image} alt="" className="home-details-image"/>
                   </div>
                   <div className="image-image-details-container d-flex">
                        <img src={image2} alt="" className="home-details-sub-image"/>
                        <img src={image3} alt="" className="home-details-sub-image"/>
                        <img src={image4} alt="" className="home-details-sub-image"/>
                        <img src={image5} alt="" className="home-details-sub-image"/>
                   </div>

                    <div className="details-text-container">
                        <div className="details-title-text d-flex mt-2">
                            <h2 className="hunt-details-name">{name}</h2>
                            <h2 className="details-price">${price}</h2>
                        </div>
                        <p>{quality}</p>

                        <div className="price-details">
                            <h4 className="mt-4 mb-2">Price Details</h4>
                            <p>Rent/Month: {rent_month}</p>
                            <p>Service Charge: {service_charge}</p>
                            <p>Security Deposit: {security_deposit}</p>
                            <p>Flat Release Policy: {flat_release_policy}</p>
                        </div>

                        <div className="property-details">
                            <h4 className="mt-4 mb-2">Property Details</h4>
                            <p>Address & Area: {address_area}</p>
                            <p>Flat Size: {flat_size}</p>
                            <p>Floor: {Floor}</p>
                            <p>Room Category: {room_category}</p>
                            <p>Facilities: {facilities}</p>
                            <p>Additional Facilities: {additional_facilities}</p>
                        </div>

                    </div>
                </div>
                   

                </div>
                <div className="col-md-3 ml-5">
                <h4 >  Book Your House</h4>
                <BookingForm name={name} price={price}></BookingForm>
                </div>
            </div>

        </div>
        
    );
};

export default RentHouse;