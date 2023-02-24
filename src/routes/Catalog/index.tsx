import "./styles.css";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import Button from "../../components/Button";
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

function Catalog() {
  return (
    <main>
      <section id="catolog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
        </div>
        <Button text="Carregar Mais" />
      </section>
    </main>
  );
}

export default Catalog;
