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
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
import image5 from "./image5.jpg"

export const data = {
    title: "【React入門#2】GitHub Pagesでの公開",
    tag: ["React", "GitHub"],
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
                    <Text>この記事はReact入門第1回の記事の続きになります。</Text>
                    <LinkIn link={"react/practice1"} title={"【React入門#1】Reactの始め方"}></LinkIn>
                    <Text>この記事ではGitHub PagesでのReactアプリケーション公開の手順をまとめます。</Text>
                </Section>
                <Section title="GitHub Pages">
                    <Text>GitHub PagesはGitHubが提供している静的サイトのホスティングシステムです。
                        GitHubのリモートリポジトリで公開しているアプリケーションをwebサイトとして公開することが可能です。
                    </Text>
                    <Text>GitHub Pagesは静的サイトのホスティングしか対応していないため外部APIとの連携やSSRの導入は困難ですが、
                        CSRのReactアプリケーションは公開・修正ともに非常に簡単に行うことが出来ます。
                    </Text>
                    <Text>GitHubの使い方については以下をご覧ください。</Text>
                    <LinkIn link={"git/setup"} title={"GitHubの始め方"}></LinkIn>
                </Section>
                <Section title="Reactの公開">
                    <SubSection>リポジトリの設定</SubSection>
                    <Text>GitHubでReactプロジェクト用のリモートリポジトリを作成します。今回はReactPageという名前のリポジトリを作成します。
                        GitHubの無料版ではprivateリポジトリでGitHub Pagesは利用できないためpublicで作成します。
                    </Text>
                    <Text>リモートリポジトリが作製出来たらローカル環境のReactプロジェクトにurlを登録して、ローカルリポジトリに設定します。
                        Reactはデフォルトでgitに必要なファイルは生成されているので初期化(init)は必要ありません。
                    </Text>
                    <SubSection>package.jsonの編集</SubSection>
                    <Text>ローカルでReactプロジェクトのpackage.jsonの編集を行います。</Text>
                    <CodeBox lang={"json"} comment={"/react-sample/package.json"}>{`{
    ~省略~
  "homepage": "https://<GitHubアカウント名>.github.io/<GitHubリポジトリ名>",
    ~省略~
  "scripts": {
    "rm": "rm -rf docs",
    "mv": "mv build docs",
    "git": "git add . && git commit -m \\"commit\\" && git push origin master",
    "deploy": "npm run rm && npm run build && npm run mv && npm run git",
    ~省略~
  },
  ~省略~
}`}</CodeBox>
                    <Text>変更点はhomepageの追加とscriptの追加です。</Text>
                    <Text>homepageにはお使いのGitHubアカウント名と今回作製したリポジトリ名(この記事で言えばReactPage)を書きます。
                    </Text>
                    <Text>scriptsに追加したのはReactアプリケーションの公開を自動化するコマンドです。詳細は後程解説します。</Text>
                    <SubSection>アプリケーションのデプロイ</SubSection>
                    <Text>次のコマンドを実行しReactアプリケーションをデプロイします。</Text>
                    <CodeBox lang={"shell"} comment={"デプロイ"}>{`/react-sample$ npm run deploy`}</CodeBox>
                    <Text>自動で静的ファイルの生成とリモートリポジトリへのプッシュが行われるはずです。</Text>
                    <ImageSet alt="リモートリポジトリ" height={300} width={600} image={image1} />
                    <Text>リモートリポジトリにファイルがプッシュされています。</Text>
                    <SubSection>GitHub Pagesの設定</SubSection>
                    <Text>リポジトリのsettingからPagesを開きます。</Text>
                    <ImageSet alt="GitHub Pages" height={300} width={600} image={image2} />
                    <Text>Branchからmasterを選択しfolderは{`/docs`}を選択してSaveを押します。</Text>
                    <ImageSet alt="Brachの設定" height={100} width={600} image={image5} />

                    <Text>Actionsを開くとworkflowsの中でcommitのデプロイが始まっているはずです。
                        デプロイが完了したらcommitをクリックし、表示されているurlにアプリケーションが公開されています。</Text>
                    <ImageSet alt="GitHub Actionsのworkflows" height={300} width={600} image={image3} />
                    <ImageSet alt="GitHub Pagesで公開したurl" height={300} width={600} image={image4} />
                    <SubSection>アプリケーションの更新</SubSection>
                    <Text>アプリケーションの更新を行う場合は再度デプロイのコマンドを実行することで適用されます。</Text>
                    <CodeBox lang={"shell"} comment={"アプリケーションの更新"}>{`/react-sample$ npm run deploy`}</CodeBox>
                </Section>
                <Section title="scriptsのコマンド解説">
                    <Text>GitHub Pagesは静的サイトのホスティングに特化しているため、GitHub Pagesからアプリケーションを公開する場合はアプリケーションを静的ファイルに変換する必要があります。</Text>
                    <Text>そのため、GitHub Pagesへの公開作業手順はプロジェクトのクリーンアップ(すでに生成されている静的ファイルの削除)⇒新たな静的ファイルの生成⇒リポジトリへのプッシュになります。</Text>
                    <Text>{`"rm"`}は既に存在している静的ファイル(docs)の削除を行います。{`"mv"`}はbuildという名前で生成された静的ファイルの名前をdocsに変換します。</Text>
                    <Text>{`"git"`}はリモートリポジトリにプロジェクトをプッシュするためのコマンドをまとめたものです。{`&&`}でコマンドを並べて書けば左から順に実行されます。</Text>
                    <Text>最後の{`"deploy"`}は一連のコマンドを順に実行するコマンドです。{`npm run build`}は静的ファイル生成コマンドであり、buildという名前で静的ファイルを生成します。
                        docsに変換している理由はリモートリポジトリで静的ファイルの認識をさせるにはファイル名をdocsにする必要があるためです。
                    </Text>
                    <Text>よって、deployコマンドでアプリケーションの公開が自動で行えます。</Text>
                </Section>
                <Section title="おわりに">
                    <Text>今回の記事はここまでです。次回はTailwind CSSの導入ついてまとめます。</Text>
                    <LinkIn link={"react/practice3"} title={"【React入門#3】Tailwind CSSの導入"}></LinkIn>
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
