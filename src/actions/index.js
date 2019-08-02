import axios from 'axios';

export const fetchData = (response) => {
    return ({
        type: 'FETCH_DATA',
        payload: response
    });
}

export const addActiveRates = (value) => {
    return ({
        type: 'ADD_ACTIVE_RATES',
        payload: value
    });
}

export const updateInitialValue = (value) => {
    return ({
        type: 'UPDATE_INITIAL_VALUE',
        payload: value
    })
}

export const removeActiveRates = (value) => {
    return ({
        type: 'REMOVE_ACTIVE_RATES',
        payload: value
    });
}

export const getData = () => {
    return(dispatch) => {
        axios.get('https://api.exchangeratesapi.io/latest?base=USD')
        .then(response => {
            dispatch(fetchData(response.data.rates))
        })
    }
}