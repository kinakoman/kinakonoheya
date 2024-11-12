import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import ImageSet from '@/components/contents/ImageSet'
import LinkIn from '@/components/contents/LinkIn'
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
import image5 from "./image5.jpg"


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
                    <Text>GitHub Actionsで静的ファイルの生成を行うためにnext.config.mjsファイルの編集を行います。next.config.mjsはNextのプロジェクトに自動で生成されています。
                    </Text>
                    <CodeBox lang="javascript" comment="/next-samplel/next.config.mjs">{`/** @type {import('next').NextConfig} */
const nextConfig = {
    output: " export ",
};

export default nextConfig;
`}</CodeBox>
                    <SubSection>リモートリポジトリへプッシュ</SubSection>
                    <Text>リモートリポジトリへプッシュを行います。</Text>
                    <CodeBox lang="shell" comment="ローカルリポジトリのプッシュ">{`/next-sample$ git add -A
/next-sample$ git commit -m "commit"
/next-sample$ git push origin master`}</CodeBox>
                    <SubSection>GitHub Actionsの設定</SubSection>
                    <Text>リモートリポジトリへのプッシュが完了したらリポジトリ画面のSettings⇒Pagesを開きます。
                    </Text>
                    <ImageSet alt="GitHub Pagesの選択" height={350} width={700} image={image1} />
                    <Text>Build and deploymentでGitHub Actionsを選択し、Next.jsの欄が現れるのでConfigureを押します。</Text>
                    <ImageSet alt="GitHub Actionsの設定" height={300} width={700} image={image2} />
                    <Text>nextjs.ymlのエディタ画面が開くので、内容の変更はせずにCommit changeを押します。
                        これでアプリケーションのビルドとデプロイが自動で開始されます。
                    </Text>
                    <ImageSet alt="nextjs.ymlの更新1" height={300} width={700} image={image3} />
                    <ImageSet alt="nextjs.ymlの更新2" height={400} width={400} image={image4} />
                    <Text>リポジトリのActionsのページからデプロイ状況が確認できます。デプロイが完了したらコミットの詳細画面からアプリケーションのリンクを取得できます。</Text>
                    <ImageSet alt="GitHub Actionsの設定" height={250} width={700} image={image5} />
                    <Text>リンクに飛ぶとアプリケーションが公開されています。</Text>
                    <SubSection>リモートリポジトリのプル</SubSection>
                    <Text>最後にリモートリポジトリの内容をローカルにプルします。</Text>
                    <Text>リモートリポジトリには自動公開用のnextjs.ymlが追加されていますが、これをローカルにプルしないままにしてしまうと、
                        ローカル側でアプリケーションの更新を行った際にコミットの干渉が発生してしまいます。
                    </Text>
                    <Text>これを事前に防ぐために、ローカル側にnextjs.ymlをプルしておきます。</Text>
                    <CodeBox lang="shell" comment="リモートリポジトリのプル">{`/next-sample$ git pull origin master
/next-sample$ ls .github/workflows/
nextjs.yml`}</CodeBox>
                    <SubSection>アプリケーションの更新</SubSection>
                    <Text>アプリケーションの更新を行う際には再度ローカルリポジトリをプッシュします。プッシュが完了するとGitHub Actionsが自動でビルドとデプロイを実行して、更新が適用されます。</Text>
                </Section>
                <Section title="おわりに">
                    <Text>今回の記事はここまでです。次回はNext.jsで画像配置用に実装されているImageタグの使い方についてまとめます。</Text>
                    <LinkIn link={"Next/NextPractice10"} title={"【Next.js入門#10】Imageタグの使い方"}></LinkIn>
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
