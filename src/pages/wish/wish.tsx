import { useAuth0 } from "@auth0/auth0-react";
import { useMakeRequest } from "../../customHooks/useMakeRequest";
import { GameDetail, ResponseGetListGames } from "../../interfaces/interfaces";
import s from "./s.module.scss";
import useFavorite from "../../customHooks/useFavorite";
import Pagination from "../../components/pagination/pagination";
import useLoaderManage from "../../customHooks/useLoader";
import Search from "../../components/search/search";
import { Link } from "react-router-dom";
const url = `${import.meta.env.VITE_SOME_BASE_URL}/games/wishList`;

export default function Wish() {
  const { user, isAuthenticated } = useAuth0();
  const { result, setUrlSent } = useMakeRequest<ResponseGetListGames>({
    url: `${url}/${user?.sub}`,
  });
  const { setLoaderStatus, LoaderAllViewport } = useLoaderManage({});

  const hanlderChangePage = async (pageNumber: string) => {
    setLoaderStatus(true);
    const urlForSend = `${url}/${user?.sub}?pageNumber=${pageNumber}&quantity=5`;
    setUrlSent(urlForSend);
  };
  return result && isAuthenticated ? (
    <div className={s.container}>
      <div className={s.containerTable}>
        <Search styles={s.search} />
        {result.data.map((wishGame) => (
          <WishItem wishGame={wishGame} key={Math.random()} />
        ))}
        <Pagination onClick={hanlderChangePage} />
      </div>
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
      <Link to={`/games/${wishGame.id}`}>
        <div className={s.containerData}>
          <h5>{wishGame.name}</h5>
          <p>{wishGame.price} $</p>
          <p>{wishGame.rating}</p>
          <div className={s.containerImage}>
            <img src={wishGame.background_image} alt="imageGame" />
          </div>
        </div>
      </Link>
    </div>
  );
};
