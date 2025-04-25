// src/redux/reducers/userReducer.js
const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_USERS_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_USERS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  