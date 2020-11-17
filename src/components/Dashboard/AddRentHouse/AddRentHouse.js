import React, { useState } from 'react';
import SideBar from '../../Share/SideBar/SideBar';

const AddRentHouse = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
  }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('location', info.location);
        formData.append('price', info.price);
        formData.append('bedRoom', info.bedRoom);
        formData.append('bathRoom', info.bathRoom);
        console.log(formData);
        
        
        fetch('https://fathomless-harbor-12740.herokuapp.com/addRentHouse', {
            method: 'POST',
            body: formData
    })
    .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.error(error)
                })
    };
    return (
        <div className="container">
            <section className="row container d-flex justify-content-center">
            <section className="col-sm-3">
                <SideBar></SideBar>
            </section>
            <section className="col-sm-9">
            <form onSubmit={handleSubmit}>
              <div className="row">
                  <div className="col-md-6">
                    <input name="name" onBlur={handleBlur} className="form-control m-2" placeholder="Package Name" type="text" required/>
                    <input name="location" onBlur={handleBlur} className="form-control m-2" placeholder="location" type="text" required/>
                    <input name="price" onBlur={handleBlur} className="form-control m-2" placeholder="price" type="number" required/>
                  </div>
                  <div className="col-md-6">
                  <input name="bedRoom" onBlur={handleBlur} className="form-control m-2" placeholder="No of Bed room" type="number" required/>
                    <input name="bathRoom" onBlur={handleBlur} className="form-control m-2" placeholder="No of bath room" type="number" required/>
                    <input name="file" onChange={handleFileChange} className="form-control m-2" placeholder="Thumbnail" type="file" required/>
                  </div>
              </div>
              <input className="form-control m-2" type="submit" value="Submit Your Review"/>
              </form>
            </section>
        </section> 
        </div>
    );
};

export default AddRentHouse;