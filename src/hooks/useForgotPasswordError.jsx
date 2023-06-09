import Swal from "sweetalert2";

const useForgotPasswordError = (res, setForgetOk) => {
  if (res?.status == 200) {
    if (res?.data?.sendPassword == true && res?.data?.updateUser == true) {
      setForgetOk(() => true);
      return Swal.fire({
        icon: "succes",
        title: "Change password ok",
        text: "Email enviado con tu nueva contraseña ✅",
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if (res?.data?.sendPassword == true && res?.data?.updateUser == false) {
      return Swal.fire({
        icon: "error",
        title: "Error send incorrect email",
        text: "No se cambio tu contraseña, tu email no es valido ❎",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  if (
    res?.response?.data?.includes("User no register") &&
    res?.response?.status == 404
  )
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "usuario no registrado ❎. Introduce un email valido",
      showConfirmButton: false,
      timer: 3000,
    });

  if (res?.response?.status == 500)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error interno del servidor ❎, Por favor, intentelo de nuevo ",
      showConfirmButton: false,
      timer: 1500,
    });

  if (
    res?.response?.data?.includes("dont send email and dont update user") &&
    res?.response?.status == 404
  )
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se cambio la contraseña,  ❎ Por favor, intentelo de nuevo",
      showConfirmButton: false,
      timer: 3000,
    });
};

export default useForgotPasswordError;
