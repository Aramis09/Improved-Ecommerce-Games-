import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseGetListGames } from "../../interfaces/interfaces";

export interface BodyDataSppCart {
  idGame: string | number | null;
  idUser: string | number | null;
}

interface GetWithId {
  id: string | number | undefined;
}

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  keepUnusedDataFor: 60,
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SOME_BASE_URL}`,
  }),
  tagTypes: ["updateSppCart"],
  endpoints: (builder) => ({
    getGamesList: builder.query<ResponseGetListGames, string>({
      query: (url) => url,
      keepUnusedDataFor: 1,
    }),
    addGameSoppingCart: builder.mutation<ResponseGetListGames, BodyDataSppCart>(
      {
        query: (bodyData) => ({
          url: "/shoppingCart/add",
          method: "POST",
          body: bodyData,
        }),
        invalidatesTags: ["updateSppCart"],
      }
    ),
    deleteGameSoppingCart: builder.mutation<
      ResponseGetListGames,
      BodyDataSppCart
    >({
      query: (bodyData: BodyDataSppCart) => ({
        url: "/shoppingCart/delete",
        method: "DELETE",
        body: bodyData,
      }),
      invalidatesTags: ["updateSppCart"],
    }),
    getGamesFromSppCart: builder.query<ResponseGetListGames, GetWithId>({
      query: ({ id }) => `/shoppingCart/${id}`,
      providesTags: ["updateSppCart"],
    }),
  }),
});

export const {
  useGetGamesListQuery,
  useAddGameSoppingCartMutation,
  useDeleteGameSoppingCartMutation,
  useGetGamesFromSppCartQuery,
} = gamesApi;
