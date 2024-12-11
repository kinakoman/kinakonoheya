import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'
import image1 from "./image1.jpg"

export const data = {
    title: "【React入門#3】TailwindCSSの導入",
    tag: ["TailwindCSS", "React"],
    date: ["2024", "12", "09"],
    // latest: ["9999", "99", "99"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>この記事はReact入門第2回の記事の続きになります。</Text>
                    <LinkIn link="react/practice2" title="【React入門#2】GitHub Pagesでの公開"></LinkIn>
                    <Text>今回はReactプロジェクトへのTailwindCSSを導入し、実際にアプリケーションの更新を行っていきます。</Text>
                </Section>
                <Section title="TailwindCSSとは">
                    <Text>TailwindCSSは通常のCSSと同様にWebアプリケーションのスタイル適用を行います。
                        通常のCSSと異なる点はユーティリティクラス(utility class)と呼ばれる
                        記述スタイルを利用します。
                    </Text>
                    <Text>ユーティリティクラスは通常のCSSをTailwindCSS用に書きかえたクラスになっています。
                        ユーティリティクラスを組合せることでスタイル適用が可能になります。
                        利用可能なユーティリティクラスの一覧は公式ドキュメント
                        <a href="https://tailwindcss.com/docs/" style={{ textDecoration: "underline", color: "#12BFEE", fontWeight: "normal" }}>(https://tailwindcss.com/docs/)</a>
                        から確認できます。
                    </Text>
                </Section>
                <Section title="TailwindCSSのインストール">
                    <Text>プロジェクトのルートディレクトリに移動しTailwindCSSのインストールと初期化を行います。</Text>
                    <CodeBox lang="shell" comment="TailwindCSSのインストール">{`/react-sample$ npm install -D tailwindcss postcss autoprefixer
/react-sample$ npx tailwindcss init -p`}</CodeBox>
                    <Text>これで{`tailwind.config.js`}というファイルが生成されます。
                        TailwindCSSをプロジェクト内のファイルに適用するために{`tailwind.config.js`}の編集を行います。</Text>
                    <CodeBox lang="javascript" comment="/react-sample/tailwind.config.js">{`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],  // 追加
  theme: {
    extend: {},
  },
  plugins: [],
}`}</CodeBox>
                    <Text>次にReactプロジェクトのindex.cssを編集します。</Text>
                    <CodeBox lang="css" comment="/react-sample/src/index.css">{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</CodeBox>
                    <Text>これでTailwindCSSの導入は完了です。</Text>
                </Section>
                <Section title="TailwindCSSのスタイル適用">
                    <Text>通常のCSSをhtmlのdivタグに適用するにはstyleにCSSを指定しますが、
                        TailwindCSSではstyleではなくclassNameでユーティリティクラスを指定します。</Text>
                    <Text>また、通常のCSSはアプリケーションを記述するjsxやtsxのほかにcssファイルを用意し、クラスとして適用するのが普通ですが、
                        TailwindCSSはアプリケーションファイル内で直接記述することが前提になっているため、コードの可読性や実装速度が向上します。
                    </Text>
                    <Text>では、App.cssを以下のように編集してTailwindCSSが実装できていることを確認します。</Text>
                    <CodeBox lang="typescript" comment="/react-sample/src/App.tsx">{`import './App.css';

function App() {
  return (
    <div className='bg-red-600 font-bold h-40 text-center content-center'>Hello,world</div>
  );
}

export default App;
`}</CodeBox>
                    <ImageSet alt="更新後のwebページの画像" height={200} width={700} image={image1} />
                    <Text>Webページが更新されてTailwindCSSで指定されたスタイルが提要されていることが分かります。</Text>
                    <Text>TailwindCSSではこのような基礎的なスタイルの適用に加えて、
                        ホバーアクションやクリックアクション等のスタイルもユーティリティクラスを用いて記述できます。</Text>
                </Section>
                <Section title="おわりに">
                    <Text>今回の記事はここまでです。次回はReactでのアプリケーション開発の基礎知識として、
                        TSXでのタグの記述とコンポーネントについて解説します。
                    </Text>
                    <LinkIn link="react/practice4" title="【React入門#4】タグとコンポーネント"></LinkIn>
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
