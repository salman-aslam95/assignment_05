import { useContext } from "react";
import OurContext from "./ourContext";

const Child = ()=> {
    let CounterValue = useContext(OurContext); // ye pura variable dusry lfzo me "[count , setCount]" he.
    return(
      <div>
        <h2>This is first child using Counter Context.</h2>
        <h3>The value of Counter is: {CounterValue[0]}</h3>
        <button className="in-con" onClick={() => { CounterValue[1](++CounterValue[0]) } }>Increament Context</button>
        <button className="de-con" onClick={() => { CounterValue[1](--CounterValue[0]) }}>Decreament Context</button>
      </div>
    )
};

export default Child;