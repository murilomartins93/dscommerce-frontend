import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import Button from "../../components/Button";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, deleniti animi ullam quod nam quia.",
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories: [
    { id: 2, name: "Eletrônicos" },
    { id: 3, name: "Computadores" },
    { id: 4, name: "Importados" },
  ],
};

function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <div className="dsc-card dsc-mb20">
            <ProductDetailsCard product={product} />
          </div>
          <div className="dsc-btn-page-container">
            <Button text="Comprar" />
            <Button text="Início" />
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetails;
