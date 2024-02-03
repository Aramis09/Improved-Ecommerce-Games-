interface Props {
  styles: string;
}
export const FavIconForAdd = ({ styles }: Props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 576 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={styles}
  >
    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path>
  </svg>
);

export const FavIconAdded = ({ styles }: Props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    version="1.1"
    viewBox="0 0 17 17"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={styles}
  >
    <g></g>
    <path d="M9.401 1.304c-0.996 0-2.097 0.169-3.305 0.546-9.587 2.996-5.316 9.618-4.060 10.272 2.131 1.105-1.151 3.574-1.151 3.574s2.817-0.824 6.404-1.192c4.312-0.44 9.155-1.068 9.592-3.467 0.684-3.761-1.559-9.733-7.48-9.733zM15.897 10.858c-0.327 1.795-5.989 2.373-8.71 2.65-1.353 0.139-2.593 0.34-3.624 0.538 0.141-0.351 0.216-0.719 0.185-1.093-0.035-0.418-0.244-1.196-1.244-1.716-0.372-0.222-1.708-1.95-1.479-3.878 0.294-2.469 3.082-3.84 5.369-4.555 1.064-0.332 2.076-0.5 3.007-0.5 1.971 0 3.581 0.732 4.787 2.177 1.627 1.95 2.031 4.608 1.709 6.377zM4 6.5c0-0.551 0.448-1 1-1s1 0.449 1 1-0.448 1-1 1-1-0.449-1-1zM9 6c0-0.553 0.447-1 1-1 0.552 0 1 0.447 1 1 0 0.551-0.448 1-1 1-0.553 0-1-0.449-1-1zM13.3 8.5c-5.542 6.142-9.6 0.95-9.6 0.95 3.2 2.864 9.6-0.95 9.6-0.95z"></path>
  </svg>
);