import "./styles.css";
import Button from "../../components/Button";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import axios from "axios";

function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${params.productId}`).then((response) => {
    //console.log(response.data);
      setProduct(response.data);
    });
    // product-service data
    // const prod = productService.findById(Number(params.productId));
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
