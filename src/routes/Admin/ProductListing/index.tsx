import "./styles.css";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import { useNavigate } from "react-router-dom";
import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import product from "../../../assets/computer.png";
import * as productService from "../../../services/product-service";

type QueryParams = {
  page: number;
  name: string;
};

function ProductListing() {
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
      .catch(() => navigate("/admin/home"));
  }, [queryParams]);

  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>
        <div className="dsc-btn-page-container">
          <div className="dsc-btn dsc-mb20">Novo</div>
        </div>
        <form className="dsc-search-bar">
          <button type="submit">🔎︎</button>
          <input type="text" placeholder="Nome do produto" />
          <button type="reset" className="dsc-search-bar-reset-btn">
            🗙
          </button>
        </form>
        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <th className="dsc-tb576">ID</th>
            <th></th>
            <th className="dsc-tb768">Preço</th>
            <th className="dsc-txt-left">Nome</th>
            <th></th>
            <th></th>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td className="dsc-tb576">{product.id}</td>
                <td>
                  <div className="dsc-center-image">
                    <img
                      className="dsc-product-listing-image"
                      src={product.imgUrl}
                      alt={product.name}
                    />
                  </div>
                </td>
                <td className="dsc-tb768">R$ {product.price.toFixed(2)}</td>
                <td className="dsc-txt-left">{product.name}</td>
                <td>
                  <img
                    className="dsc-product-listing-btn"
                    src={editIcon}
                    alt="Editar"
                  />
                </td>
                <td>
                  <img
                    className="dsc-product-listing-btn"
                    src={deleteIcon}
                    alt="Deletar"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="dsc-btn dsc-mt20">Carregar Mais</div>
      </section>
    </main>
  );
}

export default ProductListing;
