import { useAuth0 } from "@auth0/auth0-react";
import s from "./s.module.scss";
import userIcon from "../../assets/svgs/user.svg";
import Login from "../login/login";

export default function Menu() {
  const { user, isAuthenticated } = useAuth0();

  const hidenStyle = isAuthenticated
    ? { display: "flex" }
    : { display: "none" };

  return (
    <div className={s.container}>
      <img src={userIcon} alt="IconMenu" />
      <div className={s.containerContent}>
        <div className={s.profile} style={{ ...hidenStyle }}>
          <p> Perfil </p>
          <img src={user?.picture} alt="userImg" />
        </div>
        <Login />
      </div>
    </div>
  );
}
