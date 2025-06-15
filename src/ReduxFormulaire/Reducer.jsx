const InitialeState = {
    Clients : [],
}
export default function Reducer(state = InitialeState,action){
   switch (action.type){
        case 'ADD' :
            return{
                ...state,
                Clients : [...state.Clients,action.payload]
            }
            case 'DELETE' :
                return{
                    ...state,
                    Clients : [...state.Clients.filter((_,i)=> i !== action.payload)]
            }
        default:
            return state
   }
}