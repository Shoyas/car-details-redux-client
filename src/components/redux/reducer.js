const initialState = {
    items: [],
    loading: false,
    error: null,
}

const carDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FETCH_CAR_DETAIL_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "FETCH_CAR_DETAIL_SUCCESS":
            return {
                ...state,
                loading: false,
                items: action.payload,
            };
        case "FETCH_CAR_DETAIL_FAILURE":
            return {
                ...state,
                loading: false,
                items: action.error,
            };
        default:
            return state;
    }
}

export default carDetailReducer;