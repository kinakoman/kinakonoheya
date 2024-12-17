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
    tag: ["React", "TypeScript", "TailwindCSS"],
    date: ["2024", "11", "05"],
    latest: ["2024", "12", "17"]
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
                        さらに、Reactと併用して利用されることが多いTypeScript、TailwindCSSの導入方法と入門的な知識についても学習していきます。
                    </Text>
                    <Text>この記事ではReactアプリケーションの始め方についてまとめます。</Text>
                </Section>
                <Section title="Reactプロジェクトの開始">
                    <Text>Reactのプロジェクトを開始するにはNode.jsのコマンドを用いるのが便利です。
                        Node.jsのインストールがまだの方はこちらをご覧ください。
                    </Text>
                    <LinkIn link={"javascript/node-setup"} title={"Node.jsのインストール方法"}></LinkIn>
                    <SubSection>プロジェクトの作成</SubSection>
                    <Text>Reactのプロジェクトを作成するには以下のコマンドを実行します。
                        viteのコマンドを利用すると対話形式でひな形の作成が行えます。
                        今回はReactとTypeScriptを選択し、その後指示に従い必要パッケージのインストールを行います。
                    </Text>
                    <CodeBox lang="shell" comment="プロジェクトの作成">{`$ npm create vite@latest
Need to install the following packages:
create-vite@6.0.1
Ok to proceed? (y) y


> npx
> create-vite

✔ Project name: … react-sample
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Scaffolding project in /home/user/react-sample...

Done. Now run:

  cd api-test
  npm install
  npm run dev
$ cd ./react-sample/
/react-sample$ npm install`}</CodeBox>
                    <Text>Reactのバージョンは次の通りです。</Text>
                    <CodeBox lang="json" comment="/react-sample/package.json">{`{
  "name": "api-test",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.15.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.15.0",
    "vite": "^6.0.1"
  }
}`}</CodeBox>
                </Section>
                <Section title="ローカル環境での開発">
                    <Text>以下のコマンドを実行してローカル環境でのアプリケーション開発を開始できます。コマンドはpackage.jsonから変更することも可能です。</Text>
                    <CodeBox lang="shell" comment="アプリケーションの起動">{`/react-sample$ npm run dev`}</CodeBox>
                    <Text>デフォルトでlocalhost:3000にアプリケーションが起動します。下のような画面が出力されれば成功しています。</Text>
                    <ImageSet alt="テスト画像" height={300} width={600} image={image1} />
                </Section>
                <Section title="おわりに">
                    <Text>今回の記事はここまでです。次回はGithubを用いたReactアプリケーションの公開方法についてまとめます。</Text>
                    <LinkIn link={"react/practice2"} title={"【React入門#2】GitHub pagesでの公開"}></LinkIn>
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
