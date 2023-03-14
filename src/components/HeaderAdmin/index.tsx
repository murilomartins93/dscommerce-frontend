import "./styles.css";
import { Link } from "react-router-dom";
import productsIcon from "../../assets/products.svg";
import homeIcon from "../../assets/home.svg";

function HeaderAdmin() {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <Link to="/admin">
          <h1>DSC Admin</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <Link to="/">
              <div className="dsc-menu-item">
                <img src={homeIcon} alt="Início" />
                <p>Início</p>
              </div>
            </Link>
          </div>
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={productsIcon} alt="Cadastro de produtos" />
              <p className="dsc-menu-item-active">Produtos</p>
            </div>
          </div>
          <div className="dsc-logged-user">
            <p>Maria Silva</p>
            <a href="#">Sair</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderAdmin;
