import {BrowserRouter, Route, Routes} from "react-router-dom"
import Room from "./Pages/Room";
import Home from "./Pages/Home";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Room />} />
      <Route path="/home/:roomid" element={<Home />}></Route>
    </Routes>
   
    </BrowserRouter>
      
    </>
  );
}

export default App;
