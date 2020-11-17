import React, { useState, useEffect } from 'react';
import '../HuntsMain/HuntsMain.scss';
import HuntsMain from '../HuntsMain/HuntsMain';
import fakedata from '../../FackData/FackData';

 const Hunts = () => {

    const [hunts, setHunts] = useState([])
    useEffect(() => {
        fetch('https://fathomless-harbor-12740.herokuapp.com/rentHouse' 
        )
        .then(res => res.json())
        .then(data => {
            setHunts(data)
            //console.log(data);
        })
    }, [])

    return (
        <div className = "hunts">
            <br/>
            <br/>
            <p className = "house-rent">House Rent</p>       
            <h4 className = "hunts-hunt">Discover the latest Rent <br/> available today</h4>
            <br/>
            <br/>
            <div className="row">
            {
                hunts.map(hunt => <HuntsMain hunt={hunt} key={hunt._id}></HuntsMain>)
            }
            </div>
        </div>
    );
};

export default Hunts;