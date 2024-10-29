import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '../../components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '../../components/contents/CodeBox'
import CodeIn from '../../components/contents/CodeIn'
import LinkIn from '../../components/contents/LinkIn'
import ImageSet from '../../components/contents/ImageSet'
import image from "../../icon.png"
import image1 from "./image1.jpg"

export const data = {
    title: "SPA・CSR・SSR・SSG",
    tag: ["React", "Next.js", "HTML"],
    date: ["2024", "10", "30"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>この記事ではwebページ作成において重要な概念である、CSRとSSRとSSG違い、SPAの概念についてまとめています。
                    </Text>
                </Section>
                {/* <Section title="APIとは">
                    <Text>API（Application Programming Interface）とは簡単に言えば仕様書です。
                        Pythonで例えると、numpyというモジュールにはArray Objectsのプログラムがあり、
                        このプログラムには型や処理などのルール(定義)が存在しています。このルールこそがAPIになります。
                    </Text>
                    <Text>Webページ作成におけるAPIはアプリケーションに必要なデータに当たります。
                        ブラウザに表示するhtmlを生成する際はAPIのデータをもとに構築され、表示するコンテンツのデータもAPIに含まれます。
                        そのため、APIは仕様書であると同時に設計図と材料であるといえます。
                    </Text>
                </Section> */}
                <Section title="SPAとは">
                    <Text>SPA(Single Page Application)とはwebアプリケーション開発手法の一つです。</Text>
                    <Text>多くのwebページにはリンクによるページ遷移機能が多く含まれます。
                        SPAが主流になる前の開発手法であるMPA(Multiple Page Application)では、ページ遷移のたびにサーバーにhtmlのリクエストを送り、生成されたhtmlを取得してブラウザで表示します。</Text>
                    <Text>SPAでは、まず最初にレンダリング(htmlを生成すること)済みのファイルを取得しブラウザで表示します。
                        以降のページ遷移では、遷移による差分箇所のみを更新することで疑似的に遷移を行います。</Text>
                    <Text>これにより、ページ全体をレンダリングしなければならないMPAに比べ、SPAは高速なページ遷移が実現できます。</Text>
                    <ImageSet alt="MPAとSPA" height={450} width={700} image={image1} />
                </Section>
                <Section title="レンダリング">
                    <Text>webアプリケーションにおいて、htmlファイルを生成したり、htmlファイルの更新を行うことをレンダリングと言います。レンダリングは
                        クライアント側(ブラウザ側)で行うCSR(Client Side Rendering)とサーバー側で行うSSR(Server Side Rendering)に大別されます。
                    </Text>
                    <SubSection>CSR</SubSection>
                    <Text>CSRはクライアント側でレンダリングを行います。</Text>
                    <Text>CSRのメリットははSPAに非常に近いところがあり、初回リクエストでhtmlに必要なほとんどのデータを取得し、ページ遷移による
                        htmlファイルの更新は全てブラウザ上で完結します。よって、高速なページ遷移が可能です。
                    </Text>
                    <Text>一方で、初回データ取得に時間を要したり、ブラウザを起動しているマインスペックにページ表示の速度が依存するデメリットがあります。また、CSR(およびSPA)は
                        ページ遷移が疑似的で常に同一のhtmlファイル上にいるため、SEO(検索エンジン最適化)に不適な点もあります。
                    </Text>
                    <Text>ReactはCSRを用いてSPAアプリケーション開発を行えるライブラリになっています。</Text>
                    <SubSection>SSR</SubSection>
                    <Text>SSRはサーバー側でレンダリングを行います。サーバー側でレンダリングを行うためクライアント側のマシンスペックの影響を受けません。</Text>
                    <Text>初回リクエストでは、ブラウザはサーバーが生成したhtmlファイルを生成するだけなので非常に高速なページ表示が可能です。また、SEOにも適しています。
                    </Text>
                    <Text>外部APIとの連携など動的なアプリケーション開発を行う場合にもSSRが適しています。</Text>
                    <Text>一方で、ページ遷移ごとにサーバーへのリクエストが必要になるデメリットもあります。</Text>
                </Section>
                <Section title="SSG">
                    <Text>SSG(Static Site Generation)は静的なアプリケーション開発に特化した概念です。</Text>
                    <Text>サーバー上にアプリケーションをデプロイした段階で静的なhtmlファイルをビルドしておき、クライアントからの
                        リクエストがあった時にビルドしたファイルを渡します。
                    </Text>
                    <Text>サーバー側は出来上がったがファイルを渡すだけ、ブラウザはファイルの表示を行うだけのため、初回リクエストの表示スピードは非常に高速になります。
                    </Text>
                    <Text>一方で、ビルド済みのhtmlファイルを用意する必要があるため、webページの更新を行うたびに再ビルドが必要だったり、動的なアプリケーション開発には全く適さないデメリットもあります。</Text>
                    <Text>Next.jsはSSGベースのSPAアプリケーション開発が可能です。さらに、Next.jsではっページごと、コンポーネントごとにCSRとSSRの選択が可能になっています。</Text>
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
