import "./styles.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FormInput from "../../../components/FormInput";
import * as forms from "../../../utils/forms";
import * as productService from "../../../services/product-service";

function ProductForm() {
  const params = useParams();

  const isEditing = params.productId !== "create";

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço",
      validation: function (valor: any) {
        return Number(valor) > 0;
      },
      message: "Favor informar um valor positivo",
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "Imagem",
    },
  });

  useEffect(() => {
    const result = forms.toDirty(formData, "price");
    console.log(result);

    if (isEditing) {
      productService.findById(Number(params.productId)).then((response) => {
        const newFormData = forms.updateAll(formData, response.data);
        setFormData(newFormData);
      });
    }
  }, []);

  function handleInputChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    const dataUpdated = forms.update(formData, name, value);
    const dataValidated = forms.validate(dataUpdated, name);
    setFormData(dataValidated);
  }

  function handleTurnDirty(name: string) {
    const newFormData = forms.toDirty(formData, name);
    setFormData(newFormData);
  }

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.name}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">{formData.name.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.price}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">{formData.price.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.imgUrl}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
              </div>
              {/* <div>
                <select className="dsc-form-control dsc-select" required>
                  <option value="" disabled selected>
                    Categorias
                  </option>
                  <option value="1">Valor 1</option>
                  <option value="2">Valor 2</option>
                </select>
              </div>
              <div>
                <textarea
                  className="dsc-form-control dsc-textarea"
                  placeholder="Descrição"
                ></textarea>
              </div> */}
            </div>
            <div className="dsc-product-form-buttons">
              <Link to="/admin/products">
                <button type="reset" className="dsc-btn">
                  Cancelar
                </button>
              </Link>
              <button type="submit" className="dsc-btn">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ProductForm;
