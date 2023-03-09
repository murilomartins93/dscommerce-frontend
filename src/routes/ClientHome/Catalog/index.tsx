import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import Button from "../../../components/Button";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import { useNavigate } from "react-router-dom";

function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [ productName, setproductName ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    productService
      .findPageRequest(0, productName)
      .then((response) => {
        setProducts(response.data.content);
      })
      .catch(() => navigate("/"));
  }, [productName]);

  function handleSearch(searchText: string) {
    setproductName(searchText);
  }

  return (
    <main>
      <section id="catolog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch} />
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
