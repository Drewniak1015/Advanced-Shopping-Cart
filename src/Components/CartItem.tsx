import { useShoppingCart } from "../Context/ShoppingCartContext";
import items from "../data/items.json";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeCartQuantity } = useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" className="d-flex align-items-center">
      {/* do fixa gap */}
      <img
        src={item.imgUrl}
        alt=""
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto m-2">
        <div>
          {item.name}{" "}
          <span className="text-muted" style={{ fontSize: ".65rem" }}>
            x{quantity}
          </span>
        </div>
        <div
          className="text-muted "
          style={{ fontSize: "0.75rem", margin: "auto" }}
        >
          {formatCurrency(item.price)}
        </div>
      </div>{" "}
      <div className="text-muted m-2" style={{ fontSize: "0.75rem" }}>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeCartQuantity(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
