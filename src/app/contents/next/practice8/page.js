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
    title: "【Next.js入門#8】Next.jsでのページ遷移",
    tag: ["Next.js"],
    date: ["2024", "11", "08"],
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
                    <Text>この記事はNext.js入門第7回の記事の続きになります。</Text>
                    <LinkIn link={"next/practice7"} title={"【Next.js入門#7】key propsとUUID"}></LinkIn>
                    <Text>今回の記事では、Next.jsでのページ遷移について紹介します。
                    </Text>
                </Section>
                <Section title="App Router">
                    <Text>ほとんどのWebアプリケーションにはページ遷移機能が実装されています。
                        Next.js(およびReact)でのSPAでは同一ファイル内でリンクだけを変更し、疑似的にページ遷移を表現しています。
                    </Text>
                    <Text>App Routerとは現在のNext.jsでのページ遷移機能の名前です。
                        Next.jsではpage.jsファイルの内容がwebページのコンテンツとして表示されますが、
                        App Routerを用いたページ遷移ではプロジェクト内にフォルダを作成し、そのフォルダ内に新たにpage.jsファイルを作成することで遷移先のコンテンツを作成することが出来ます。
                    </Text>
                </Section>
                <Section title="ページ遷移の実装">
                    <SubSection>遷移先ページのファイル作成</SubSection>
                    <Text>遷移先のページを作成するためにはまずフォルダを作成します。このフォルダ名が遷移先ページのリンクにもなります。
                        今回はIntroductionというフォルダを作成します。
                    </Text>
                    <Text>作成したフォルダ内でpage.jsを作成します。このフォルダ内に遷移先ページのコンテンツを記述します。
                        デフォルトのpage.jsと同様にexport default 関数の中で記述を行い、メタデータなどの記述も可能になっています。
                    </Text>
                    <Text>今回は簡単にIntroductionのテキストを表示できるようにします。</Text>
                    <CodeBox lang="javascript" comment="/next-sample/src/app/Introduction/page.js">{`export default function Introduction() {
    return (
        <>
            <p>
                Introduction
            </p>
        </>
    )
}`}</CodeBox>
                    <SubSection>ページの移動</SubSection>
                    <Text>作成したIntroductionのページに移動してみます。デフォルトの{`localhost:3000`}で開発を行っている場合、ブラウザで{`localhost:3000/Introduction`}でページ遷移が行えるはずです。</Text>
                    <ImageSet alt="Introductionページ" height={250} width={600} image={image1} />
                    <Text>今回は{`/src/app/Introduction`}でページ遷移を実装しましたが、例えば、{`/src/app/contents/Introduction`}で実装した場合{`localhost:3000/contents/Introduction`}で遷移できます。
                        このように{`/src/app`}以下のディレクトリ構成でリンクを指定します。
                    </Text>
                    <SubSection>Linkコンポーネント</SubSection>
                    <Text>通常のhtmlではaタグでページ内に遷移用のリンクを生成します。
                        Next.jsではaタグの代わりにLinkコンポーネントが実装されています。
                        Linkコンポーネントは、遷移先のページ情報を遷移前に予め取得しておくなどの遷移高速化の機能が備わっています。</Text>
                    <Text>Linkコンポーネントを利用するにはインポートを記述します。
                        また、リンクの指定はhrefで記述し、{`/src/app`}以下のディレクトリ構成で記述を行います。
                    </Text>
                    <CodeBox lang="javascript" comment="/next-sample/src/app/page.js">{`import LinkSet from "./component/LinkSet";
import LinkTitle from "./component/LinkTitle";
// Linkのインポート
import Link from "next/link";

const linkList = ["ページ1", "ページ2", "ページ4"]

export default function Home() {
  return (
    <>
      <LinkTitle>
        ページリスト
      </LinkTitle>
      <LinkSet linkList={linkList}></LinkSet>
      {/* リンクの実装 */}
      <Link href="Introduction">ページ遷移</Link>
    </>
  );
}`}</CodeBox>
                    <Text>トップページにリンクが生成され、クリックすればページが遷移します。</Text>
                    <ImageSet alt="Linkコンポーネントの実装" height={250} width={600} image={image2} />
                </Section>
                <Section title="おわりに">
                    <Text>今回の記事はここまでです。次回はNext.jsはGithub Pagesを用いたNextアプリケーションの公開について解説します。</Text>
                    <LinkIn link={"next/practice9"} title={"【Next.js入門#9】GitHub Pagesでの公開"}></LinkIn>
                </Section>
            </Contents>
        </>
    )
}
