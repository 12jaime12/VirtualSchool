import "./CheckCode.css";

const CheckCode = () => {


  return (
  <>
      <div className="form-wrap">
        <h1>Verifica tu código de registro</h1>
        <p>Escribe el código enviado a tu correo electrónico</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("confirmationCode", { required: false })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Código de registro
            </label>
          </div>

          <div className="btn_container">
            <button
              id="btnCheck"
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Código de verificación
            </button>
          </div>
          <div className="btn_container">
            <button
              id="btnResend"
              className="btn"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
              onClick={() => handleReSend()}
            >
              Reenviar código
            </button>
          </div>

          <p className="bottom-text">
            <small>
            Si el código introducido no es correcto ❌, su usuario será eliminado de la
               base de datos y tendrá que registrarse de nuevo.{" "}
            </small>
          </p>
        </form>
      </div>
    </>
  );
};

export default CheckCode;
