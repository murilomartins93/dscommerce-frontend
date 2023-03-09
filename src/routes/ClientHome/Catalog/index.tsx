import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import Button from "../../../components/Button";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import { useNavigate } from "react-router-dom";

type QueryParams = {
  page: number;
  name: string;
};

function Catalog() {
  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      })
      .catch(() => navigate("/"));
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
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
        {
          !isLastPage && 
          <div onClick={handleNextPageClick}>
            <Button text="Carregar Mais" />
          </div>
        }
      </section>
    </main>
  );
}

export default Catalog;
