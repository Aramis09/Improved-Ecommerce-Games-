import { Link } from "react-router-dom";
import s from "./s.module.scss";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  show: boolean;
}
const showMenu = {
  transform: "translate(0%)",
};
export default function SubNavbar({ show }: Props) {
  const { isAuthenticated, loginWithPopup } = useAuth0(); //!necesito disminuir las peticiones a auth0 con un solo estado global

  return (
    <div className={s.container} style={show ? showMenu : {}}>
      {isAuthenticated ? (
        <Link to="/library">Library</Link>
      ) : (
        <ButtonRedirect
          onClick={loginWithPopup}
          title="Library"
          styles={s.buttonLogin}
        />
      )}
      {isAuthenticated ? (
        <Link to="/wish">Wish List</Link>
      ) : (
        <ButtonRedirect
          onClick={loginWithPopup}
          title="Wish List"
          styles={s.buttonLogin}
        />
      )}
      {isAuthenticated ? (
        <Link to="/friends">Friends</Link>
      ) : (
        <ButtonRedirect
          onClick={loginWithPopup}
          title="Friends"
          styles={s.buttonLogin}
        />
      )}
      {isAuthenticated ? (
        <Link to="/checkout">Shooping Cart</Link>
      ) : (
        <ButtonRedirect
          onClick={loginWithPopup}
          title="Shooping Cart"
          styles={s.buttonLogin}
        />
      )}
    </div>
  );
}

const ButtonRedirect = ({
  title,
  onClick,
  styles,
}: {
  title: string;
  onClick: () => void;
  styles?: string;
}) => (
  <button onClick={onClick} className={styles}>
    {title}
  </button>
);
