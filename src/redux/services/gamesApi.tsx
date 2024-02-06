import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseGetListGames } from "../../interfaces/interfaces";

interface QuerysParamsGetGamesList {
  quantityResult?: number;
  orderRating?: "ASC" | "DESC";
  orderAlphabetical?: "ASC" | "DESC";
  pageNumber?: number;
  filterPrice?: string; //! filterPrice just can be minPriceLmaxPrice  80L110 it's  mandatory the word "L" in the middle values
}

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SOME_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getGamesList: builder.query<ResponseGetListGames, QuerysParamsGetGamesList>(
      {
        query: ({
          pageNumber = 1,
          filterPrice,
          orderAlphabetical = "ASC",
          orderRating = "ASC",
          quantityResult = 6,
        }) =>
          `/games/list?quantityResult=${quantityResult}&orderRating=${orderAlphabetical}`,
      }
    ),
  }),
});

export const { useGetGamesListQuery } = gamesApi;
