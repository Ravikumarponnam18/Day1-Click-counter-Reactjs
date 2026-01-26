import { useState } from 'react'
import './clickcounter.css'

const ClickCounter = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="appContainer">
            <div className="counterCard">
                <h1 className="mainHeading">Click Counter</h1>

                <div className="countCircle">
                    <span className="countNumber">{count}</span>
                </div>

                <p className="paragraphTag">
                    Click the button to increase the count
                </p>

                <div className="buttonGroup">
                    <button className="primaryBtn" onClick={() => setCount(count + 1)}>
                        ➕ Click Me
                    </button>

                    <button className="secondaryBtn" onClick={() => setCount(0)}>
                        🔄 Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClickCounter
