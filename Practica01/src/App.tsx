
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lista from "./components/Lista";
import Detalle from "./components/Detalle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </Router>
  );
}

export default App;


