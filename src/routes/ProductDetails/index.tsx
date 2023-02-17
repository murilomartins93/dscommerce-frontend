import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import ProductDetailsCard from "../../components/ProductDetailsCard";

function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <div className="dsc-card dsc-mb20">
            <ProductDetailsCard />
          </div>
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonSecondary />
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetails;
