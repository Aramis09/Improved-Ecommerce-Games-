import { CheckIcon } from "../../../../assets/svgs/check";
import { RejectIcon } from "../../../../assets/svgs/reject";
import { TrashIcon } from "../../../../assets/svgs/trash";
import { UserDb } from "../../../../interfaces/interfaces";
import s from "./s.module.scss";

interface Props {
  friend: UserDb;
  status: "pending" | "accepted";
  acceptFriend: ({
    idEmitterRequest,
    idReceiverRequest,
  }: {
    idEmitterRequest?: string | undefined;
    idReceiverRequest: string;
  }) => Promise<void>;
  rejectFriend: ({
    idEmitterRequest,
    idForDelete,
  }: {
    idEmitterRequest?: string | undefined;
    idForDelete: string;
  }) => Promise<void>;
}

export const FriendItem = ({
  friend,
  status,
  acceptFriend,
  rejectFriend,
}: Props) => {
  return (
    <div className={s.itemFriend}>
      <img src={friend.image} alt="friendImg" />
      <p>{friend.email}</p>
      {status === "accepted" ? (
        <div className={s.containerIcons}>
          <TrashIcon
            styles={s.trashIcon}
            onClick={() => rejectFriend({ idForDelete: friend.id })}
          />
        </div>
      ) : (
        <div className={s.containerIcons}>
          <CheckIcon
            styles={s.checkIcon}
            onClick={() =>
              acceptFriend({
                idReceiverRequest: friend.id,
              })
            }
          />
          <RejectIcon
            styles={s.rejectIcon}
            onClick={() => rejectFriend({ idForDelete: friend.id })}
          />
        </div>
      )}
    </div>
  );
};
