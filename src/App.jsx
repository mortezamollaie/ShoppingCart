import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Shop from "./pages/shop";

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </Container>
  );
}

export default App;
