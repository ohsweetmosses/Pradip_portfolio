import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contactt";
import Landing from "./pages/Landing"

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
