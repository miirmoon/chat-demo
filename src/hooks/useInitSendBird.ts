import SendbirdChat from "@sendbird/chat";
import { OpenChannelModule } from "@sendbird/chat/openChannel";

export const useInitSendBird = () => {
  const initSendBird = () => {
    const sb = SendbirdChat.init({
      appId: process.env.NEXT_PUBLIC_SENDBIRD_APP_ID as string,
      modules: [new OpenChannelModule()],
    });

    return sb;
  };

  return { initSendBird };
};
