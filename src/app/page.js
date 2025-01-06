
import LinkList from "@/components/main/LinkList"
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <LinkList /> */}
      <div>
        <p style={{ position: "absolute", top: "40%", left: "50%", translate: "-50% -50%", fontSize: "30px" }}>サイトはこちらに移動しています。</p>
        <Link style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", fontSize: "30px" }} href="https://kinako-no-heya.web.app/">https://kinako-no-heya.web.app/</Link>
      </div>
    </>
  );
}

const data = {
  title: "トップ"
}
export const metadata = {
  title: `${data.title} | きなこの部屋`
}