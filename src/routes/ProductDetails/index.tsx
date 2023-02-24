import "./styles.css";
import Button from "../../components/Button";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import * as productService from "../../services/product-service";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  const product = productService.findById(Number(params.productId));

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && (
          <div className="dsc-card dsc-mb20">
            <ProductDetailsCard product={product} />
          </div>
        )}
        <div className="dsc-btn-page-container">
          <Button text="Comprar" />
          <Link to="/">
            <Button text="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
