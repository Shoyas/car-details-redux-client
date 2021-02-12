import React, { useContext } from 'react';
import { userContext } from '../../App';
import { useForm } from "react-hook-form";
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const {register, handleSubmit, errors} = useForm();
    
    const onSubmit = (admin) => {
        admin.createDate = new Date();
        fetch('http://localhost:5000/makeAdmin',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(admin)
        })
        .then(res => res.json())
        .then(success => {
            alert("Making admin successfully", success);
        })
        
    }
    return (
        <section>
            <div className="admin-form mt-5 mb-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="mb-3">Enter email address for making admin</h4>
                    <div className="d-flex mb-5">
                        <input type="email" ref={register({ required: true })} name="email" className="form-control form-element" placeholder="Email address"/>
                        <button type="submit" style={{'margin-left':'20px'}} class="btn btn-success">Submit</button> 
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;