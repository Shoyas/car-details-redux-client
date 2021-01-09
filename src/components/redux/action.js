import axios from "axios"

// This use for redux-thunk and async+await
export const fetchCarDetail = () => async(dispatch, getState) => {

    dispatch({
        type: "FETCH_CAR_DETAIL_REQUEST",
    });
    try{
        // for demo API link
        // const response = await axios.get("https://gentle-river-59668.herokuapp.com/volunteerItems");
        const response = await axios.get("http://localhost:5000/allCarList");
        dispatch({
            type: "FETCH_CAR_DETAIL_SUCCESS",
            payload: response.data,
        })
    } catch (error) {
        dispatch({
            type: "FETCH_CAR_DETAIL_FAILURE",
            error,
        })
    }

    
}



// This use for redux-thunk and async+await
// export const fetchCarDetailAgain = () => async(dispatch, getState) => {

//     const response = await axios.get("https://gentle-river-59668.herokuapp.com/volunteerItems");

//     console.log(response.data);

//     dispatch({
//         type: "FETCH_CAR_DETAIL_AGAIN",
//         payload: response.data,
//     })

// }
