import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";

import Shop from "./pages/shop";

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
