// src/redux/actions/userActions.js
export const fetchUsers = () => {
    return async dispatch => {
      dispatch({ type: 'FETCH_USERS_REQUEST' });
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
      }
    };
  };
      