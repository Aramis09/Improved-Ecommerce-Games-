import ButtonMeli from "../../components/buttonMeli/buttonMeli";
import useShoppingCart from "../../customHooks/useShoppingCart";
import s from "./s.module.scss";

export default function Checkout() {
  const { gamesFromSppCart, deleteGameShoppingCart, totalToPay } =
    useShoppingCart({
      idGame: undefined,
    });

  return (
    <div className={s.container}>
      <div className={s.containerListGames}>
        {gamesFromSppCart?.data.map((game) => (
          <div className={s.containerGameItem}>
            <div className={s.containerImage}>
              <img src={game.background_image} alt="game" />
            </div>
            <p key={Math.random()}>{game.name}</p>
            <button onClick={() => deleteGameShoppingCart(game.id)}>X</button>
          </div>
        ))}
      </div>
      <div className={s.containerInfoPayment}>
        <p>Make Gift</p>
        <p style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          Total to pay:{" "}
          <p style={{ color: "red", fontWeight: 900 }}>{totalToPay}</p>
        </p>
        <ButtonMeli gamesToPay={gamesFromSppCart?.data} />
      </div>
    </div>
  );
}
