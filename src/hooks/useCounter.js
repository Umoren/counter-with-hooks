import { useState } from "react";

const useCounter = (initialValue) => {
    let [value, setValue] = useState(initialValue);

    const increment = () => setValue(prevValue => prevValue + 1);
    const decrement = () => setValue(prevValue => prevValue - 1);
    const reset = () => setValue(initialValue);
    const typeCount = (currentValue) => {
        setValue(currentValue)
    }

    return { value, increment, decrement, reset, typeCount };
};

export default useCounter;