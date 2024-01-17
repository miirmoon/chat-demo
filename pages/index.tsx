import ChatLayout from "@/src/components/@Layout/ChatLayout";
import Link from "next/link";

const Home = () => {
  return (
    <ChatLayout>
      <main>
        <h1>Chat Demo</h1>
        <button>그룹채널 생성</button>
        <Link href="/channels">채널 리스트</Link>
      </main>
    </ChatLayout>
  );
};

export default Home;
