import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Themechanging from "./components/Themechanging";
// import {incNumber,decNumber} from "./actions/index"


function App() {
  const theme = useSelector((state) => state.changeTheTheme);
  const myState = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div className="App" style={{ backgroundColor: theme === "DARK" ? "black" : "white" }}>
      <Themechanging/>
      {/* <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h3>Using Redux</h3>
        <div className="quantity">
          <button onClick={()=> dispatch(decNumber())} className="quantity-minus" title="decrement">-</button>
          <input name="quantity" type="text" className="quantity-inp" value={myState}/>
          <button onClick={()=> dispatch(incNumber())} className="quantity-plus" title="increment">+</button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
