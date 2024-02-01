import { useState } from "react";
import s from "./s.module.scss";
import ICON_SEARCH from "../../assets/svgs/search.svg";

interface Props {
  onSearch: ({ valueForSearch }: { valueForSearch: string }) => Promise<void>;
}
export default function Search({ onSearch }: Props) {
  const [valueForSearch, setValueForSearch] = useState<string>("");
  return (
    <div className={s.container}>
      <input
        type="text"
        onChange={(evt) => setValueForSearch(evt.target.value)}
        placeholder="search video games"
      />
      <img
        src={ICON_SEARCH}
        alt="iconToSearch"
        onClick={() => onSearch({ valueForSearch })}
      />
    </div>
  );
}
