import Search from "../../components/search/search";
import useFriends from "../../customHooks/useFriends";
import { FriendItem } from "./components/friendItem.tsx/friendItem";
import s from "./s.module.scss";

export default function Friends() {
  const {
    sendRequestToFriend,
    friendsAccepted,
    friendsPending,
    acceptFriend,
    rejectFriend,
    user,
  } = useFriends();

  return friendsAccepted && friendsPending && user ? (
    <div className={s.container}>
      <div className={s.containerTable}>
        <Search
          action="send"
          placeHolder="Add friend: Write Email"
          styles={s.search}
          onSearch={({ valueForSearch }) =>
            sendRequestToFriend({ emailReceiverRequest: valueForSearch })
          }
        />
        <div>
          <h5>Pending</h5>
          <div className={s.containerPending}>
            {friendsPending.length > 0 ? (
              friendsPending.map((friend) => (
                <FriendItem
                  friend={friend}
                  status="pending"
                  acceptFriend={acceptFriend}
                  rejectFriend={rejectFriend}
                  key={Math.random()}
                />
              ))
            ) : (
              <p style={{ textAlign: "center" }}>No friends pending ...</p>
            )}
          </div>
        </div>
        <div>
          <h5>Accepted</h5>
          <div className={s.containerAccepted}>
            {friendsAccepted.length > 0 ? (
              friendsAccepted.map((friend) => (
                <FriendItem
                  acceptFriend={acceptFriend}
                  rejectFriend={rejectFriend}
                  friend={friend}
                  status="accepted"
                  key={Math.random()}
                />
              ))
            ) : (
              <p style={{ textAlign: "center" }}>No friends accepted ...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
