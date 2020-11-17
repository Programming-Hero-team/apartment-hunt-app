import React from 'react';
import SideBar from '../../Share/SideBar/SideBar';
import { useForm } from 'react-hook-form';


const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        
        fetch('https://fathomless-harbor-12740.herokuapp.com/makeAdmin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    if (data) {
        alert('Admin created successfully')
    }
    };
    return (
        <div className="row container d-flex justify-content-center">
            <div className="col-sm-3">
                <SideBar></SideBar>
            </div>
            <section className="col-sm-6">          
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="email" className="form-control m-2" placeholder="Email" type="email" ref={register({ required: true })}/>             
                <input className="form-control m-2" type="submit" value="Make a Admin"/>
            </form>          
            </section>
        </div>
    );
};

export default AddAdmin;