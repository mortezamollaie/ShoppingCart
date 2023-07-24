import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";

import {
  Navbar as NavbarBs,
  Button,
  Modal,
  ModalHeader,
} from "react-bootstrap";
import { BsCart } from "react-icons/bs";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavbarBs className="border-bottom border-secondary">
        <NavbarBs.Collapse className="justify-content-end">
          <Button
            onClick={handleShow}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            ({productsCount}) <BsCart className="mx-2"></BsCart>
            سبد خرید
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal
        show={showModal}
        onHide={handleClose}
        contentClassName="card-bg"
        dir="rtl"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>سبد خرید</Modal.Title>
          <Modal.Body>
            {productsCount > 0 ? (
              <>
                <h3 className="mb-4">سبد خرید</h3>
                {cart.items.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  ></CartProduct>
                ))}
              </>
            ) : (
              <h3>سبد خرید خالی است</h3>
            )}
            <Button
              onClick={handleClose}
              variant="btn btn-outline-variant"
              className="mt-4 mx-3 text-white"
            >
              بستن
            </Button>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Navbar;
