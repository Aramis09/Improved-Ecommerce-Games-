import { useMakeRequest } from "../../customHooks/useMakeRequest";
import s from "./s.module.scss";
import { ResponseGetListGames } from "../../interfaces/interfaces";
import GameCard from "../../components/gameCard/gameCard";
import Pagination from "../../components/pagination/pagination";
import { urlFormated } from "../../utils/urlFormated";

const URLGETGAMES = `${
  import.meta.env.VITE_SOME_BASE_URL
}/games/list?quantityResult=9`;

export default function Catalogue() {
  const { result, setUrlSent } = useMakeRequest<ResponseGetListGames>({
    url: URLGETGAMES,
  });

  const hanlderChangePage = async (pageNumber: string) => {
    const url = urlFormated({ pageNumber: pageNumber });
    setUrlSent(url);
  };

  return (
    <div className={s.container}>
      <div className={s.containerGames}>
        {result?.data.map((gameDetail) => (
          <GameCard gameDetail={gameDetail} />
        ))}
        <Pagination onClick={hanlderChangePage} />
      </div>
    </div>
  );
}
