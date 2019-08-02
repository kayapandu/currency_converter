const initialState = {
    initialValue: 10,
    rates: [],
    activeRates: []
}

export const rates = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_DATA':
            return ({
                ...state,
                rates: action.payload
            })
        case 'UPDATE_INITIAL_VALUE':
            return ({
                ...state,
                initialValue: action.payload
            })
        case 'ADD_ACTIVE_RATES':
            return ({
                ...state,
                activeRates: [
                    ...state.activeRates,
                    action.payload
                ]
            })
        case 'REMOVE_ACTIVE_RATES':
            return ({
                ...state,
                activeRates: state.activeRates.filter(ccy => ccy !== action.payload)
            })
        default:
            return state;
    }
}

export default rates;