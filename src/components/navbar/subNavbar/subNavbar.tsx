import { Link } from "react-router-dom";
import s from "./s.module.scss";

interface Props {
  show: boolean;
}
const showMenu = {
  transform: "translate(0%)",
};
export default function SubNavbar({ show }: Props) {
  return (
    <div className={s.container} style={show ? showMenu : {}}>
      <Link to="/library">Library</Link>
      <Link to="/wish">Wish</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/checkout">Carrito</Link>
    </div>
  );
}

<Link to="/library">Library</Link>;
