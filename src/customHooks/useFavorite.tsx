import { useAuth0 } from "@auth0/auth0-react";
import { ResponseVerifyProduct } from "../interfaces/interfaces";
import { useCallback, useEffect, useState } from "react";
import { FavIconAdded, FavIconForAdd } from "../assets/svgs/fav";

interface Props {
  idGame: string | number | undefined;
}

const baseUrl = `${import.meta.env.VITE_SOME_BASE_URL}`;

export default function useFavorite({ idGame }: Props) {
  const { user, loginWithPopup } = useAuth0();
  const [isFavorite, setIsFavorite] = useState<boolean>();
  console.log(isFavorite);

  const addGameToFavorite = useCallback(
    async (idGame: string | number | undefined) => {
      if (user) {
        const body = {
          idGame,
          idUser: user?.sub,
        };
        const url = baseUrl + "/games/addWish";
        await fetch(url, {
          method: "post",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setIsFavorite(true);
      }
    },
    [user]
  );
  const deleteGameFromFavorite = useCallback(
    async (idGame: string | number | undefined) => {
      if (user) {
        const body = {
          idGame,
          idUser: user?.sub,
        };
        const url = baseUrl + "/games/deleteWish";
        await fetch(url, {
          method: "delete",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setIsFavorite(false);
      }
    },
    [user]
  );

  const isGameFavoriteFunction = useCallback(
    //! ask if the game is a favorite
    async (idGame: string | number | undefined) => {
      if (user) {
        const url =
          baseUrl +
          `/games/verifyGameInWishList?idGame=${idGame}&idUser=${user?.sub}`;
        const res = await fetch(url);
        const data: ResponseVerifyProduct = await res.json();
        setIsFavorite(data.data);
        return data.data || false;
      }
      return false;
    },
    [user]
  );

  const switchActionAddAndRemove = async () => {
    if (user) {
      //! this ask if the user exist and change the action when the some button is clicked
      if (isFavorite) return await deleteGameFromFavorite(idGame);
      return await addGameToFavorite(idGame);
    }
    await loginWithPopup(); //! this is will show when the unser is not loged
  };

  const switchIcon = () => {
    //! this show differents icons if the game is or not favorite
    if (isFavorite) return FavIconAdded;
    return FavIconForAdd;
  };

  // const switchIcon = ({styles}:{styles:string}) => {
  //   //! this show differents icons if the game is or not favorite
  //   if (isFavorite) return FavIconAdded({styles});
  //   return FavIconForAdd({styles});
  // };

  useEffect(() => {
    if (isFavorite === undefined) {
      //! this is run when the component is mounted and define the first status
      idGame &&
        isGameFavoriteFunction(idGame).then((res) => {
          setIsFavorite(res);
        });
    }
  }, [idGame, isFavorite, isGameFavoriteFunction]);

  return {
    addGameToFavorite,
    deleteGameFromFavorite,
    isGameFavoriteFunction,
    isFavorite,
    switchActionAddAndRemove,
    switchIcon,
  };
}
