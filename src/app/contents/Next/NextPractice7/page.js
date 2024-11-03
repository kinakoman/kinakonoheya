
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'
export const data = {
    title: "【Next.js入門#7】key propsとUUID",
    tag: ["Next.js", "React"],
    date: ["2024", "11", "02"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>この記事はNext.js入門第6回の記事の続きになります。</Text>
                    <LinkIn link={"Next/NextPractice6"} title={"【Next.js入門#6】JavaScriptの実行と{}"}></LinkIn>
                    <Text>今回の記事では、
                        key propsの指定とUUIDによるランダムIDの生成についてまとめます。
                    </Text>
                </Section>
                <Section title="key propsの必要性">
                    <Text>第6回でmap関数を用いてタグを出力した際に以下のようなエラーが出力されました。</Text>
                    <CodeBox lang={"shell"} comment={"エラー"}>{`Each child in a list should have a unique "key" prop.

Check the top-level render call using <ul>. See https://react.dev/link/warning-keys for more information.`}</CodeBox>
                    <Text>このエラーは配列から生成されたkey propsにidが設定されていないために出力されています。</Text>
                    <Text>配列などから一括でliタグやdivタグを一括で生成すると、各要素に紐づいているタグにそれぞれ固有のidを設定する必要があります。
                        これでNext.js(React)のアプリケーション側が各要素を一意に識別でき、レンダリングの最適化などが行えます。
                    </Text>
                    <CodeBox lang={"javascript"} comment={"/next-sample/src/app/component/LinkSet.js"}>{`export default function LinkSet({ linkList }) {
    return (
        <>
            <ul>
                {linkList.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
        </>
    )
}`}</CodeBox>
                    <Text>上のコードはkey propsへのid付与の一例です。これでエラーは発生しなくなっているはずです。</Text>
                </Section>
                <Section title="UUIDの利用">
                    <Text>key propsへのid付与は必須になりますが、固有のidを自分で生成するのは無理があり、アプリケーションが大きくなればidが重複してしまい予期せぬエラーに繋がります。</Text>
                    <Text>固有のidの自動生成に有効なのがUUIDになります。</Text>
                    <SubSection>UUIDのインストール</SubSection>
                    <Text>UUIDを利用するには、プロジェクトにUUIDをインストールします。</Text>
                    <CodeBox lang={"shell"} comment={"UUIDのインストール"}>{`/next-sample$ npm install uuid --save`}</CodeBox>
                    <Text>package.jsonでバージョンを確認してインストールに成功しているか確認します。</Text>
                    <CodeBox lang={"shell"} comment={"package.jsonの確認"}>{`/next-sample$ cat package.json
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
    "next": "15.0.1",
    "react": "19.0.0-rc-69d4b800-20241021",
    "react-dom": "19.0.0-rc-69d4b800-20241021",
    "uuid": "^11.0.2"
  },
  "devDependencies": {
    "eslint": "^8",
    "eslint-config-next": "15.0.1"
  }
}`}</CodeBox>
                    <Text>{`"uuid"`}が確認できたらインストールに成功しています。</Text>
                    <SubSection>UUIDの利用</SubSection>
                    <Text>では、LinkSet.jsのkeyをuuidを用いて設定します。</Text>
                    <CodeBox lang={"javascript"} comment={"/next-sample/src/app/component/LinkSet.js"}>{`import { v4 as uuidv4 } from "uuid"
export default function LinkSet({ linkList }) {
    return (
        <>
            <ul>
                {linkList.map((element) => <li key={uuidv4()}>{element}</li>)}
            </ul>
        </>
    )
}`}</CodeBox>
                    <Text>UUIDを利用するにはインポートを行い、関数として実行します。</Text>
                </Section>
                <Section title="おわりに">
                    <Text>今回の記事はここまでです。次回はNext.jsでのページ遷移について解説します。</Text>
                    <LinkIn link={"Next/NextPractice8"} title={"【Next.js入門#8】Next.jsでのページ遷移"}></LinkIn>
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
