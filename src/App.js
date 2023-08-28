import React, { useReducer } from "react";
import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_ADD,
  MEMORY_CLEAR,
  MEMORY_RECALL,
  applyNumber,
} from "./actions";
import { changeOperation } from "./actions";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numbersHandler = (e) => {
    dispatch(applyNumber(parseInt(e.target.value)));
    //console.log("numbersHandler çalıştı");
  };
  const operationHandler = (operation) => {
    dispatch(changeOperation(operation));
  };
  const clearHandler = () => {
    dispatch({ type: CLEAR_DISPLAY });
  };
  const addMemoryHandler = () => {
    dispatch({ type: MEMORY_ADD });
  };
  const clearMemoryHandler = () => {
    dispatch({ type: MEMORY_CLEAR });
  };
  const recallMemoryHandler = () => {
    dispatch({
      type: MEMORY_RECALL,
    });
  };
  console.log(state);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={addMemoryHandler} />
              <CalcButton value={"MR"} onClick={recallMemoryHandler} />
              <CalcButton value={"MC"} onClick={clearMemoryHandler} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={numbersHandler} />
              <CalcButton value={2} onClick={numbersHandler} />
              <CalcButton value={3} onClick={numbersHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={numbersHandler} />
              <CalcButton value={5} onClick={numbersHandler} />
              <CalcButton value={6} onClick={numbersHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={numbersHandler} />
              <CalcButton value={8} onClick={numbersHandler} />
              <CalcButton value={9} onClick={numbersHandler} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operationHandler("+")} />
              <CalcButton value={"*"} onClick={() => operationHandler("*")} />
              <CalcButton value={"-"} onClick={() => operationHandler("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandler} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
