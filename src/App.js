import { BrowserRouter,Routes,Route } from "react-router-dom";
import GetUsers from "./pages/GetUsers";
import React from "react";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import "../src/pages/style.css"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<GetUsers/>} />
    <Route path="/add" element={<Add/>}/>
    <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;