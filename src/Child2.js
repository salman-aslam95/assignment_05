import { useReducer } from "react";
import  ourReducer  from "./ourRedux.js";

const Child2 = () => {

    let [state, dispatch] = useReducer(ourReducer, 1);

    return (
        <div>
            <h2>This is second child using Counter Reducer</h2>

            <h3>Value of Counter is: {state}</h3>
            <button className="in-red" onClick={() => dispatch('increament')}>Increament Reducer</button>
            <button className="de-red" onClick={() => dispatch('decreament')}>Decreament Reducer</button>
        </div>
    )
}

export default Child2