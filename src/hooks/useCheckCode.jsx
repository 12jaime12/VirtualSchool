import Swal from "sweetalert2";

const useCheckCode = (res, setDeleteUser, setOkCheck) => {
  // -------404 o un 500  en este caso --------->res.response
  // -------200 ---> entramos directos a la ---->res.data
  //! -------status: 500

  if (res?.response?.status == 500)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error interno del servidor ❎!",
      showConfirmButton: false,
      timer: 1500,
    });
  //! -------200:  ok delete user
  if (res?.data?.delete?.includes("ok delete user")) {
    setDeleteUser(() => true);

    Swal.fire({
      icon: "error",
      title: "No correct Code ❎.",
      text: "Tu usuario esta borrado, por favor registrese de nuevo",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  //! -------200: error delete user
  if (res?.data?.delete?.includes("error delete user")) {
    Swal.fire({
      icon: "error",
      title: "No correct Code ❎.",
      text: "Usuario no borrado, intentelo de nuevo",
      showConfirmButton: false,
      timer: 2500,
    });
  }
  //! ------200: testCheckOk:
  if (res?.data?.testCheckOk?.toString() == "true") {
    if (localStorage.getItem("user")) {
      const currentUser = localStorage.getItem("user");
      const parseCurrentUser = JSON.parse(currentUser);
      const customUser = {
        ...parseCurrentUser,
        check: true,
      };
      const customUserString = JSON.stringify(customUser);

      //! No utilzamos directamente el userLogin porque ya estamos logados solo tenemos...ç
      //! que actualizar el localstorage y el user el contesto para que la nav se renderice correctamente

      //userlogin(customUserString);
      setUser(() => customUser);
      localStorage.setItem("user", customUserString);
    }
    setOkCheck(() => true);
    Swal.fire({
      icon: "success",
      title: "Ok correct code ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  //! ------200: testCheckOk: false

  if (res?.data?.testCheckOk?.toString() == "false") {
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "Usuario no borrado, inténtelo de nuevo por favor",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  //! ------404: User not found && 404: error.message Update One
  if (res?.response?.status == 404)
    Swal.fire({
      icon: "error",
      title: "Interval server error ❎.",
      text: "Usuario no borrado, inténtelo de nuevo por favor",
      showConfirmButton: false,
      timer: 1500,
    });
};

export default useCheckCode;
