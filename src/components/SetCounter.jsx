import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from './actions'

export const SetCounter = () => {

    const countFromStore = useSelector((state) => state.count);
    const [count, setCount] = useState(countFromStore);


    useEffect(() => {
        setCount(countFromStore)
    }, [countFromStore])


    return (
        <section className="controls">

        </section>
    );
};
