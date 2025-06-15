export function ADD(Obj){
    return{
        type:'ADD',
        payload : Obj
    }
}

export function DELETE(index){
    return{
        type:'DELETE',
        payload : index
    }
}

export function UPDATE(NewObj, index) {
    return {
        type: 'UPDATE',
        payload: {
            index: index,
            DataUP: NewObj
        }
    }
}
// Actions.js
export function SET_SEARCH(value) {
    return {
        type: 'SET_SEARCH',
        payload: value
    }
}
