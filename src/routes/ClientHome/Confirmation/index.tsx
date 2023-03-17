import "./styles.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { OrderDTO, OrderItemDTO } from "../../../models/order";
import * as orderService from "../../../services/order-service";

function Confirmation() {
  const params = useParams();
  const [order, setOrder] = useState<OrderDTO>();

  useEffect(() => {
    orderService.findByIdRequest(Number(params.orderId)).then((response) => {
      const newOrder = new OrderDTO();
      newOrder.id = response.data.id;
      newOrder.items = response.data.items.map(
        (p: OrderItemDTO) =>
          new OrderItemDTO(p.productId, p.quantity, p.name, p.price, p.imgUrl)
      );
      /* response.data.items.forEach((p: OrderItemDTO) => {
        newOrder.items.push(
          new OrderItemDTO(p.productId, p.quantity, p.name, p.price, p.imgUrl)
        );
      }); */
      setOrder(newOrder);
    });
  }, []);

  return (
    <main>
      <section id="confirmation-section" className="dsc-container">
        <div className="dsc-card dsc-mb20">
          {order?.items.map((item) => (
            <div
              key={item.productId}
              className="dsc-cart-item-container dsc-line-bottom"
            >
              <div className="dsc-cart-item-left">
                <img src={item.imgUrl} alt={item.name} />
                <div className="dsc-cart-item-description">
                  <h3>{item.name}</h3>
                  <div className="dsc-cart-item-quantity-container">
                    <p>{item.quantity}</p>
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
            <h3>R$ {order?.total.toFixed(2)}</h3>
          </div>
        </div>
        <div className="dsc-confirmation-message dsc-mb20">
          Pedido realizado! Número {order?.id}
        </div>
        <div className="dsc-btn-page-container">
          <Link to="/">
            <div className="dsc-btn">Início</div>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Confirmation;
