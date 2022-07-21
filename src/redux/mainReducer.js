const initialState={
    count:0
}
export const mainReducer=(state=initialState,action)=>{
    console.log("action",action)
    switch(action.type){
        case 'INCREMENT':return{
          count:state.count+1
        }
        case 'DECREMENT':return{
            count:state.count-1
        }
        default :return state
    }
}
