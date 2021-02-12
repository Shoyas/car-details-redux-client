import React from 'react';
import { Link } from 'react-router-dom';
import './BodyCars.css';

const BodyCars = (el) => {
    // console.log(el);
    // console.log(el.el.image.img);
    return (
        <div className="cart-item">
            
            <Link className="nav-link" to={`/carInfo/${el.el.name}`}>
                
                {
                    el.el.image ? <img className="img-fluid" src={`data:image/png;base64,${el.el.image.img}`} alt={el.el.name}/>
                    :
                    <img className="img-fluid" src={el.el.image} alt={el.el.name}/>
                    
                  
                }
                
                {/* {
                    el.el.image ? <img className="img-fluid" src={`data:image/png;base64,${el.el.image.img}`} alt={el.el.name}/>
                    :
                    // <img className="img-fluid" src={`https://afternoon-thicket-75984.herokuapp.com/allCarList/${el.el.image}`} alt={el.el.name}/>
                    
                    <img className="img-fluid" src={el.el.image} alt={el.el.name}/>
                    
                } */}
                
                <div className="space">
                    <h5>{el.el.name}</h5>
                </div>   
            </Link>
        </div>
    );
};

export default BodyCars;