import { useState } from "react";
const Counter = () => {



    const [count, setCount] = useState(0)

    const handleIncrement = () => {

        setCount(count + 1)
    }

    const handleDecrement = () => {

        if (count > 0) {

            setCount(count - 1)

        }

    }

    return (
        <section className="counter-card">
            <header className="counter-header">
                <p className="counter-label">Team velocity</p>
                <span className="counter-pill">live</span>
            </header>

            <div className="counter-value">{count}</div>

            <div className="counter-actions">
                <button onClick={handleIncrement} className="counter-btn increment" type="button">
                    +
                </button>
                <button onClick={handleDecrement} className="counter-btn decrement" type="button">
                    -
                </button>
            </div>
        </section >
    )
}

export default Counter
