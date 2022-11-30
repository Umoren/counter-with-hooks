
import { useState } from "react";
import { Helmet } from "react-helmet";
import useCounter from "../hooks/useCounter";

export const CounterScreen = () => {
    const initialValue = {
        typecount: 0
    }
    const [form, setForm] = useState(initialValue)
    const count = useCounter(0)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        count.typeCount(form.typecount)
        console.log(e.target.name, e.target.value)
    }

    return (
        <main className="Counter">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Counter Page </title>
            </Helmet>
            <h1>Counter App using Custom Hooks</h1>
            <p className="count">{count.value}</p>
            <section className="controls">
                <button onClick={count.increment}>Increment</button>
                <button onClick={count.reset}>Reset</button>
                <button onClick={count.decrement}>Decrement</button>

            </section>
            <section className="controls">
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        count.typeCount(form.typecount)
                    }}
                >
                    <label htmlFor="set-to">Set Count</label>
                    <input
                        id="set-to"
                        name="typecount"
                        type="number"
                        value={count.value}
                        onChange={handleChange}

                    />
                    <input type="submit" />
                </form>
            </section>
        </main>
    );
};

export default CounterScreen;
