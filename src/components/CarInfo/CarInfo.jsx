import React, { useEffect, useState } from 'react';
import './CarInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCarDetail } from '../redux/action';

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

    const found= state.items?.find(ele => ele.name === name.name);
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

    const [loadData, setLoadData] = useState(null) || {};
    const [isOpened, setIsOpened] = useState(false);

    const toggle = (ele) => {
        // for toggle state
        setIsOpened(wasOpened => !wasOpened);

        // Editing carBrand function's code
        console.log(ele);
        fetch(`http://localhost:5000/loadCar/${ele}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setLoadData(data);
        })
    }

    console.log(loadData);
    return (
        <div className="container text-center">
            {
                found?.image ? <img className="image-size img-fluid mt-5" src={`data:image/png;base64,${found?.image.img}`} alt=""/>
                :
                <img className="image-size img-fluid mt-5" src={found?.image} alt={found?.name}/>  
            }
            {/* <img className="image-size img-fluid mt-5" src={found?.image} alt="" srcset=""/> */}
            <h3 className="mt-5"><strong>{found?.name}</strong></h3>
            <h5 className="description-style">{found?.description}</h5>
            <button onClick={() => deleteCarBrand(`${found?._id}`)}>Delete</button>
            <button onClick={ () => toggle(`${found?._id}`)}>Update</button>
            
            {
                isOpened && (
                    <div className="updateCarInfo mt-3 pt-5">

                        <h3>Update: {loadData?.name}</h3>
                        <br/>
                        <br/>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputAddress" 
                            placeholder="Enter Brand Name"
                            value={loadData?.name}
                            name="name"
                        />
                        <br/>
                        <br/>
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            placeholder="Description about brand" 
                            rows="5"
                            value={loadData?.description}
                            name="description" 
                        >
                        </textarea> 

                    </div>
                )
            }
        </div>    
    );
};

export default CarInfo;


                 