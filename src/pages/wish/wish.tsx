import { useAuth0 } from "@auth0/auth0-react";
import { useMakeRequest } from "../../customHooks/useMakeRequest";
import { GameDetail, ResponseGetListGames } from "../../interfaces/interfaces";
import s from "./s.module.scss";
import useFavorite from "../../customHooks/useFavorite";
import Pagination from "../../components/pagination/pagination";
import useLoaderManage from "../../customHooks/useLoader";
import Search from "../../components/search/search";
const url = `${import.meta.env.VITE_SOME_BASE_URL}/games/wishList`;

export default function Wish() {
  const { user } = useAuth0();
  const { result, setUrlSent } = useMakeRequest<ResponseGetListGames>({
    url: `${url}/${user?.sub}`,
  });
  const { setLoaderStatus, LoaderAllViewport } = useLoaderManage({});

  const hanlderChangePage = async (pageNumber: string) => {
    setLoaderStatus(true);
    const urlForSend = `${url}/${user?.sub}?pageNumber=${pageNumber}&quantity=6`;
    setUrlSent(urlForSend);
  };
  return result ? (
    <div className={s.container}>
      {/* <Search /> */}
      <div className={s.containerTable}>
        {result.data.map((wishGame) => (
          <WishItem wishGame={wishGame} key={Math.random()} />
        ))}
      </div>
      <Pagination onClick={hanlderChangePage} />
      {LoaderAllViewport}
    </div>
  ) : (
    <></>
  );
}

const WishItem = ({ wishGame }: { wishGame: GameDetail }) => {
  const { switchActionAddAndRemove, switchIcon } = useFavorite({
    idGame: wishGame.id,
  });

  const IconFav = switchIcon();
  return (
    <div className={s.containerItem}>
      <button onClick={switchActionAddAndRemove}>
        <IconFav styles={s.iconFav} />
      </button>
      <h5>{wishGame.name}</h5>
      <p>{wishGame.price} $</p>
      <p>{wishGame.rating}</p>
      <div className={s.containerImage}>
        <img src={wishGame.background_image} alt="imageGame" />
      </div>
    </div>
  );
};
