import "./styles.css";
import { Link, NavLink } from "react-router-dom";
import productsIcon from "../../assets/products.svg";
import homeIcon from "../../assets/home.svg";
import catalogIcon from "../../assets/catalog.svg";
import LoggedUser from "../LoggedUser";

function HeaderAdmin() {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <Link to="/admin">
          <h1>DSC Admin</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            
            <NavLink to="/admin/home" className={({isActive}) => isActive ? "dsc-menu-item-active" : ""}>
              <div className="dsc-menu-item">
                <img src={homeIcon} alt="Início" />
                <p>Início</p>
              </div>
            </NavLink>
            <Link to="/catalog">
              <div className="dsc-menu-item">
                <img src={catalogIcon} alt="Catálogo" />
                <p>Catálogo</p>
              </div>
            </Link>
            <NavLink to="/admin/products" className={({isActive}) => isActive ? "dsc-menu-item-active" : ""}>
              <div className="dsc-menu-item">
                <img src={productsIcon} alt="Cadastro de produtos" />
                <p>Produtos</p>
              </div>
            </NavLink>
          </div>
          <LoggedUser />
        </div>
      </nav>
    </header>
  );
}

export default HeaderAdmin;
