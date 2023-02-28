import "./styles.css";
import Button from "../../components/Button";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import * as productService from "../../services/product-service";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";

function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId)).then((response) => {
      setProduct(response.data);
    });
  }, []);

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
