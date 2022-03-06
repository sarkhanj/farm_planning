import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Analysis from "./components/Analysis";

const App =()=> {
  const [fieldId, setFieldId] = useState(0);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home setFieldId = {setFieldId}/>} />
        <Route exact path="/Analysis" element={<Analysis fieldId={fieldId}/>} />
      </Routes>
    </div>
  );
}

export default App;
