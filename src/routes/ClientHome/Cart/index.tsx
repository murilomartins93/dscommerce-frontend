import "./styles.css";
import { useContext, useState } from "react";
import { OrderDTO } from "../../../models/order";
import { Link, useNavigate } from "react-router-dom";
import { ContextCartCount } from "../../../utils/context-cart";
import * as cartService from "../../../services/cart-service";
import * as orderService from "../../../services/order-service";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState<OrderDTO>(cartService.getCart);

  const { setContextCartCount } = useContext(ContextCartCount);

  function handleClearClick() {
    cartService.clearCart();
    updateCart();
  }

  function handleIncreaseItem(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }

  function handleDecreaseItem(productId: number) {
    cartService.decreaseItem(productId);
    updateCart();
  }

  function updateCart() {
    const newCart = cartService.getCart();
    setCart(newCart);
    setContextCartCount(newCart.items.length);
  }

  function handlePlaceOrderClick() {
    orderService.placeOrderRequest(cart).then(response => {
      cartService.clearCart();
      setContextCartCount(0);
      navigate(`/confirmation/${response.data.id}`);
    })
  }

  return (
    <main>
      <section id="cart-container-section" className="dsc-container">
        {cart.items.length === 0 ? (
          <div>
            <h2 className="dsc-section-title dsc-mb20">
              Seu carrinho está vazio
            </h2>
          </div>
        ) : (
          <div className="dsc-card dsc-mb20">
            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="dsc-cart-item-container dsc-line-bottom"
              >
                <div className="dsc-cart-item-left">
                  <img src={item.imgUrl} alt={item.name} />
                  <div className="dsc-cart-item-description">
                    <h3>{item.name}</h3>
                    <div className="dsc-cart-item-quantity-container">
                      <div
                        onClick={() => handleDecreaseItem(item.productId)}
                        className="dsc-cart-item-quantity-btn"
                      >
                        -
                      </div>
                      <p>{item.quantity}</p>
                      <div
                        onClick={() => handleIncreaseItem(item.productId)}
                        className="dsc-cart-item-quantity-btn"
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dsc-cart-item-right">
                  <h3>R$ {item.subTotal.toFixed(2)}</h3>
                </div>
              </div>
            ))}
            <div className="dsc-cart-total-container">
              <h2>Total</h2>
              <h3>R$ {cart.total.toFixed(2)}</h3>
            </div>
          </div>
        )}
        <div className="dsc-btn-page-container">
          <div className="dsc-btn" onClick={handlePlaceOrderClick}>Finalizar pedido</div>
          <Link to="/catalog">
            <div className="dsc-btn">Continuar comprando</div>
          </Link>
          <div onClick={handleClearClick} className="dsc-btn">
            Limpar carrinho
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;
