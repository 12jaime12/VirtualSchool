import Swal from "sweetalert2";

const useLoginError = (res, setLoginOk, userlogin) => {
  if (res?.status == 200) {
    const dataCustom = {
      token: res.data.token,
      id: res.data.user._id,
      user: res.data.user.name,
      email: res.data.user.email,
      image: res.data.user.image,
      check: res.data.user.check,
      curso: res.data.user.curso,
      rol: res.data.user.rol,
    };

    const dataString = JSON.stringify(dataCustom);
    userlogin(dataString);
    setLoginOk(() => true);
    Swal.fire({
      icon: "success",
      title: "Bienvenido a VirtualSchool",
      text: "Login ok ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  if (res?.response?.status == 500)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error interno del servidor ❎",
      showConButton: false,
      timer: 1500,
    });

  //! ---------- 404: password dont match
  if (res?.response?.data?.includes("password dont match"))
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La contraseña no coincide ❎",
      showConfirmButton: false,
      timer: 1500,
    });

  //! ---------- 404: User no register

  if (res?.response?.data?.includes("User no register"))
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario no registrado ❎",
      showConfirmButton: false,
      timer: 1500,
    });
};

export default useLoginError;
