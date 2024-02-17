// import { useMakeRequest } from "../../customHooks/useMakeRequest";
import s from "./s.module.scss";
// import { ResponseGetListGames } from "../../interfaces/interfaces";
import GameCard from "../../components/gameCard/gameCard";
import Pagination from "../../components/pagination/pagination";
import { urlFormated } from "../../utils/urlFormated";
import useLoaderManage from "../../customHooks/useLoader";
import { useGetGamesListQuery } from "../../redux/services/gamesApi";
import { useState } from "react";

const URLGETGAMES = `${
  import.meta.env.VITE_SOME_BASE_URL
}/games/list?quantityResult=9`;

export default function Catalogue() {
  const [urlSent, setUrlSent] = useState(URLGETGAMES);
  const { data } = useGetGamesListQuery(urlSent);
  const { setLoaderStatus, LoaderAllViewport } = useLoaderManage({});

  const hanlderChangePage = async (pageNumber: string) => {
    setLoaderStatus(true);
    const url = urlFormated({ pageNumber: pageNumber });
    setUrlSent(url);
  };

  return (
    <div className={s.container}>
      <div className={s.containerGames}>
        {data?.data.map((gameDetail) => (
          <GameCard gameDetail={gameDetail} key={Math.random()} />
        ))}
        <Pagination onClick={hanlderChangePage} />
        {LoaderAllViewport}
      </div>
    </div>
  );
}
