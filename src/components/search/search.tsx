import { useState } from "react";
import s from "./s.module.scss";
import ICON_SEARCH from "../../assets/svgs/search.svg";
import SEND_ICON from "../../assets/svgs/send.svg";

interface Props {
  onSearch: ({ valueForSearch }: { valueForSearch: string }) => Promise<void>;
  styles?: string;
  placeHolder?: string;
  action?: "search" | "send";
}
export default function Search({
  onSearch,
  styles,
  placeHolder,
  action,
}: Props) {
  const [valueForSearch, setValueForSearch] = useState<string>("");

  const icon = action === "send" ? SEND_ICON : ICON_SEARCH;
  return (
    <div className={styles ? styles : s.container}>
      <input
        type="text"
        onChange={(evt) => setValueForSearch(evt.target.value)}
        placeholder={placeHolder || "search video games"}
      />
      <img
        src={icon}
        alt="iconToSearch"
        onClick={() => onSearch({ valueForSearch })}
      />
    </div>
  );
}
