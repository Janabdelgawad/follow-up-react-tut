import "./App.css";

import { useSelector, useDispatch }  from "react-redux";
import {add, sub} from "./counterSlice";
import { logInOut } from "./authSlice";



function App() {
  const counter = useSelector(state => state.counter);
  const { isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div>Counter: {counter.value}</div>
      <button onClick={(() => dispatch(add(5)))} style={{ marginRight: "10px" }}>Increase</button>
      <button onClick={(() => dispatch(sub(2)))}>Dncrease</button>

      <div>
        <button 
          onClick={() => dispatch(logInOut(15000))}
          style={{ marginTop: "20px"}}
          >
            {isLogged? "Log Out" : "Log In"}
            </button>
      </div>

    </div>
  );
}

export default App;
