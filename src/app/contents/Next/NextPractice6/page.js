
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'

export const data = {
    title: "【Next.js入門#6】JavaScriptの実行と{}",
    tag: ["Next.js"],
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
                    <Text>この記事はNext.js入門第5回の記事の続きになります。</Text>
                    <LinkIn link={"Next/NextPractice5"} title={"【Next.js入門#5】propsの使い方"}></LinkIn>
                    <Text>今回の記事では、
                        Next.jsでのJavaScript構文の実行方法について解説します。
                    </Text>
                </Section>
                <Section title="returnの中でJacaScriptを実行したい">
                    <Text>入門第5回で次のようなコードを書きました。</Text>
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
                    <Text>せっかくリストを配列で用意したのだからmap関数等のJavaScriptの構文で自動でタグ生成を行いたいです。</Text>
                    <Text>Next.jsはJSXで書かれているためJavaScript構文は自由に使うことが出来ます。
                        しかし、export default 関数のreturn内だけは、htmlのタグ要素の記述しか許されないため
                        map関数等の実行はできません。
                    </Text>
                    <SubSection>return内での{`{}`}の活用</SubSection>
                    <Text>return内でJavaScriptを実行するためには{`{}`}でスクリプトを囲みます。</Text>
                    <Text>上のコードを{`{}`}を使って書き換えてみます。</Text>
                    <CodeBox lang={"javascript"} comment={"/next-sample/src/app/component/LinkSet.js"}>{`export default function LinkSet({ linkList }) {
    return (
        <>
            <ul>
                {linkList.map((element) => <li>{element}</li>)}
            </ul>
        </>
    )
}`}</CodeBox>
                    <Text>{`{}`}の中でmap関数を用いてliタグの生成を行いました。map関数は返り値を持つため、
                        返り値の中でliタグを生成し、export default 関数のreturn内で出力している形になります。
                    </Text>
                    <Text>map関数のelementをタグの中で記述する際に{`{element}`}としていますが、
                        これはmap関数の中でも返り値の中であっても、
                        htmlタグを記述する際はJavaSctipt構文は許されないというルールが適用されるためです。
                    </Text>
                    <Text>上の例では、export default 関数のreturnの外でmap関数の出力を新たに配列に格納し、
                        その配列を{`{}`}の中で記述することでも同様の出力が得られます。
                    </Text>
                    <SubSection>classNameやpropsの{`{}`}</SubSection>
                    <Text>これまでの学習の中で、claaNameにmodule.cssの変数を代入する時や、
                        propsを利用する時は{`{}`}を使うという説明をしてきました。
                    </Text>
                    <Text>この{`{}`}はまさにJavsScript構文を使用するためのものであり
                        本来はJS変数であるクラス名やpropsをreturn内で記述するために使用します。
                    </Text>
                </Section>
                <Section title="おわりに">
                    <Text>さて、上で紹介したmap関数で記述したコードをwebページに適用すると、
                        ブラウザのコンソールやコマンドラインに次のように出力されているのではないでしょうか。
                    </Text>
                    <CodeBox lang={"shell"} comment={"エラー"}>{`Each child in a list should have a unique "key" prop.

Check the top-level render call using <ul>. See https://react.dev/link/warning-keys for more information.`}</CodeBox>
                    <Text>これは、今回のようにNext.jsで配列を元にタグ出力を行う際に必須となる、key propsの指定を行っていないためです。</Text>
                    <Text>次回は、このkey propsの指定と、key props指定に有効なモジュールであるUUIDについて紹介します。</Text>
                    <LinkIn link={"Next/NextPractice7"} title={"【Next.js入門#7】key propsとUUID"}></LinkIn>
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
