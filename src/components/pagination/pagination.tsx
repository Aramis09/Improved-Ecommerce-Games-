import { useRef, useState } from "react";
import s from "./s.module.scss";

interface Props<T> {
  onClick: (pageNumber: string) => Promise<T>;
}
const initArrState = [1, 2, 3, 4, 5];
export default function Pagination<T>({ onClick }: Props<T>) {
  const [numberPages, setNumberPages] = useState<number[]>(initArrState);
  const [selected, setSelected] = useState(1);
  // const hanlderArrowGoBack = () => {
  //   setSelected((prev) => {
  //     if (prev === 1) return prev;
  //     const newSelected = prev - 1;
  //     onClick(String(newSelected));
  //     return newSelected;
  //   });
  // };

  // const hanlderArrowGoNext = () => {
  //   setSelected((prev) => {
  //     const newSelected = prev + 1;
  //     if (prev < 5) {
  //       onClick(String(newSelected));
  //       return newSelected;
  //     }

  //     setNumberPages((prevArr) => {
  //       const lastNumber = prevArr[prevArr.length - 1];
  //       let newArrNumber = [...prevArr];
  //       newArrNumber.push(...[lastNumber + 1, lastNumber + 2]);
  //       newArrNumber = newArrNumber.slice(lastNumber - 3, lastNumber + 2);
  //       return newArrNumber;
  //     });
  //     onClick(String(newSelected));

  //     return newSelected;
  //   });
  // };

  return (
    <div className={s.container}>
      {/* <button onClick={hanlderArrowGoBack}>ant</button> */}

      {numberPages.map((number) => (
        <button
          key={Math.random()}
          onClick={() => {
            setSelected(number);
            onClick(String(number));
          }}
          style={{ color: `${selected === number ? "green" : ""}` }}
        >
          {number}
        </button>
      ))}
      {/* <button onClick={hanlderArrowGoNext}>sig</button> */}
    </div>
  );
}
