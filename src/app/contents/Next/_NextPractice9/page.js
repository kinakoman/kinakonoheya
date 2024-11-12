import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'

export const data = {
    title: "【Next.js入門#9】GitHub Pagesでの公開",
    tag: ["Next.js", "GitHub"],
    date: ["2024", "11", "12"],
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
                    <Text>この記事はNext.js入門第8回の記事の続きになります。</Text>
                    <LinkIn link={"Next/NextPractice8"} title={"【Next.js入門#8】Next.jsでのページ遷移"}></LinkIn>
                    <Text>前回まででNext.jsを用いたwebアプリケーションの構築の最低限の要素を学んできました。
                        今回は、GitHub Pagesを用いたNextアプリケーションの公開について解説します。
                    </Text>
                    <Text>今回の記事はGitHubでのリポジトリ操作を前提とします。
                        操作について不明点がある方はこちら記事をご覧ください。
                    </Text>
                    <LinkIn link="Git/GitSetup" title="GitHubの始め方"></LinkIn>
                    <Text>また、GitHub Pagesはこちらの記事の中で簡単に紹介しています。</Text>
                    <LinkIn link="React/ReactPractice2" title="【React入門#2】GitHub Pagesでの公開"></LinkIn>
                </Section>
                <Section title="GitHub Pagesでの公開">
                    <SubSection>リモートリポジトリの用意</SubSection>
                    <Text>GitHubでリモートリポジトリを作成し、Nextのプロジェクトディレクトリをローカルリポジトリとして紐づけます。
                        今回はNextAppというリモートリポジトリを作成することにします。
                    </Text>
                    <Text>GitHubの無料版ではprivateリポジトリからの公開はできないためpublicリポジトリで作成します。</Text>
                    <SubSection>next.config.mjsの編集</SubSection>
                    <Text>GitHub PagesでのNext.jsアプリケーション公開は、①リモートリポジトリへのプッシュ②静的ファイルのビルド③デプロイの順になります。
                        GitHub PagesではGitHub Actionsという静的ファイルの自動ビルドが利用できます。
                    </Text>
                    <Text>GitHubで静的ファイルの生成を行うためにnext.config.mjsファイルの編集を行います。next.config.mjsはNextのプロジェクトに自動で生成されています。
                    </Text>
                    <CodeBox lang="javascript" comment="/next-samplel/next.config.mjs">{`/** @type {import('next').NextConfig} */
const nextConfig = {
    output: " export ",
};

export default nextConfig;
`}</CodeBox>
                </Section>
                <Section title="おわりに">
                    <Text>今回の記事はここまでです。次回はNext.jsはGithub Pagesを用いたNextアプリケーションの公開について解説します。</Text>
                    <LinkIn link={"Next/NextPractice9"} title={"【Next.js入門#9】GitHub Pagesでの公開"}></LinkIn>
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
