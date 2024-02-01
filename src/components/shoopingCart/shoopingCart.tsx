import { useState } from "react";
import s from "./s.module.scss";
const games = [
  "PAYDAY 2",
  "Grand Theft Auto IV",
  "Grand Theft Auto IV",
  "Grand Theft Auto IV",
  "Grand Theft Auto IV",
];

export default function ShoopingCart() {
  const [minimise, setMinimise] = useState(false);

  return (
    <div className={s.container}>
      <h4>Shooping Cart</h4>
      {games.map((game) => (
        <div className={s.itemList} style={{ display: minimise ? "none" : "" }}>
          <p>{game}</p>
          <button>X</button>
        </div>
      ))}
      <p>Total Payable: 100$</p>
      <p onClick={() => setMinimise(!minimise)} className={s.minimise}>
        -
      </p>
    </div>
  );
}
