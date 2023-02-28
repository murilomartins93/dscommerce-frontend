import "./styles.css";
import Button from "../../components/Button";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import * as productService from "../../services/product-service";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";

function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        navigate("/");
      });
  }, []);

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {
          product && (
            <div className="dsc-card dsc-mb20">
              <ProductDetailsCard product={product} />
            </div>
          )
          /*  or
          product ? (
            <div className="dsc-card dsc-mb20">
              <ProductDetailsCard product={product} />
            </div>
          ) : (
            <h1>Código inválido</h1>
          )
        */
        }
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
