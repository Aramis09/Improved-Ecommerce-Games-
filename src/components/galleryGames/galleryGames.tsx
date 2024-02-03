import { GameDetail } from "../../interfaces/interfaces";
import s from "./s.module.scss";
interface Props {
  games?: GameDetail[];
  imagesArr?: string[];
  width?: string;
}
export default function GalleryGames({ games, imagesArr, width }: Props) {
  const images = games
    ? games.slice(0, 5).map((game) => game.background_image)
    : imagesArr;
  const style = { width };
  return (
    <section className={s.container} style={style || ""}>
      {images ? (
        images.map((img) => <img src={img} alt="imgBg" key={Math.random()} />)
      ) : (
        <></>
      )}
    </section>
  );
}
