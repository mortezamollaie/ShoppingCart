import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { cartContext } from "./context/CartContext";
import Navbar from "./components/Navbar";

import Shop from "./pages/shop";

function App() {
  return (
    <cartContext>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </Container>
    </cartContext>
  );
}

export default App;
