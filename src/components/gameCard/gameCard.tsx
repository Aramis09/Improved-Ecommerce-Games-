import { Link } from "react-router-dom";
import { GameDetail } from "../../interfaces/interfaces";
import s from "./s.module.scss";
import useFavorite from "../../customHooks/useFavorite.tsx";
import useShoppingCart from "../../customHooks/useShoppingCart.tsx";

interface Props {
  gameDetail: GameDetail;
}
const colors = ["green", "red", "blue", "violet"];
export default function GameCard({ gameDetail }: Props) {
  const { switchActionAddAndRemove, switchIcon } = useFavorite({
    idGame: gameDetail.id,
  });
  const {
    switchActionAddAndRemove: switchActionAddAndRemoveCart,
    switchIcon: switchIconCart,
  } = useShoppingCart({
    idGame: gameDetail.id,
  });
  const IconFav = switchIcon();
  const IconCart = switchIconCart();

  return (
    <div className={s.container}>
      <Link to={`/games/${gameDetail.id}`}>
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
      </Link>
      <div className={s.containerButtonAdd}>
        <button
          className={s.buttonAddGameCart}
          onClick={() => switchActionAddAndRemoveCart()}
        >
          <IconCart styles={s.cartIcon} />
        </button>
        <button
          className={s.buttonAddFavorite}
          onClick={() => switchActionAddAndRemove()}
        >
          <IconFav styles={s.favoriteIcon} />
        </button>
      </div>
    </div>
  );
}
