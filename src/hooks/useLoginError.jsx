import Swal from "";

const useLoginError = (res, setLoginOk, userlogin) => {
  if (res?.status == 200) {
    const dataCustom = {
      token: res.data.token,
      user: res.data.user.name,
      email: res.data.user.email,
      image: res.data.user.image,
      check: res.data.user.check,
    };

    const dataString = JSON.stringify(dataCustom);
    userlogin(dataString);
    setLoginOk(() => true);
    Swal.fire({});
  }

  if (res?.response?.status == 500)
    Swal.fire({
      icon: "error",
      title: "",
      text: "Error del servidor",
      showConButton: false,
      timer: 1500,
    });
};
