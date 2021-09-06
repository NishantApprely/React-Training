import React, { useState } from "react";
import "./InputBox.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {

        setCount(count + 1);
    }

    return (
        <div className="counter">
            <h2>You Clicked Button {count} times</h2>
            <button type="button" onClick={incrementCount}>Increment</button>
        </div>
    )
}

export default Counter
