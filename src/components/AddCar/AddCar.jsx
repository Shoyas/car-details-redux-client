import React, { useState } from 'react';
import './AddCar.css';
import fakeData from '../Asset/FakeData/FakeData';



const AddCar = () => {
    
    const [information, setInformation] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (event) => {
        const newInformation = { ...information };
        newInformation[event.target.name] = event.target.value;
        setInformation(newInformation);
    }
    
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    console.log(information, file);

    const addCarBrandSubmit = (p) => {
        
        const formData = new FormData();
        // p.preventDefault();
        formData.append('file', file);
        formData.append('name', information.name)
        formData.append('description', information.description);
        
        fetch('http://localhost:5000/addCarDetail', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(success => {
            // alert("New brand added successfully", success);
        })
        .catch( error => {

        })
    }


    // Sending all data to Server from FakeData

    // const handleAddProduct = () => {
    //     fetch('http://localhost:5000/addCarDetail', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(fakeData)
    //     })
    // }



    return (
        <div className="container">

            <form onSubmit={addCarBrandSubmit}>
            
                <div className="form-group">
                    <label for="inputAddress"><strong>Brand Name</strong></label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputAddress" 
                        placeholder="Enter Brand Name"

                        name="name"
                        onBlur={handleBlur}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1"><strong>Enter description about brand</strong></label>
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        placeholder="Description about brand" 
                        rows="5"
                        
                        name="description"
                        onBlur={handleBlur}
                    >
                    </textarea>
                </div>
                <div>
                    <label for="exampleFormControlFile1"><strong>Choose brand's image</strong></label>
                    <br/>
                    <input 
                        type="file" 
                        id="exampleFormControlFile1"

                        name="image"
                        onChange={handleFileChange}

                    />
                   
                </div>

                {/* <input type="submit" /> */}

                <button type="submit" className="btn btn-primary submitting-button">Add New Brand</button>

            </form>

            {/* <button onClick={handleAddProduct}>Add car</button> */}

        </div>
    );
};

export default AddCar;