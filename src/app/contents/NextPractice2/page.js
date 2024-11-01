import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '../../components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '../../components/contents/CodeBox'
import CodeIn from '../../components/contents/CodeIn'
import LinkIn from '../../components/contents/LinkIn'
import ImageSet from '../../components/contents/ImageSet'
import image1 from "./image1.jpg"

export const data = {
  title: "【Next.js入門#2】タグとスタイル",
  tag: ["Next.js"],
  date: ["2024", "10", "29"]
}

export default function test() {
  return (
    <>
      <Meta title={data.title} />
      <Contents data={data}>
        <Section title="はじめに">
          <Text>この記事はNext.js入門第1回の記事の続きになります。</Text>
          <LinkIn link={"NextPractice1"} title={"【Next.js入門#1】Next.jsの始め方"}></LinkIn>
          <Text>この記事ではNext.jsでのタグの生成とスタイルの適用についてまとめます。</Text>
        </Section>
        <Section title="タグの生成">
          <Text>通常webページの要素を生成するにはhtmlファイルでタグを生成します。Next.jsではJavaScriptを
            htmlに変換してwebページを作成するJSX(JavaScript XML)で記述を行うことが出来るため、JavaScriptファイルでタグの生成を
            行います。
          </Text>
          <Text>タグの生成は関数のreturn内で行います。記述のルールとして重要なのが、returnで出力できる
            タグは1つまでという点です。複数のタグを出力するには親要素を作成してその中に子要素として取り込む
            必要があります。通常は空タグ{`<></>`}を生成してその子要素として自由にタグを記述します。
          </Text>
          <Text>では、page.jsの記述を更新してみます。</Text>
          <CodeBox lang={"javascript"} comment={"タグの生成方法"}>{`export default function Home() {
  return (
    <>
      <p>hello,world!</p>
      <p>こんにちは</p>
      <p>さようなら</p>
    </>
  );
}
`}</CodeBox>
          <Text>htmlの要素が増えていることが確認できるはずです。</Text>
        </Section>
        <Section title="スタイルの適用">
          <Text>次に、生成した要素にスタイルの適用を行います。スタイルの適用には大きく3つの方法があります。</Text>
          <SubSection>cssファイルで適用</SubSection>
          <Text>cssファイルで適用する方法はhtmlでのwebページ作成の経験があれば最も慣れ親しんだ方法になります。</Text>
          <Text>cssファイルの記述を適用するにはpage.jsファイルにそのファイルをインポートする必要があります。
            今回は新たにstyle.cssというファイルを作成してインポートします。
          </Text>
          <Text>また、通常のhtmlではcssを適用するためにclassを付与します。Next.jsでも同様ですが、
            classの記述はclssNameを用いる点が異なっています。
          </Text>
          <CodeBox lang={"css"} comment={"/next-sample/src/app/css/styles.css"}>{`.text1 {
    color: red;
}`}</CodeBox>
          <CodeBox lang={"javascript"} comment={"/next-sample/src/app/page.js"}>{`import "./css/styles.css"
export default function Home() {
  return (
    <>
      <p className="text1">hello,world!</p>
      <p>こんにちは</p>
      <p>さようなら</p>
    </>
  );
}`}</CodeBox>
          <SubSection>module.cssで適用</SubSection>
          <Text>module.cssはコンポーネント間のクラス競合の問題を解決するために開発されたcssです。
            特に理由の無い限り通常のcssよりもmodule.cssを利用することをお勧めします。
          </Text>
          <Text>
            module.cssは変数としてインポートします。classNameに代入する際は{`{}`}の中で変数.クラス名の
            JS変数として扱います。
          </Text>
          <CodeBox lang={"css"} comment={"/next-sample/src/app/page.module.css"}>{`.text2 {
  background-color: yellow;
}`}</CodeBox>
          <CodeBox lang={"javascript"} comment={"/next-sample/src/app/page.js"}>{`import "./css/styles.css"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <p className="text1">hello,world!</p>
      <p className={styles.text2}>こんにちは</p>
      <p>さようなら</p>
    </>
  );
}`}</CodeBox>
          <SubSection>ファイル内でスタイルの定義</SubSection>
          <Text>これまでは外部のcssで定義したスタイルをJSファイルの読み込む方法でしたが、JSファイル内で変数としてスタイルを
            定義し、タグに適用することもできます。
          </Text>
          <Text>アプリケーションの構成ファイルが増えた場合などは、
            JSファイル一つでスタイルの内容まで確認できるこの方法をとると修正等が簡単に行えると思います。
          </Text>
          <CodeBox lang={"javascript"} comment={"/next-sample/src/app/page.js"}>{`import "./css/styles.css"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <p className="text1">hello,world!</p>
      <p className={styles.text2}>こんにちは</p>
      <p style={styleIn}>さようなら</p>
    </>
  );
}

const styleIn = {
  fontSize: "24px",
  color: "blue"
}`}</CodeBox>
          <Text>スタイルの適用に成功していればページは以下のようになっているはずです。
          </Text>
          <ImageSet alt="スタイル適用後のページ" height={250} width={400} image={image1} />
        </Section>
        <Section title="おわりに">
          <Text>今回の記事はここまでです。次回はlayout.jsの使い方について解説します。</Text>
          <LinkIn link={"NextPractice3"} title={"【Next.js入門#3】layout.jsの使い方"}></LinkIn>
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
