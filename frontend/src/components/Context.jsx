import { createContext, useState } from "react";

const CounterContext = createContext(null);

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const obj = {
        count,
        setCount
    }

    return (
        <CounterContext.Provider value={obj}>
            {children}
        </CounterContext.Provider>
    )
}


export { CounterContext, CounterProvider }