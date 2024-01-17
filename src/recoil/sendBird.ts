import { SendbirdChatWith } from "@sendbird/chat";
import { GroupChannelModule } from "@sendbird/chat/groupChannel";
import { atom } from "recoil";

export const sendBirdSdkState = atom<SendbirdChatWith<
  GroupChannelModule[]
> | null>({
  key: "sendBirdSdkState",
  default: null,
});
