import { GameDetail } from "../../interfaces/interfaces";
import s from "./s.module.scss";

interface Props {
  gameDetail: GameDetail;
}
const colors = ["green", "red", "blue", "violet"];

export default function GameCard({ gameDetail }: Props) {
  return (
    <div className={s.container}>
      <img src={gameDetail.background_image} alt="backgroundImage" />
      <h4>{gameDetail.name}</h4>
      <div className={s.containerGenres}>
        {gameDetail.Genres.map((objGenre, index) => (
          <p key={Math.random()} style={{ color: colors[index] }}>
            {objGenre.name}
          </p>
        ))}
      </div>
      <p className={s.price}>{gameDetail.price}$</p>
      <button className={s.buttonAddGame}>Add to cart</button>
    </div>
  );
}
