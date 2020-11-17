import React from 'react';
import './HuntsMain.scss'
import { FaBed, FaBath } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const HuntsMain = ({hunt}) => {
  console.log(hunt);
  const  {name,image,location,bedrooms,bathrooms,price, id} = hunt;
  const history = useHistory()
  const handleDetails = (id) => {
        history.push(`/details/${id}`)
  }
   
    return (
       <div className="col-md-4">
            <div className="hunt-container">
            <div className="header-sub-container">
                <img src={image} className="hunt-image" alt=""/>
                <h5 className="mt-2 hunt-name">{name}</h5>
                <p className="details-text">{location}</p>
                <div className="capacity-container d-flex details-text">
                    {/* <div className="bedroom-container"></div> */}
                    <p className="ml-4 mr-4"><FaBed /> {bedrooms}</p>
                    <p><FaBath /> {bathrooms}</p>

                    {/* <div className="bathroom-container"> </div> */}
                    
                   
                </div>

                <div className="price-details-container  d-flex mt-2">
                    <div className="price-container ml-4 mr-5">
                        <h4 className="price-text">${price}</h4>
                    </div>
                    <div className="details-container">
                        <button onClick={() =>  handleDetails(id)} className="view-details-btn"> View Details</button>
                    </div>

                </div>
            </div>
        </div>
       </div>
    );
};

export default HuntsMain;