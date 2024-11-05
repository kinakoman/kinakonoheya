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
    title: "【React入門#1】Reactの始め方",
    tag: ["React", "TypeScript", "Tailwind CSS"],
    date: ["2024", "11", "05"],
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
                    <Text>ReactはSPAのアプリケーション開発に適したJavaScriptライブラリであり、
                        今日のwebアプリケーション開発等で特に人気を集めています。</Text>
                    <Text>この記事を第一回に、Reactの入門学習として簡単なwebページの作成をまとめます。
                        さらに、Reactと併用して利用されることが多いTypeScript、Tailwind CSSの導入方法と入門的な知識についても学習していきます。
                    </Text>
                    <Text>この記事ではReactアプリケーションの始め方についてまとめます。</Text>
                </Section>
                <Section title="Reactプロジェクトの開始">
                    <Text>Reactのプロジェクトを開始するにはNode.jsのコマンドを用いるのが便利です。
                        Node.jsのインストールがまだの方はこちらをご覧ください。
                    </Text>
                    <LinkIn link={"JavaScript/NodeInstall"} title={"Node.jsのインストール方法"}></LinkIn>
                    <SubSection>プロジェクトの作成</SubSection>
                    <Text>Reactのプロジェクトを作成するには以下のコマンドを実行します。
                        今回はTypeScriptに対応したReactのひな形を作成します。
                    </Text>
                    <CodeBox lang="shell" comment="プロジェクトの作成">{`$ npx create-react-app@latest react-sample --template typescript`}</CodeBox>
                    <Text>{`npx create-react-app@latest react-sample`}でreact-sampleという名前でReact最新バージョンのプロジェクトを、
                        {`--template typescript`}でTypeScriptを導入します。
                    </Text>
                    <Text>Reactのバージョンは次の通りです。</Text>
                    <CodeBox lang="json" comment="/react-sample/package.json">{`{
  "name": "react-sample",
  "version": "0.1.0",
  "private": true,
  ~省略~
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.119",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
~省略~
  }
}`}</CodeBox>
                </Section>
                <Section title="ローカル環境での開発">
                    <Text>以下のコマンドを実行してローカル環境でのアプリケーション開発を開始できます。コマンドはpackage.jsonから変更することも可能です。</Text>
                    <CodeBox lang="shell" comment="アプリケーションの起動">{`/react-sample$ npm start`}</CodeBox>
                    <Text>デフォルトでlocalhost:3000にアプリケーションが起動します。下のような画面が出力されれば成功しています。</Text>
                    <ImageSet alt="テスト画像" height={300} width={600} image={image1} />
                </Section>
                <Section title="おわりに">
                    <Text>今回の記事はここまでです。次回はGithubを用いたReactアプリケーションの公開方法についてまとめます。</Text>
                    <LinkIn link={"React/ReactPractice2"} title={"【React入門#2】GitHub pagesでの公開"}></LinkIn>
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
