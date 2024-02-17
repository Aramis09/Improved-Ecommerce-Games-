import { Link } from "react-router-dom";
import s from "./s.module.scss";
import useShoppingCart from "../../customHooks/useShoppingCart";

//!dont forget manage error
export default function ShoopingCart() {
  const {
    deleteGameShoppingCart,
    gamesFromSppCart: games,
    totalToPay,
  } = useShoppingCart({
    idGame: undefined,
  });

  return games?.data ? (
    <div className={s.container}>
      <h4>Shooping Cart</h4>
      <div className={s.containercontent}>
        {games.data.slice(0, 5).map((game) => (
          <div className={s.itemList} key={Math.random()}>
            <p>{game.name}</p>
            <button onClick={() => deleteGameShoppingCart(game.id)}>X</button>
          </div>
        ))}
        <p>...</p>
        <Link to="/checkout">
          <p>See all games ...</p>
        </Link>
        <p>Total Payable: {totalToPay}$</p>
      </div>
    </div>
  ) : (
    <></>
  );
}
