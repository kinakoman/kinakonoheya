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
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
import image5 from "./image5.jpg"

export const data = {
    title: "GitHubの始め方",
    tag: ["git", "GitHub", "Ubuntu"],
    date: ["2024", "10", "22"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>GitHubはリモート上でのバージョン管理システムです。元々はローカル上でソースコードのバージョン管理の行うgitのシステムを、リモート上で共有・公開することが出来るのがGitHubになっています。</Text>
                    <Text>また、GitHubではWebページの公開も簡単に行うことが出来ます。ReactやNext.js等で作成したアプリケーションの公開にもGitHubは非常に有用になっています</Text>
                    <Text>この記事では、GitHubのアカウント作成と、ローカル上からリモート上へのソースコード反映方法を紹介します。gitのインストールはUbuntuを想定しています。</Text>
                </Section>
                <Section title="ブランチ機能">
                    <Text>GitHubでのバージョン管理は、ブランチ機能の活用が重要になります。ブランチ機能とは、その名の通りソースコードのバージョン更新が枝のように連なることであり、
                        枝を遡って古いバージョンを手に入れたり、ある地点から別の枝を追加して並行してプロジェクトを更新していくことが出来ます。
                    </Text>
                    <ImageSet alt="ブランチ機能のイメージ" height={350} width={600} image={image1} />
                </Section>
                <Section title="GitHubを始める">
                    <SubSection>GitHubアカウントの作成</SubSection>
                    <Text><a href="https://github.com/" style={{ textDecoration: "underline", color: "#12BFEE", fontWeight: "normal" }}>GitHubのホームページ</a>からアカウントを作成します。</Text>
                    <Text> GitHubは有料版も利用できますが、バージョン管理やwebページの公開などは無料版で問題なく可能です。</Text>
                    <SubSection>gitのインストール</SubSection>
                    <Text> 次に、ローカル環境にgitをインストールします。</Text>
                    <CodeBox lang={"shell"} comment={"gitのインストール"}>{`~$ sudo apt install git`}</CodeBox>
                    <CodeBox lang={"shell"} comment={"バージョン確認"}>{`~$ git version`}</CodeBox>
                    <Text>ユーザー情報を登録しておきます。ソースコードをリモートに公開するときに誰が変更を加えたのかわかるようにします。</Text>
                    <CodeBox lang={"shell"} comment={"ユーザー情報の登録"}>{`~$ git config --global user.name yourname
~$ git config --global user.email youremail`}</CodeBox>
                    <Text>登録した情報は確認できます。</Text>
                    <CodeBox lang={"shell"} comment={"ユーザー情報の確認"}>{`~$ git config --list`}</CodeBox>
                </Section>
                <Section title="リポジトリの作成">
                    <Text>リポジトリとはブランチの履歴も含めたプロジェクト全体をまとめたものです。
                    </Text>
                    <Text>リポジトリはリモートとローカルの2種類があります。リモートリポジトリはブランチなどの全てのデータが記録され、
                        プロジェクトメンバーと共有したり公開したりできます。ローカルリポジトリはローカル上に作成するリポジトリで、リモートリポジトリにソースコードの更新を反映するために利用します。</Text>
                    <SubSection>リモートリポジトリの作成</SubSection>
                    <Text>まずは、GitHubでリモートリポジトリを作成します。このリモートリポジトリに全てのデータが記録されます。</Text>
                    <Text>GitHubのホームページの「Start a new repository for …」から新しいリポジトリを作成します。リポジトリはアクセスを制限するPrivateと自由に公開するPublicを選択できます。</Text>
                    <ImageSet alt="リポジトリの作製" height={300} width={500} image={image2} />
                    <Text>今回はhomepageというリポジトリをPrivateで作成します。</Text>
                    <ImageSet alt="SSHのurl取得" height={300} width={600} image={image3} />
                    <Text>リポジトリを作成すると上のような画面が表示されます。
                        Quick setupでSSHを選択し、表示されたurlは記録しておきます。</Text>
                    <SubSection>ローカルリポジトリの作成</SubSection>
                    <Text>次に、作成したhomepageリポジトリと紐づけるためのローカルフォルダを作成します。今回は、homepage_localとうフォルダを作成することにします。</Text>
                    <Text>次に、作成したフォルダ内でgitの初期化コマンドを実行します。</Text>
                    <CodeBox lang={"shell"} comment={"gitの初期化"}>{`homepage_local$ git init`}</CodeBox>
                    <Text>これで、作成したローカルフォルダ内にGitHubと紐づけるために必要な隠しファイルが作成されているはずです。</Text>
                    <CodeBox lang={"shell"} comment={"gitの隠しファイル"}>{`homepage_local$ ls -a
.  ..  .git`}</CodeBox>
                    <SubSection>リモートリポジトリとローカルリポジトリの紐づけ</SubSection>
                    <Text>ローカル上にリモートリポジトリのurlを登録することでリポジトリの紐づけが出来ます。gitはデフォルトでoriginという登録先が提供されているので、先ほど記録したリモートリポジトリのurl
                        をoriginに登録します。
                    </Text>
                    <CodeBox lang={"shell"} comment={"orginへのurlの登録"}>{`homepage_local$ git remote add origin リモートリポジトリのurl`}</CodeBox>
                    <CodeBox lang={"shell"} comment={"orginの確認"}>{`homepage_local$ git remote -v`}</CodeBox>
                </Section>
                <Section title="ファイルの更新とプッシュの実行">
                    <Text>リポジトリの準備が出来たので、実際にファイルを追加してリモートリポジトリに反映してみます。</Text>
                    <Text>以降の操作にはGitHubへのSSHキーの登録が必要になります。別の記事でキーの登録については紹介しているので、まだの方はそちらをご覧ください。</Text>
                    <LinkIn link={"GitKeySet"} title={"GitHubへのSSHキー登録"}></LinkIn>
                    <SubSection>リポジトリの構成</SubSection>
                    <Text> gitのリポジトリ構成は次のように分解されています。</Text>
                    <ImageSet alt="リポジトリの構成" height={400} width={500} image={image4} />
                    <SubSection>ワーキングツリーの更新</SubSection>
                    <Text>ワーキングツリーはリモートリポジトリと紐づけたフォルダの中身になります(今回でいえばhomepage_local)。ここで更新した内容がリモートリポジトリに反映されることになります。</Text>
                    <Text>今回は簡単にテキストファイルを追加してみます。</Text>
                    <CodeBox lang={"shell"} comment={"ワーキングツリーの更新"}>{`homepage_local$ ls
test.txt`}</CodeBox>
                    <SubSection>インデックスへの追加</SubSection>
                    <Text>インデックスはリモートリポジトリへの中間フォルダのようなものです。リモートリポジトリに更新を追加するためには必ずインデックスを経由する必要があります。</Text>
                    <CodeBox lang={"shell"} comment={"インデックスへの更新の追加"}>{`homepage_local$ git add -A`}</CodeBox>
                    <SubSection>ローカルリポジトリへの追加</SubSection>
                    <Text>インデックスへ追加した更新はローカルリポジトリに追加します。この操作をコミットと呼びます。この時に、-mオプションでコメントを残しておけば、GitHubでコミットの履歴とともに残しておくことが出来ます。</Text>
                    <CodeBox lang={"shell"} comment={"コミット"}>{`homepage_local$ git commit -m "commit"`}</CodeBox>
                    <SubSection>リモートリポジトリにプッシュ</SubSection>
                    <Text>最後に、ローカルリポジトリの内容をリモートリポジトリに反映させます。これをプッシュと呼びます。</Text>
                    <CodeBox lang={"shell"} comment={"プッシュ"}>{`homepage_local$ git push origin master`}</CodeBox>
                    <Text>masterとはデフォルトで設定されるメインのブランチになります。コマンドは、originのリポジトリのmasterというブランチにローカルリポジトリをプッシュする、という操作になっています。</Text>
                    <SubSection>リモートリポジトリの確認</SubSection>
                    <Text>プッシュが成功していれば、リモートリポジトリに更新が反映されているはずです。</Text>
                    <ImageSet alt="リポジトリの構成" height={250} width={500} image={image5} />
                </Section>

                {/* <Text>
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
                    <ImageSet alt="テスト画像" height={200} width={200} image={image} /> */}
            </Contents>
        </>
    )
}
