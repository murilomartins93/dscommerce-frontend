import "./styles.css";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import Button from "../../components/Button";
import * as productService from "../../services/product-service";

function Catalog() {
  return (
    <main>
      <section id="catolog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">
          {productService.findAll().map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
        <Button text="Carregar Mais" />
      </section>
    </main>
  );
}

export default Catalog;
