import React, { useState } from "react";
import "./Component.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {

        setCount(count + 1);
    }

    return (
        <div className="counter">
            <h3>You Clicked Button {count} times</h3>
            <button type="button" onClick={incrementCount}>Increment</button>
        </div>
    )
}

export default Counter
