import { useAuth0 } from "@auth0/auth0-react";
import s from "./s.module.scss";
export default function Login() {
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

  return !isAuthenticated ? (
    <button
      className={s.container}
      onClick={async () => {
        loginWithRedirect();
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
