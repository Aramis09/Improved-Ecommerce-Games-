import GameCard from "../../components/gameCard/gameCard";
import s from "./s.module.scss";
import { useMakeRequest } from "../../customHooks/useMakeRequest";
import { ResponseGetListGames } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
import GalleryGames from "../../components/galleryGames/galleryGames";

const URLGETPOPUILARGAMES = `${
  import.meta.env.VITE_SOME_BASE_URL
}/games/list?quantityResult=6&orderRating=ASC`;

export default function Home() {
  const { result } = useMakeRequest<ResponseGetListGames>({
    url: URLGETPOPUILARGAMES,
  });

  return result?.pageNumber ? (
    <>
      <div className={s.container}>
        <GalleryGames games={result?.data} />
        <div className={s.containerListGames}>
          {result?.data.map((gameDetail) => (
            <GameCard gameDetail={gameDetail} />
          ))}
        </div>
        <Link to="/moregames"> Mora games ...</Link>
      </div>
    </>
  ) : (
    <p>Ups ...</p>
  );
}
