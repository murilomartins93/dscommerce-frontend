import "./styles.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextToken } from "../../../utils/context-token";
import FormInput from "../../../components/FormInput";
import * as authService from "../../../services/auth-service";
import * as forms from "../../../utils/forms";

function Login() {
  const navigate = useNavigate();

  const { setContextTokenPayload } = useContext(ContextToken);

  const [submitResponseFail, setsubmitResponseFail] = useState(false);

  const [formData, setFormData] = useState<any>({
    username: {
      value: "",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Email",
      validation: function (value: string) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value.toLowerCase()
        );
      },
      message: "Favor informar um email válido",
    },
    password: {
      value: "",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Senha",
    },
  });

  function handleSubmit(event: any) {
    event.preventDefault();
    const formDataValidated = forms.dirtyAndValidateAll(formData);
    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      setsubmitResponseFail(false);
      return;
    }

    authService
      .loginRequest(forms.toValues(formData))
      .then((response) => {
        const token = response.data.access_token;
        authService.saveAccessToken(token);
        setContextTokenPayload(authService.getAccessTokenPayload());
        navigate("/cart");
      })
      .catch(() => {
        setsubmitResponseFail(true);
      });
  }

  function handleInputChange(event: any) {
    setFormData(
      forms.updateAndValidate(formData, event.target.name, event.target.value)
    );
  }

  function handleTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  return (
    <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.username}
                  className="dsc-form-control"
                  autoComplete="username"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">
                  {formData.username.message}
                </div>
              </div>
              <div>
                <FormInput
                  {...formData.password}
                  className="dsc-form-control"
                  autoComplete="current-password"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">
                  {formData.password.message}
                </div>
              </div>
            </div>
            {
              submitResponseFail ? 
              <div className="dsc-form-global-error">
                Usuário ou senha inválidos
              </div> 
              : null
            }
            <div className="dsc-login-form-buttons dsc-mt20">
              <button type="submit" className="dsc-btn">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
