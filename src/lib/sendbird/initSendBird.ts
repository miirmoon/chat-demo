import SendbirdChat from "@sendbird/chat";
import { GroupChannelModule } from "@sendbird/chat/groupChannel";

export const initSendBird = () => {
  return SendbirdChat.init({
    appId: process.env.NEXT_PUBLIC_SENDBIRD_APP_ID as string,
    modules: [new GroupChannelModule()],
  });
};
