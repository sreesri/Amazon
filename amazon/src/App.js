import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch({
          type:"SET_USER",
          user:user
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    });

    return ()=>{
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
