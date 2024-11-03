
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
    title: "【Next.js入門#1】Next.jsの始め方",
    tag: ["Next.js", "React", "Node.js"],
    date: ["2024", "10", "28"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>Next.jsはwebページ・アプリケーション開発で最近よく利用されているフレームワークです。この記事を第一弾に、Next.jsの入門学習として
                        簡単なwebページの作成をまとめていきます。以降の記事は随時更新予定です。
                    </Text>
                    <Text>Next.jsで必須となる要素を学習しながら、最終的には読者の皆様がこのブログサイトの枠組みを作成して頂けることを目指します。</Text>
                    <Text>この記事では、Next.jsの概要とプロジェクトの開始方法についてまとめます。</Text>
                </Section>
                <Section title="Next.jsとは">
                    <Text>Next.jsとはJavaScriptのライブラリReactのフレームワークです。Reactの特徴であるSPA、コンポーネントベースの開発等の良さは引き継ぎつつ、
                        SGの利用や独自のコンポーネントでさらに利便性を高めています。
                    </Text>
                    <Text>SSRとSGの違いについてこちらの記事でもまとめています。</Text>
                    <LinkIn link={"Global/TypesOfWebs"} title={"SPA・CSR・SSR・SSG"}></LinkIn>
                    <Text>
                        Next.jsはSPAの弱点でもあった初回ロードの長さをSGを利用することで解決し、初回ロード・ページ遷移ともに高速なwebページの作成が可能です。
                    </Text>
                </Section>
                <Section title="Next.jsの始め方">
                    <Text>以降の記事はnpmのインストールを前提とします。まだの方は以下の記事をご覧ください。</Text>
                    <LinkIn link={"JavaScript/NodeInstall"} title={"Node.jsのインストール方法"}></LinkIn>
                    <SubSection>プロジェクトの作成</SubSection>
                    <Text>Next.jsのプロジェクトは次のコマンドで実行できます。今回はnext-sampleという名前でプロジェクトを作成します。</Text>
                    <CodeBox lang={"shell"} comment={"Nextプロジェクトの作成"}>{`~$ npm create next-app@latest
Need to install the following packages:
create-next-app@15.0.1
Ok to proceed? (y) y


> npx
> create-next-app

✔ What is your project named? … next-sample
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a 'src/' directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for next dev? … No / Yes
✔ Would you like to customize the import alias (@/* by default)? … No / Yes`}</CodeBox>
                    <Text>今回は各種設定は初期入力のままEnter入力しています。特に、今回TypeScriptは利用しません。</Text>
                    <Text>しばらく待ち、ターミナルにSuccess!の文字が表示されれば成功しています。</Text>
                    <SubSection>開発の開始</SubSection>
                    <Text>プロジェクトディレクトリに移ります。ディレクトリ内にはNext.jsフレームワークの各種モジュール等が生成されています。各種ファイルの詳細な説明は
                        記事の中で随時紹介していきます。
                    </Text>
                    <Text>Next.jsのバージョンは15.0.1になっています。</Text>
                    <CodeBox lang={"shell"} comment={"バージョンの確認"}>{`~/next-sample$ cat package.json
{
  "name": "next-sample",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "19.0.0-rc-69d4b800-20241021",
    "react-dom": "19.0.0-rc-69d4b800-20241021",
    "next": "15.0.1"
  },
  "devDependencies": {
    "eslint": "^8",
    "eslint-config-next": "15.0.1"
  }
}`}</CodeBox>
                    <Text>では、Next.jsのページを表示してみます。ターミナルで次のようにコマンドを入力します。コマンドはpackage.jsonから変更可能です。</Text>
                    <CodeBox lang={"shell"} comment={"ページの表示"}>{`~/next-sample$ npm run dev`}</CodeBox>
                    <Text>デフォルトでlocalhost:3000にページが表示されるはずです。</Text>
                    <ImageSet alt="初期画面" height={250} width={400} image={image1} />
                    <SubSection>初期ページの編集</SubSection>
                    <Text>初期ページの編集を行います。{`/src/app/`}の中のpage.jsをエディタで開きます。</Text>
                    <Text>page.jsを以下のように書き換えてみます。</Text>
                    <CodeBox lang={"javascript"} comment={"/next-sample/src/app/page.js"}>{`export default function Home() {
  return (
    <>
      <p>hello,world!</p>
    </>
  );
}`}</CodeBox>
                    <Text>npm run devでページを起動している場合、ファイルを保存するとブラウザをロードすることなく更新が適用されます。</Text>
                    <ImageSet alt="更新後画面" height={250} width={400} image={image2} />
                </Section>
                <Section title="おわりに">
                    <Text>今回の記事はここまでです。次回はNext.jsの基礎としてタグの生成とスタイルの適用についてまとめます。</Text>
                    <LinkIn link={"Next/NextPractice2"} title={"【Next.js入門#2】タグとスタイル"}></LinkIn>
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
