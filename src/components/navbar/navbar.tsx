import s from "./s.module.scss";
import iconMain from "../../assets/iconMain.png";
import Login from "../login/login";
import Search from "../search/search";
import Burger from "../../assets/svgs/burger.svg";
import SubNavbar from "./subNavbar/subNavbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../menu/menu";

export default function Navbar() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <div className={s.container}>
      <Link to="/">
        <img src={iconMain} alt="icon" />
      </Link>
      <div className={s.containerSearch}>
        <img
          src={Burger}
          alt="iconBurgerMenu"
          className={s.burgerIcon}
          onClick={() => setShowSubMenu(!showSubMenu)}
        />
        <Search />
      </div>
      <Menu />
      <SubNavbar show={showSubMenu} />
    </div>
  );
}
