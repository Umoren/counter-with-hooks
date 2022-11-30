export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const TYPECOUNT = 'TYPECOUNT';


export const incrementCount = () => {
    return { type: INCREMENT };
};

export const decrementCount = () => {
    return { type: DECREMENT };
};

export const resetCount = () => {
    return { type: RESET }
};

export const typeCount = (number) => {
    return {
        type: TYPECOUNT,
        payload: number
    }
}
