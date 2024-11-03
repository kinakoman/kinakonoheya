import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"

export const data = {
    title: "【Next.js入門#5】propsの使い方",
    tag: ["Next.js", "React"],
    date: ["2024", "11", "01"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>この記事はNext.js入門第4回の記事の続きになります。</Text>
                    <LinkIn link={"Next/NextPractice4"} title={"【Next.js入門#4】コンポーネントの作成"}></LinkIn>
                    <Text>今回の記事では、
                        コンポーネント間での値のやり取りが可能になるpropsの概念を学習します。
                    </Text>
                </Section>
                <Section title="propsの使い方">
                    <Text>今回作成するwebページには初期画面に各コンテンツへの遷移リンクを配置したいと思います。
                        リンクの作成をpage.js内で行っても良いですが、ページがごちゃついてしまうのでコンポーネントを利用することにします。
                    </Text>
                    <Text>componentのフォルダ内でLinkSet.jsのファイルを作成し、このコンポーネントでリンクの生成を行います。</Text>
                    <Text>リンクは1つではないので、生成したいリンクのタイトルはpage.js内で配列として用意し、
                        この配列に基づいてLinkSet.js内でリンクを生成することにします。</Text>
                    <Text>そのために、用意した配列をコンポーネントに渡す必要がありますが、このようにコンポーネント間でやり取りする値や配列のことをpropsと呼びます。</Text>
                    <Text>実際にpropsのやり取りを含めたファイルが次のようになります。</Text>
                    <CodeBox lang={"javascript"} comment={"/next-sample/src/app/component/LinkSet.js"}>{`export default function LinkSet({ linkList }) {
    return (
        <>
            <ul>
                <li>{linkList[0]}</li>
                <li>{linkList[1]}</li>
                <li>{linkList[2]}</li>
            </ul>
        </>
    )
}`}</CodeBox>
                    <CodeBox lang={"javascript"} comment={"/next-sample/src/app/page.js"}>{`import LinkSet from "./component/LinkSet";

const linkList = ["ページ1", "ページ2", "ページ3"]

export default function Home() {
  return (
    <>
      <LinkSet linkList={linkList}></LinkSet>
    </>
  );
}
`}</CodeBox>
                    <Text>propsのやり取りをするためには、まずコンポーネント側の関数の引数に{`{}`}で囲って変数を定義します。
                        さらに、コンポーネントを利用する親ファイルで、コンポーネントのタグ内で定義した変数に受け渡ししたい値を{`{}`}で囲って代入します。</Text>
                    <Text>これで、定義した変数(props)を通して代入した値の受け渡しが行われます。</Text>
                    <Text>propsの変数をreturn内で利用する場合も{`{}`}で囲って利用します。</Text>
                    <ImageSet alt="リスト作成後のページ" height={200} width={700} image={image1} />
                    <Text>コンポーネント間でpropsの受け渡しに成功し、リストが出来ていることがわかります。</Text>
                </Section>
                <Section title="children">
                    <Text>リストの最初に「ページリスト」とタイトルをつけることにします。</Text>
                    <Text>少し回りくどいですがこれもコンポーネントで作成します。componentフォルダに新たにLinkTitle.jsを作成します。</Text>
                    <CodeBox lang={"javascript"} comment={"/next-sample/src/app/component/LinkTitle.js"}>{`export default function LinkTitle({ children }) {
    return (
        <div style={listTitleStyle}>
            {children}
        </div>
    )
}
const listTitleStyle = {
    fontSize: "30px",
    fontWeight: "bold"
}
`}</CodeBox>
                    <Text>今回、return内でdivタグの生成し、ファイル内で定義したスタイルを適用しています。</Text>
                    <Text>このコンポーネントでもporpsを利用していることがわかると思いますが、今回利用しているchildrenは特殊なpropsになっています。</Text>
                    <Text>childrenは親ファイルで代入して受け渡しをするのではなく、コンポーネントのタグで囲うことで受け渡しが行われます。</Text>
                    <CodeBox lang={"javascript"} comment={"/next-sample/src/app/page.js"}>{`import LinkSet from "./component/LinkSet";
import LinkTitle from "./component/LinkTitle";

const linkList = ["ページ1", "ページ2", "ページ3"]

export default function Home() {
  return (
    <>
      <LinkTitle>
        ページリスト
      </LinkTitle>
      <LinkSet linkList={linkList}></LinkSet>
    </>
  );
}
`}</CodeBox>
                    <Text>親ファイル側でListTitleのタグで囲われた「ページリンク」がchildrenとしてListTitle.jsに渡され、変数としてdivタグの中に適用されることになります。</Text>
                    <ImageSet alt="リストのタイトルを作成" height={200} width={700} image={image2} />
                    <Text>「ページリスト」にコンポーネントで定義したスタイルが適用されています。</Text>
                    <SubSection>childrenはlayout.jsにも</SubSection>
                    <Text>入門第三回で、layout.jsのchildrenにpage.jsの内容が入ると説明しました。</Text>
                    <LinkIn link={"Next/NextPractice3"} title={"【Next.js入門#3】layout.jsの使い方"}></LinkIn>
                    <Text>これはまさにpropsのchildrenであり、Next.jsではデフォルトでpage.jsがlayout.jsにchildrenとして渡されるように設定されています。</Text>
                </Section>
                <Section title="おわりに">
                    <Text>今回の記事はここまでです。次回はreturn内でのJavaScript関数の実行方法を説明します。</Text>
                    <LinkIn link={"Next/NextPractice6"} title={"【Next.js入門#6】JavaScriptの実行と{}"}></LinkIn>
                </Section>
                {/* <Section title="セクション名">
                    <SubSection>サブセクションタイトル</SubSection>
                    <Text>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        <CodeIn>
                            {`console.log`}
                        </CodeIn>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                    </Text>
                    <LinkIn link={"PythonInstall"} title={"ページのタイトルページのタイトルページのタイトル"}></LinkIn>
                    <CodeBox lang={"javascript"} comment={"コードの例"}>{`console.log("test")`}</CodeBox>
                    <ImageSet alt="テスト画像" height={200} width={200} image={image} />
                </Section> */}
            </Contents>
        </>
    )
}
