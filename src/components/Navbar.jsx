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
import "../index.css";

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
      <h1 className="main-nav__title">فروشگاه همراه دیجیتال</h1>
      <p className="main-nav__title">
        محصولات دیجیتال را ارزان ، سریع و مطمئن از ما بخواهید
      </p>
      <NavbarBs className="border-secondary main-nav">
        <Button
          onClick={handleShow}
          variant="btn btn-outline-secondary"
          className="text-white main-nav__item"
        >
          ({productsCount}) <BsCart className="mx-2"></BsCart>
          سبد خرید
        </Button>
        <NavbarBs.Collapse className="justify-content-end">
          <Button
            variant="btn btn-outline-secondary"
            className="text-white main-nav__item"
          >
            حساب کاربری
          </Button>
          <Button
            variant="btn btn-outline-secondary"
            className="text-white main-nav__item"
          >
            فروش اقساطی
          </Button>
          <Button
            variant="btn btn-outline-secondary"
            className="text-white main-nav__item"
          >
            جشنواره تابستانه
          </Button>
          <Button
            variant="btn btn-outline-secondary"
            className="text-white main-nav__item"
          >
            فروش ویژه
          </Button>
          <Button
            variant="btn btn-outline-secondary"
            className="text-white main-nav__item"
          >
            صفحه اصلی
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal
        show={showModal}
        onHide={handleClose}
        contentClassName="card-bg"
        dir="rtl"
      >
        <Modal.Header>
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
                <h3>مجموع قیمت: {cart.getTotalAmount()} تومان</h3>
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
