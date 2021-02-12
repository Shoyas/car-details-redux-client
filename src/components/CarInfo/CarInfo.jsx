import React, { useContext, useEffect, useState } from 'react';
import './CarInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCarDetail } from '../redux/action';
import { userContext } from '../../App';

const CarInfo = () => {

    const name = useParams();
    const dispatch = useDispatch();

    const state = useSelector((state) => state) || {};
    // const {id, description} = state.items;
    useEffect(() => {
        dispatch(fetchCarDetail())
    }, []);

    // console.log(name);
    // console.log(state.items);

    const found = state.items?.find(ele => ele.name === name.name);
    // console.log(found);

    // Delete carBrand function's code
    const deleteCarBrand = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/deleteCar/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('Deleted successfully.........', result)
        })
    }

    // Loading carBrand information's code starts from here
    const [loadData, setLoadData] = useState(null) || {};
    const [isOpened, setIsOpened] = useState(false);

    const toggle = (id) => {
        // for toggle state
        setIsOpened(wasOpened => !wasOpened);

        // Loading carBrand information's function's code
        console.log(id);
        fetch(`http://localhost:5000/loadCar/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setLoadData(data);
        })
    }
    console.log(loadData);

    // Update the loading carBrand information's code from here
    const [update, setUpdate] = useState() || {};

    const handleUpdateValue = (upValue) => {
        upValue.preventDefault();
        const newUpdate = {...update};
        newUpdate[upValue.target.name] = upValue.target.value;
        setUpdate(newUpdate);
    }
    

    const submitUpdate = (id) => {
        id.preventDefault();
        id.stopImmediatePropagation();
        console.log("Hit inside", id);
        const updateDetails = {update};

        console.log(updateDetails);

        fetch(`http://localhost:5000/updateCar/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateDetails),
        })
        .then(res => res.json())
        .then(data => {
            console.log('Updated');
        })

    }

    // Protect sensitive area for users
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/getAdmin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setIsAdmin(data);
            console.log(data);
        })
    }, [])

    return (
        <div className="container text-center">
            {
                found?.image ? <img className="image-size img-fluid mt-5" src={`data:image/png;base64,${found?.image.img}`} alt=""/>
                :
                <img className="image-size img-fluid mt-5" src={found?.image} alt={found?.name}/>  
            }

            <h3 className="mt-5"><strong>{found?.name}</strong></h3>
            <h5 className="description-style">{found?.description}</h5>
            <div className="d-flex btn-items">
                <Link to="/home"><button className="btn btn-info">Ok</button></Link>
                {
                    isAdmin &&
                    <div className="">
                        <button className="btn btn-danger ml-5" onClick={() => deleteCarBrand(`${found?._id}`)}>Delete</button>
                        <button className="btn btn-secondary ml-5" onClick={ () => toggle(`${found?._id}`)}>Update</button>
                    </div>
                }
            </div>
            

            {
                isOpened && (
                    <div className="updateCarInfo mt-3 pt-5">

                        <h3>Update: {loadData?.name}</h3>
                        <br/>
                        <br/>
                        <form>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputAddress" 
                                placeholder="Enter Brand Name"
                                defaultValue={loadData?.name}
                                
                                name="name"
                                onBlur={handleUpdateValue}
                            />
                            <br/>
                            <br/>
                            <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                placeholder="Description about brand" 
                                rows="5"
                                defaultValue={loadData?.description}

                                name="description" 
                                onBlur={handleUpdateValue}
                            >
                            </textarea> 
                            <br/>
                            <br/>
                            <button onClick={ () => submitUpdate(`${found?._id}`)}>Submit</button>
                        </form>
                    </div>
                )
            }
        </div>    
    );
};

export default CarInfo;


                 