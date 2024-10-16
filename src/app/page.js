import Meta from "@/components/Meta";
import fs from "fs"
import path from "path"

function name() {
  // for (let i = 0; i < 2; i++) {
  const arr = []
  for (let i = 0; i < 2; i++) {
    arr.push(<div>リスト</div>)
  }

  return arr
}

async function getStaticProps() {
  const directory = path.join(process.cwd(), 'src', 'app', 'contents')
  const folders = fs.readdirSync(directory)

  const linkArr = []
  folders.forEach(element => {
    linkArr.push(<li><a href={`contents/${element}`}>{`${element}`}</a></li>)
  });

  return (
    <ul>
      {linkArr}
    </ul>
  )
}

export default function Home() {
  return (
    <>
      <Meta title="トップ" />
      {getStaticProps()}

      <ul>
        <li><a href="contents/new">リンク</a></li>
      </ul>
    </>
  );
}
