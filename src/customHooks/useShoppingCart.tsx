import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useEffect, useState } from "react";
import { ResponseVerifyProduct } from "../interfaces/interfaces";
import { CartIconAdd, CartIconAdded } from "../assets/svgs/cart";
const baseUrl = `${import.meta.env.VITE_SOME_BASE_URL}`;
//!tengo que transformar esto a shoppingCart

interface Props {
  idGame: string | number | undefined;
}

export default function useShoppingCart({ idGame }: Props) {
  const { user, loginWithPopup } = useAuth0();
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>();

  const addGameShoppingCart = useCallback(
    async (idGame: string | number | undefined) => {
      if (user) {
        const body = {
          idGame,
          idUser: user?.sub,
        };
        const url = baseUrl + "/shoppingCart/add";
        await fetch(url, {
          method: "post",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setIsAddedToCart(true);
      }
    },
    [user]
  );
  const deleteGameShoppingCart = useCallback(
    async (idGame: string | number | undefined) => {
      if (user) {
        const body = {
          idGame,
          idUser: user?.sub,
        };
        const url = baseUrl + "/shoppingCart/delete";
        await fetch(url, {
          method: "delete",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setIsAddedToCart(false);
      }
    },
    [user]
  );

  const isGameShoppingCartFunction = useCallback(
    //! ask if the game is a favorite
    async (idGame: string | number | undefined) => {
      if (user) {
        const url =
          baseUrl +
          `/shoppingCart/verifyGameAdded?idGame=${idGame}&idUser=${user?.sub}`;
        const res = await fetch(url);
        const data: ResponseVerifyProduct = await res.json();
        setIsAddedToCart(data.data);
        return data.data || false;
      }
      return false;
    },
    [user]
  );

  const switchActionAddAndRemove = async () => {
    if (user) {
      //! this ask if the user exist and change the action when the some button is clicked
      if (isAddedToCart) return await deleteGameShoppingCart(idGame);
      return await addGameShoppingCart(idGame);
    }
    await loginWithPopup(); //! this is will show when the unser is not loged
  };

  const switchIcon = () => {
    //! this show differents icons if the game is or not favorite
    if (isAddedToCart) return CartIconAdded;
    return CartIconAdd;
  };

  useEffect(() => {
    if (isAddedToCart === undefined && idGame && user) {
      //! this is run when the component is mounted and define the first status
      isGameShoppingCartFunction(idGame).then((res) => {
        setIsAddedToCart(res);
      });
    }
  }, [idGame, isAddedToCart, isGameShoppingCartFunction, user]);

  return {
    addGameShoppingCart,
    deleteGameShoppingCart,
    isGameShoppingCartFunction,
    isAddedToCart,
    switchActionAddAndRemove,
    switchIcon,
  };
}
