import "./styles.css";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import axios from "axios";

function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products?size=12")
    .then(response => {
    //console.log(response.data.content);
      setProducts(response.data.content);
    });
  }, []);

  return (
    <main>
      <section id="catolog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
        <Button text="Carregar Mais" />
      </section>
    </main>
  );
}

export default Catalog;
