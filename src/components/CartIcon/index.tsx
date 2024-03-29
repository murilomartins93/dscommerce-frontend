import "./styles.css";
import cartImg from "../../assets/cart.svg";
import { useContext } from "react";
import { ContextCartCount } from "../../utils/context-cart";

function CartIcon() {
  const { contextCartCount } = useContext(ContextCartCount);

  return (
    <>
      <img src={cartImg} alt="Carrinho de compras" />
      {contextCartCount > 0 ? (
        <div className="dsc-cart-count">{contextCartCount}</div>
      ): null}
    </>
  );
}

export default CartIcon;
