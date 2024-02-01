import { useState } from "react";
import s from "./s.module.scss";

interface Props<T> {
  onClick: (pageNumber: string) => Promise<T>;
}

export default function Pagination<T>({ onClick }: Props<T>) {
  const numberPages = [1, 2, 3, 4, 5];
  const [selected, setSelected] = useState(1);
  return (
    <div className={s.container}>
      {numberPages.map((number) => (
        <button
          onClick={() => {
            setSelected(number);
            onClick(String(number));
          }}
          style={{ color: `${selected === number ? "green" : ""}` }}
        >
          {number}
        </button>
      ))}
    </div>
  );
}
