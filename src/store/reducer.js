
import { INCREMENT, DECREMENT, RESET, TYPECOUNT } from "./actions";

const initalCount = 0

export const reducer = (state = initalCount, action) => {

    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        case RESET:
            return state = 0
        case TYPECOUNT:
            return state = action.payload
        default:
            return state;
    }
}