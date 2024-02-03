import { useAuth0 } from "@auth0/auth0-react";
import { useMakeRequest } from "../../customHooks/useMakeRequest";
import { GameDetail, ResponseGetListGames } from "../../interfaces/interfaces";
import s from "./s.module.scss";
const url = `${import.meta.env.VITE_SOME_BASE_URL}/games/wishList`;
export default function Wish() {
  const { user } = useAuth0();
  const { result } = useMakeRequest<ResponseGetListGames>({
    url: `${url}/${user?.sub}`,
  });
  console.log(result);

  return result ? (
    <div className={s.container}>
      {result.data.map((wishGame) => (
        <WishItem wishGame={wishGame} key={Math.random()} />
      ))}
    </div>
  ) : (
    <></>
  );
}

const WishItem = ({ wishGame }: { wishGame: GameDetail }) => (
  <div className={s.containerItem}>
    <h5>{wishGame.name}</h5>
    <p>{wishGame.price} $</p>
    <p>{wishGame.rating}</p>
    <div className={s.containerImage}>
      <img src={wishGame.background_image} alt="imageGame" />
    </div>
  </div>
);
