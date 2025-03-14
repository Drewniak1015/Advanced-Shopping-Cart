import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, CartQuantity } = useShoppingCart();

  return (
    <NavbarBS className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>{" "}
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>{" "}
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
          onClick={openCart}
        >
          <FaCartShopping />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-iems-cene"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%,25%)",
            }}
          >
            {CartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
