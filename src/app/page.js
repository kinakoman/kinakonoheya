
import Link from "next/link";
import style from "@/css/global.module.css"

export default function Home() {
  return (
    <>
      {/* <LinkList /> */}
      <div>
        <p className={style.text}>サイトはこちらに移動しています。</p>
        <Link className={style.text2} href="https://kinako-no-heya.web.app/">https://kinako-no-heya.web.app/</Link>
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