const count = 5;

function countReducer(state =count,action) {
    const{type,payload}=action;

    switch(type){
        case "INCREMENT" :
            return state+payload;

         case "DECREMENT" :
            return state-1;

            default :
            return state;

        

    }
}
export default countReducer;