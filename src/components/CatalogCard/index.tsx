import "./styles.css";
import computerImg from "../../assets/computer.png";
import { ProductDTO } from "../../models/product";

type Props = {
  product: ProductDTO;
};

function CatalogCard({product}: Props) {
  return (
    <>
      <div className="dsc-card">
        <div className="dsc-catalog-card-top dsc-line-bottom">
          <img src={product.imgUrl} alt="Computer" />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h3>R$ {product.price.toFixed(2)}</h3>
          <h4> 
            {product.description}
          </h4>
        </div>
      </div>
    </>
  );
}

export default CatalogCard;
