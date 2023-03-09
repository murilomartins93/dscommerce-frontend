import "./styles.css";
import cartImg from "../../assets/cart.svg";
import { useContext, useState } from "react";
import * as cartService from "../../services/cart-service";
import { ContextCartCount } from "../../utils/context-cart";

function CartIcon() {
  const [cart, setCart] = useState(cartService.getCart());

  const { contextCartCount } = useContext(ContextCartCount);

  return (
    <>
      <img src={cartImg} alt="Carrinho de compras" />
      {
        contextCartCount > 0 && 
        <div className="dsc-cart-count">{contextCartCount}</div>
      }
    </>
  );
}

export default CartIcon;
