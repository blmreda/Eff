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