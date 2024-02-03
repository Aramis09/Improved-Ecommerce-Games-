import s from "./s.module.scss";
import useManagmentUser from "../../customHooks/useManagmentUser";

export default function Login() {
  const {
    reloadVerifyUserRegisterF,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useManagmentUser();

  return !isAuthenticated ? (
    <button
      className={s.container}
      onClick={async () => {
        loginWithRedirect().then(() => reloadVerifyUserRegisterF());
      }}
    >
      Login
    </button>
  ) : (
    <button
      className={s.container}
      onClick={async () => {
        logout();
      }}
    >
      Log out
    </button>
  );
}
