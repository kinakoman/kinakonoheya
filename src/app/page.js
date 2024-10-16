import Meta from "@/components/Meta";
import fs from "fs"

function name() {
  // for (let i = 0; i < 2; i++) {
  const arr = []
  for (let i = 0; i < 2; i++) {
    arr.push(<div>リスト</div>)
  }

  return arr
}

export default function Home() {
  return (
    <>
      <Meta title="トップ" />
      {name()}

      <ul>
        <li><a href="contents/new">リンク</a></li>
      </ul>
    </>
  );
}
