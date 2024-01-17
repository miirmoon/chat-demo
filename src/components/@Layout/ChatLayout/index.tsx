import { initSendBird } from "@/src/lib/sendbird/initSendBird";
import { sendBirdSdkState } from "@/src/recoil/sendBird";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

interface Props {
  children: React.ReactNode;
}

const ChatLayout = ({ children }: Props) => {
  const setSendBirdSdk = useSetRecoilState(sendBirdSdkState);

  useEffect(() => {
    const sendBirdSdk = initSendBird();
    console.log(sendBirdSdk);
    setSendBirdSdk(sendBirdSdk);
  }, []);
  return children;
};

export default ChatLayout;
