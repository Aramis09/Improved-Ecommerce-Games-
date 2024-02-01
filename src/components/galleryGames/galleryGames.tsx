import { GameDetail } from "../../interfaces/interfaces";
import s from "./s.module.scss";
interface Props {
  games?: GameDetail[];
  imagesArr?: string[];
}
export default function GalleryGames({ games, imagesArr }: Props) {
  const images = games
    ? games.slice(0, 5).map((game) => game.background_image)
    : imagesArr;
  return (
    <section className={s.container}>
      {images ? images.map((img) => <img src={img} alt="imgBg" />) : <></>}
    </section>
  );
}
