import s from "./s.module.scss";
import icon from "../../assets/iconMain.png";

export default function Comments() {
  const arr = [<CommentDetail />, <CommentDetail />, <CommentDetail />];
  return (
    <div className={s.container}>
      <textarea placeholder="Write your comment..." />
      <div className={s.containerList}>
        {arr.map((c) => (
          <div key={Math.random()}>{c}</div>
        ))}
      </div>
    </div>
  );
}

const CommentDetail = () => {
  return (
    <div className={s.containerDetailComment}>
      <div className={s.dataUser}>
        <img src={icon} alt="userImg" />
        <h5>Aramis jaime</h5>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        impedit accusantium sit molestiae, officia, similique expedita ullam aut
        consectetur quisquam, officiis fugiat nemo omnis quasi? Sequi possimus
        inventore atque recusandae!
      </p>
    </div>
  );
};
