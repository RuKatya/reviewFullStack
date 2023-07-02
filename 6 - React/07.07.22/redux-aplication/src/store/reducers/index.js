import { PLUS, MINUS, RESET } from "../constants"

//reducer
export const counter = (state=0, action)=>{
    switch(action.type) {
        case PLUS:{
            return state +1 
        }
        case MINUS:{
            return state -1 
        }
        case RESET:{
            return 0
        }
        default:{
            return state;
        }
    }
}