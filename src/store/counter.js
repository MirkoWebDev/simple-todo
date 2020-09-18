import React from "react";

import useGlobal from "./store";
import { renderTime } from "../utils";

const Counter = () => {
    const [globalState, globalActions] = useGlobal();
    return (
        <div className="Counter">
            <p>
                Counter:
        {globalState.counter}
            </p>
            <button type="button" onClick={() => globalActions.addToCounter(1)}>
                +1 to global
      </button>
            <p>{renderTime()}</p>
        </div>
    );
};

export default Counter;
