import { Link } from "react-router-dom";
import s from "./s.module.scss";
const games = [
  "PAYDAY 2",
  "Grand Theft Auto IV",
  "Grand Theft Auto IV",
  "Grand Theft Auto IV",
  "Grand Theft Auto IV",
];

export default function ShoopingCart() {
  return (
    <Link to="/checkout">
      <div className={s.container}>
        <h4>Shooping Cart</h4>
        <div className={s.containercontent}>
          {games.map((game) => (
            <div className={s.itemList} key={Math.random()}>
              <p>{game}</p>
              <button>X</button>
            </div>
          ))}
          <p>Total Payable: 100$</p>
        </div>
      </div>
    </Link>
  );
}
