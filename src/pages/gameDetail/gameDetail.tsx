import { useLocation } from "react-router-dom";
import s from "./s.module.scss";
import { useMakeRequest } from "../../customHooks/useMakeRequest";
import GalleryGames from "../../components/galleryGames/galleryGames";
import { ResponseGetDetailGame } from "../../interfaces/interfaces";
import Comments from "../../components/comments/comments";
import useFavorite from "../../customHooks/useFavorite";

export default function GameDetail() {
  const { pathname } = useLocation();
  const url = buildUrlToGetDetail({ pathname });
  const { result } = useMakeRequest<ResponseGetDetailGame>({ url });
  const { switchActionAddAndRemove, isFavorite } = useFavorite({
    idGame: result?.data.id,
  });
  const images = result?.data.Images.map((objImg) => objImg.image_path);

  return (
    <div className={s.container}>
      <h3>{result?.data.name}</h3>
      <div className={s.carrousel}>
        <GalleryGames imagesArr={images} />
      </div>
      <div className={s.description}>
        <h4>Description</h4>
        <p>{result?.data.description}</p>
        <div className={s.genres}>
          {result?.data.Genres.map((genre) => (
            <p>{genre.name}</p>
          ))}
        </div>
      </div>
      <div className={s.buttonsContainer}>
        <button className={s.addFav} onClick={switchActionAddAndRemove}>
          {isFavorite ? "Remove From Favorite" : "Add To Favorites"}
        </button>
        <button className={s.addCart}>Add To Cart</button>
      </div>

      <div className={s.comments}>
        <Comments />
      </div>
    </div>
  );
}

//!logic
const buildUrlToGetDetail = ({ pathname }: { pathname: string }) => {
  const id = pathname.split("/")[2];
  return `${import.meta.env.VITE_SOME_BASE_URL}/games/${id}`;
};
