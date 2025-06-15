const InitialeState = {
    Clients: [],
    SearchValue: ''  // ajout de la valeur de recherche dans le store
}

export default function Reducer(state = InitialeState, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                Clients: [...state.Clients, action.payload]
            }
        case 'DELETE':
            return {
                ...state,
                Clients: state.Clients.filter((_, i) => i !== action.payload)
            }
        case 'UPDATE':
            return {
                ...state,
                Clients: state.Clients.map((e, i) =>
                    i === action.payload.index ? action.payload.DataUP : e
                )
            }
        case 'SET_SEARCH':  // nouveau case pour modifier la recherche
            return {
                ...state,
                SearchValue: action.payload
            }
        default:
            return state
    }
}
