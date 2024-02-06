import { useCallback, useEffect, useState } from "react";
import { ResponseGetUser, UserDb } from "../interfaces/interfaces";
import { useAuth0 } from "@auth0/auth0-react";
interface InputFunction {
  idUser?: string;
}

const baseUrl = `${import.meta.env.VITE_SOME_BASE_URL}/user`;

export default function useFriends() {
  const { user } = useAuth0();
  const [friendsPending, setFriendsPending] = useState<UserDb[]>();
  const [friendsAccepted, setFriendsAccepted] = useState<UserDb[]>();

  const getFriendsAccepted = useCallback(
    async ({ idUser = user?.sub }: InputFunction) => {
      if (!idUser) return;
      const url = `${baseUrl}/friendList?idUser=${idUser}`;
      const response: ResponseGetUser = await fetch(url).then((res) =>
        res.json()
      );
      return response;
    },
    [user]
  );

  const getFriendsPending = useCallback(
    async ({ idUser = user?.sub }: InputFunction) => {
      if (!idUser) return;
      const url = `${baseUrl}/requestPending?idUser=${idUser}`;
      const response: ResponseGetUser = await fetch(url).then((res) =>
        res.json()
      );
      return response;
    },
    [user]
  );

  const initState = () => {
    getFriendsAccepted({}).then((res) => res && setFriendsAccepted(res.data));
    getFriendsPending({}).then((res) => res && setFriendsPending(res.data));
  };

  const acceptFriend = async ({
    idEmitterRequest = user?.sub,
    idReceiverRequest,
  }: {
    idEmitterRequest?: string;
    idReceiverRequest: string;
  }) => {
    if (!idEmitterRequest) return;
    const url = `${baseUrl}/acceptFriend`;
    const body = {
      idEmitterRequest,
      idReceiverRequest,
    };
    await fetch(url, {
      method: "put",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    initState();
  };
  const rejectFriend = async ({
    idEmitterAction = user?.sub,
    idForDelete,
  }: {
    idEmitterAction?: string;
    idForDelete: string;
  }) => {
    if (!idEmitterAction) return;
    const url = `${baseUrl}/deleteFriend`;
    const body = {
      idEmitterAction,
      idForDelete,
    };
    await fetch(url, {
      method: "delete",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    initState();
  };

  const sendRequestToFriend = async ({
    idEmitterRequest = user?.sub,
    emailReceiverRequest,
  }: {
    idEmitterRequest?: string;
    emailReceiverRequest: string;
  }) => {
    if (!idEmitterRequest) return;
    const url = `${baseUrl}/addFriend`;
    const body = {
      idEmitterRequest,
      emailReceiverRequest,
    };
    await fetch(url, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    initState();
  };

  useEffect(() => {
    if (!friendsPending && !friendsAccepted) {
      getFriendsAccepted({}).then((res) => res && setFriendsAccepted(res.data));
      getFriendsPending({}).then((res) => res && setFriendsPending(res.data));
    }
  }, [friendsAccepted, friendsPending, getFriendsAccepted, getFriendsPending]);

  return {
    friendsPending,
    friendsAccepted,
    getFriendsAccepted,
    getFriendsPending,
    acceptFriend,
    rejectFriend,
    sendRequestToFriend,
    user,
  };
}
