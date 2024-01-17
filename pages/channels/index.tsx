import ChatLayout from "@/src/components/@Layout/ChatLayout";
import { sendBirdSdkState } from "@/src/recoil/sendBird";
import {
  GroupChannelFilter,
  GroupChannelListOrder,
} from "@sendbird/chat/groupChannel";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const Channels = () => {
  const router = useRouter();
  const sendBirdSdk = useRecoilValue(sendBirdSdkState);

  useEffect(() => {
    const groupChannelFilter = new GroupChannelFilter();
    groupChannelFilter.includeEmpty = true; // Group channels with no members will be included.

    const params = {
      filter: groupChannelFilter,
      order: GroupChannelListOrder.LATEST_LAST_MESSAGE,
    };
    const collection =
      sendBirdSdk?.groupChannel.createGroupChannelCollection(params);

    console.log(collection);
  }, []);

  return (
    <ChatLayout>
      <main>
        <h1>Channel List</h1>
        <button onClick={router.back}>뒤로가기</button>
      </main>
    </ChatLayout>
  );
};

export default Channels;
