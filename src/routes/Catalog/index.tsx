import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";

function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catolog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mt20 dsc-mb20">
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />           
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}

export default Catalog;
