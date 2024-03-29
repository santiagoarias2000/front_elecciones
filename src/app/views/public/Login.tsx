import Form from "react-bootstrap/Form";
import logo from "../../../assets/image/imgHeader.webp";
import { useState } from "react";
import { MessageToastify } from "../../utilities/functions/MessageToastify";
import LoginService from "../../services/LoginService";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../utilities/hooks/useForm";
import AccessUser from "../../mocks/models/AccessUser";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import { Button, Modal } from "react-bootstrap";
import ImageSpinner from "../../../assets/image/ImagenPago.webp";

export const Login = () => {
  //Modal
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  //Variables
  const myNavigate = useNavigate();
  type formHtml = React.FocusEvent<HTMLFormElement>;
  const [inProcess, setProcess] = useState<boolean>(false);
  let { emailUser, passwordUser, doubleLink, object } = useForm<AccessUser>(
    new AccessUser("", "", "")
  );

  //Functions
  const cleanBoxs = (myForm: HTMLFormElement) => {
    myForm.reset();

    object.emailUser = "";
    object.passwordUser = "";

    myForm.emailUser.value = "";
    myForm.passwordUser.value = "";
    myForm.classList.remove("was-validated");
  };

  const proccesForm = async (fh: formHtml) => {
    fh.preventDefault();
    setProcess(true);
    const formCurrent = fh.currentTarget;
    formCurrent.classList.add("was-validated");

    if (formCurrent.checkValidity() === false) {
      fh.preventDefault();
      fh.stopPropagation();
    } else {
      //const passwordEncypted = encryption.sha512(object.passwordUser);
      //object.passwordUser = passwordEncypted;
      //const urlLogIn = ApiBack.URL + ApiBack.LOGIN;
      const result = await LoginService.consumeService(object);

      if (result.tokenHitData) {
        const objJWT: any = jwtDecode(result.tokenHitData);
        console.log(objJWT);
        localStorage.setItem("tokenHitData", result.tokenHitData);
        myNavigate("/");
        setProcess(false);
      } else {
        cleanBoxs(formCurrent);
        MessageToastify("error", "Credenciales incorrectas", 7000);
      }
    }
  };


  return (
    <body
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos-delay="0"
      className="background-radial-gradient overflow-hidden"
    >
      <section style={{ width: "100%", height: "100vh" }}>
        <div className="margenDispositivos container px-4 py-3 text-center text-lg-start">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-lg-0" style={{ zIndex: "10" }}>
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="Imagen de logo para header de guia electoral"
                  className="img-fluid"
                  style={{ width: "70%", height: "70%" }}
                />
              </Link>
            </div>

            <div className="col-lg-6 mb-0 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-2 py-5 px-md-5">
                  <Form
                    className="row g-3"
                    noValidate
                    validated={inProcess}
                    onSubmit={proccesForm}
                  >
                    <div className="col-12">
                      <h1 className="tittleLogin text-center mb-5">
                        <b>INICIAR SESIÓN</b>
                      </h1>
                      <Form.Group controlId="emailUser">
                        <Form.Label>Correo electrónico</Form.Label>
                        <div className="input-group">
                          <span className="input-group-text">@</span>
                          <Form.Control
                            required
                            type="email"
                            name="emailUser"
                            placeholder="Correo electrónico"
                            className="form-control"
                            value={emailUser}
                            onChange={doubleLink}
                          />
                          <Form.Control.Feedback type="invalid">
                            Debe ingresar un correo electrónico valido
                          </Form.Control.Feedback>
                        </div>
                      </Form.Group>
                    </div>

                    <div className="col-12">
                      <Form.Group controlId="passwordUser">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          name="passwordUser"
                          className="form-control"
                          value={passwordUser}
                          onChange={doubleLink}
                          placeholder="Contraseña"
                        />
                        <Form.Control.Feedback type="invalid">
                          Contraseña incorrecta
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="text-center mt-5">
                      <div className="d-inline p-2">
                        <button
                          type="submit"
                          className="label btn btn-primary btn-block mb-0"
                        >
                          Iniciar Sesión
                        </button>
                      </div>

                      <div className="d-inline p-2">
                        <a
                          type="submit"
                          className="label btn btn-primary btn-block mb-0"
                          href="https://payco.link/2150692"
                          target="_blank"
                        >
                          Registrarse
                        </a>
                      </div>
                    </div>
                  </Form>
                </div>
                <ToastContainer style={{ top: "none !important" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        keyboard={false}
        backdrop="static"
        onHide={handleClose}
        centered
        className="modal"
        style={{ backgroundColor: "transparent !important", opacity: 0.9 }}
      >
        <Modal.Body className="text-center">
          <div className="text-center">
            <Button
              className="btn btn-sm text-white"
              onClick={(e)=>{
                setShow(false);
              }}
              type="button"
              style={{
                position: "absolute",
                marginTop: "5%",
                marginLeft: "87%",
                backgroundColor: "#d9224e",
              }}
            >
              <span aria-hidden="true"> &times; </span>
            </Button>
            <img
              style={{ width: "100%", height: "auto", opacity: 1 }}
              src={ImageSpinner}
              alt="imagen de carga para el modal"
            />
          </div>
        </Modal.Body>
      </Modal>
    </body>
  );
};
