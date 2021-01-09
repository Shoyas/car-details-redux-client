import React, { useEffect } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarDetail } from '../../redux/action';
import './Body.css';
import BodyCars from './BodyCars';
import spinner from '../../Asset/image/spinner2.gif';


const Body = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    
    useEffect(() => {
        dispatch(fetchCarDetail())
    }, [])

    const renderCarInformation = () => {
        if(state.loading) {
            return (
                <div className="spinner-position">
                    <img src={spinner} alt="" srcset=""/>
                </div>
            )
        }
        return(
            state.items.map(el => {
                return(
                    <div className="col-md-3">
                        <BodyCars key={el.id} el={el}></BodyCars>
                    </div>   
                )
            }) 
        )
    };

    

    return (
        <section>
            <div className="container">
                <InputGroup  className="mb-5 p-5">
                    <FormControl 
                        placeholder="Enter Brand's Name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button className="btn-primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>

            <div className="container">
                <div className="container-fluid">
                    <div className="row">
                        {
                            renderCarInformation()      
                        }  
                    </div>             
                </div>
            </div>
        </section>
    );
};

export default Body;