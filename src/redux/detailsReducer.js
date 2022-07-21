const initialState={
    data:[]
}
export const detailsReducer=(state=initialState,action)=>{
    console.log("line 5",action)
    switch(action.type){
        
        case 'PUT_DETAILS':
        return{
            data:[...state.data,action.payload]
        }
        case 'CLEAR':
        return{
            data:[]
        }

        
        
        default :return state
    }
}
