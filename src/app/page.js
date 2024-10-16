import Meta from "@/components/Meta";
import LinkList from "@/components/LinkList"

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
      <LinkList />
    </>
  );
}
