import { createContext, ReactNode, useContext, useState } from "react";
import ShoppinggCart from "../Components/ShoppinggCart";
import { useLocalStorage } from "../hooks/UseLocalStorage";
type ShoppingCartProviderProps = {
  children: ReactNode;
};
type ShoppingCartContext = {
  openCart: () => void;
  CloseCart: () => void;
  CartQuantity: number;
  cartItems: CartItem[];
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeCartQuantity: (id: number) => void;
};
type CartItem = {
  id: number;
  quantity: number;
};
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setcartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setcartItems((curritem) => {
      if (curritem.find((item) => item.id === id) == null) {
        return [...curritem, { id, quantity: 1 }];
      } else {
        return curritem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setcartItems((curritem) => {
      if (curritem.find((item) => item.id === id)?.quantity === 1) {
        return curritem.filter((item) => item.id !== id);
      } else {
        return curritem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        });
      }
    });
  }
  function removeCartQuantity(id: number) {
    setcartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
      // poprzez filter tworzy nowa tablice gdzie nie ma itemu o danym id
    });
  }
  const CartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const openCart = () => setIsOpen(true);
  const CloseCart = () => setIsOpen(false);
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeCartQuantity,
        CartQuantity,
        cartItems,
        openCart,
        CloseCart,
      }}
    >
      {children}
      <ShoppinggCart isOpen={isOpen}></ShoppinggCart>
    </ShoppingCartContext.Provider>
  );
}
