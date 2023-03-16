import "./styles.css";

function ProductListing() {
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
          <button type="reset">🗙</button>
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
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src="img/computer.png"
                  alt="Computer"
                />
              </td>
              <td className="dsc-tb768">R$ 5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/edit.svg"
                  alt="Editar"
                />
              </td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/delete.svg"
                  alt="Deletar"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src="img/computer.png"
                  alt="Computer"
                />
              </td>
              <td className="dsc-tb768">R$ 5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/edit.svg"
                  alt="Editar"
                />
              </td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/delete.svg"
                  alt="Deletar"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src="img/computer.png"
                  alt="Computer"
                />
              </td>
              <td className="dsc-tb768">R$ 5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/edit.svg"
                  alt="Editar"
                />
              </td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/delete.svg"
                  alt="Deletar"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src="img/computer.png"
                  alt="Computer"
                />
              </td>
              <td className="dsc-tb768">R$ 5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/edit.svg"
                  alt="Editar"
                />
              </td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/delete.svg"
                  alt="Deletar"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src="img/computer.png"
                  alt="Computer"
                />
              </td>
              <td className="dsc-tb768">R$ 5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/edit.svg"
                  alt="Editar"
                />
              </td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/delete.svg"
                  alt="Deletar"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src="img/computer.png"
                  alt="Computer"
                />
              </td>
              <td className="dsc-tb768">R$ 5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/edit.svg"
                  alt="Editar"
                />
              </td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src="img/delete.svg"
                  alt="Deletar"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="dsc-btn-next-page dsc-mt20">Carregar Mais</div>
      </section>
    </main>
  );
}

export default ProductListing;
