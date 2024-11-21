
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '../../../components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '../../../components/contents/CodeBox'
import CodeIn from '../../../components/contents/CodeIn'
import LinkIn from '../../../components/contents/LinkIn'
import ImageSet from '../../../components/contents/ImageSet'
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
import image5 from "./image5.jpg"

export const data = {
    title: "gitのブランチの使い方",
    tag: ["git", "GitHub"],
    date: ["2024", "10", "23"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>この記事では、gitのブランチ機能に関係するコマンドの扱い方について紹介します。</Text>
                    <Text>前提として、git initコマンドでローカルリポジトリ用に準備したフォルダが用意されているとします。
                        まだの方はこちらをご覧ください。</Text>
                    <LinkIn link={"git/setup"} title={"GitHubの始め方"}></LinkIn>
                    <Text>今回はローカルリポジトリ上でブランチ操作を行っていきます。</Text>
                </Section>
                <Section title="ブランチの追加とマージ">
                    <Text>まずは、masterブランチにプロジェクトをコミットします。今回は簡単にテキストファイルを用意します。</Text>
                    <CodeBox lang={"shell"} comment={"main.txt"}>{`最新のバージョン`}</CodeBox>
                    <Text>ワーキングツリーはローカルリポジトリの最新バージョンに自動で更新されるようになっています。
                    </Text>
                    <CodeBox lang={"shell"} comment={"main.txt"}>{`$ cat main.txt
最新のバージョン`}</CodeBox>
                    <SubSection>ブランチを追加する</SubSection>
                    <Text>では、main.txtの更新をmasterブランチではなく別のブランチで行いたいとします。ブランチ
                        の追加は次のコマンドで行います。
                    </Text>
                    <CodeBox lang={"shell"} comment={"ブランチの追加"}>{`$ git switch -c new_branch
Switched to a new branch 'new_branch'`}</CodeBox>
                    <Text>今回はnew_branchというブランチを作成しています。switchコマンドはブランチ間の移動を行うコマンドで、-cオプションでブランチの新規作成
                        が可能です。
                    </Text>
                    <Text>ブランチはリスト表示することが可能です。*がついているブランチが現在いるブランチになります。</Text>
                    <CodeBox lang={"shell"} comment={"ブランチの確認"}>{`$ git branch
  master
* new_branch`}</CodeBox>
                    <SubSection>リポジトリの更新</SubSection>
                    <Text>では、新しく作成したブランチでmain.txtの更新を行います。ワーキングツリーで以下のように更新しコミットします。</Text>
                    <CodeBox lang={"shell"} comment={"main.txt"}>{`最新のバージョン(new_branchで更新一回目)`}</CodeBox>
                    <Text>さらにもう一度更新してコミットします。</Text>
                    <CodeBox lang={"shell"} comment={"main.txt"}>{`最新のバージョン(new_branchで更新二回目)`}</CodeBox>
                    <Text>ここまでの作業でnew_branchというブランチで2回分のコミットが蓄積しました。main.txtの内容も確認しておきましょう。</Text>
                    <CodeBox lang={"shell"} comment={"ワーキングツリーのmain.txtの確認"}>{`$ cat main.txt
最新のバージョン(new_branchで更新二回目)`}</CodeBox>
                    <Text>これまでの操作を図にすると次のようになります。</Text>
                    <ImageSet alt="ブランチ作成" height={150} width={400} image={image1} />
                    <SubSection>masterのマージ</SubSection>
                    <Text>では、masterブランチに切り替えてmain.txtの内容を確認してみます。</Text>
                    <CodeBox lang={"shell"} comment={"ブランチの追加"}>{`$ git switch master
Switched to branch 'master'
$ cat main.txt
最新のバージョン`}</CodeBox>
                    <Text>main.txtが最初の状態(ブランチを追加する前)に戻っていることがわかります。これは、これまでの更新はnew_branchでのものであり
                        masterの最新状態は変わっていないからです。
                    </Text>
                    <ImageSet alt="masterのコミット" height={150} width={400} image={image2} />
                    <Text>では、new_branchの更新をmasterに適用してみます。そのために行う操作がマージになります。マージは枝の先端を共有するイメージです。</Text>
                    <CodeBox lang={"shell"} comment={"ブランチのマージ"}>{`$ git merge new_branch`}</CodeBox>
                    <Text>マージしたことで枝の先端が共有され、new_branchの更新がmasterの反映されました。</Text>
                    <CodeBox lang={"shell"} comment={"ワーキングツリーのmain.txtの確認"}>{`$ git branch
* master
new_branch
$ cat main.txt
最新のバージョン(new_branchで更新二回目)`}</CodeBox>
                    <Text>マージしたことでmasterブランチでもmain.txtの内容が更新されています。</Text>
                    <ImageSet alt="ブランチのマージ" height={150} width={450} image={image3} />
                    <Text>最期に、必要の無くなったブランチを削除します。ブランチの削除はbranchコマンドの-dオプションで行います。これで、new_branchでの更新履歴が完全にmasterのものになります。(masterにマージしていなし
                        ブランチを削除する場合は-Dオプションを利用します。)</Text>
                    <CodeBox lang={"shell"} comment={"ブランチのマージ"}>{`$ git branch -d new_branch`}</CodeBox>
                    <ImageSet alt="ブランチの削除" height={150} width={450} image={image4} />
                </Section>
                <Section title="masterの取り込み">
                    <Text>上の例では、ファイルの更新はnew_branchのみでしたが、masterブランチも並行してファイルの更新を行っていた場合、masterの更新を適宜new_branchに取り込む必要があります。マージ
                        を利用すればこの取り込みも簡単に行えます。
                    </Text>
                    <Text>ワーキングツリーにmain.txtとsub.txtを用意し、これをmasterにコミットします。</Text>
                    <CodeBox lang={"shell"} comment={"ファイルの初期状態"}>{`$ cat main.txt
最新のmain
$ cat sub.txt
最新のsub`}</CodeBox>
                    <Text>その後、new_branchというブランチを作成し、このブランチ内でsub.txtの更新を行いコミットします。</Text>
                    <CodeBox lang={"shell"} comment={"new_branchのsub.txt"}>{`更新後のsub`}</CodeBox>
                    <Text>ここで、masterブランチではmain.txtの更新を行いコミットします。</Text>
                    <CodeBox lang={"shell"} comment={"masterのmain.txt"}>{`更新後のmain`}</CodeBox>
                    <Text>new_branch内で改めてファイルの確認を行います。</Text>
                    <CodeBox lang={"shell"} comment={"new_branchのワーキングツリー"}>{`$ cat main.txt
最新のmain
$ cat sub.txt
更新後のsub`}</CodeBox>
                    <Text>当然ながら、new_branch内でのコミットは反映されていますが、masterブランチでのコミットは反映されていません。
                    </Text>
                    <Text>ここで、new_branchにmasterをマージすることでmasterの更新を取り込むことが出来ます。
                        (コマンドを実行するとコメントを残すことを求められますが、必要なければCtrl+xで無視します。)</Text>
                    <CodeBox lang={"shell"} comment={"masterの取り込み"}>{`$ git merge master`}</CodeBox>
                    <Text>これで、new_branch内でもmasterのコミットが反映されます。</Text>
                    <CodeBox lang={"shell"} comment={"new_branchのワーキングツリー"}>{`$ cat main.txt
更新後のmain
$ cat sub.txt
更新後のsub`}</CodeBox>
                    <ImageSet alt="masterの取り込み" height={200} width={640} image={image5} />
                </Section>
                <Section title="競合の発生と解決">
                    <Text>上の例ではmasterブランチでmain.txt、new_branchでsun.txtの更新を行いマージを行いました。では、両方のブランチでmain.txtの更新を行うとどうなるでしょうか。
                        masterとnew_branchのそれぞれで次のようにmain.txtを更新しコミットします。
                    </Text>
                    <CodeBox lang={"shell"} comment={"masterのmain.txt"}>{`masterで更新したmain`}</CodeBox>
                    <CodeBox lang={"shell"} comment={"new_branchのmain.txt"}>{`new_branchで更新したmain`}</CodeBox>
                    <Text>では、masterブランチでnew_branchをマージしてみます。</Text>
                    <CodeBox lang={"shell"} comment={"masterにマージ"}>{`$ git merge new_branch
Auto-merging main.txt
CONFLICT (content): Merge conflict in main.txt
Automatic merge failed; fix conflicts and then commit the result.`}</CodeBox>
                    <Text>コマンドラインに出力される通りに、CONFLICT(競合)が発生しマージに失敗しています。これは、二つのブランチで同じファイルの更新を行った結果、
                        どちらの更新を採用すればよいか判断できていないためです。
                    </Text>
                    <Text>競合の解決にはrestoreコマンドを利用します。</Text>
                    <CodeBox lang={"shell"} comment={"現在のブランチの更新を採用"}>{`$ git restore --ours main.txt`}</CodeBox>
                    <CodeBox lang={"shell"} comment={"現在のブランチの更新を採用"}>{`$ git restore --theirs main.txt`}</CodeBox>
                    <Text>今回は--oursオプションを実行することします。</Text>
                    <CodeBox lang={"shell"} comment={"main.txtの確認"}>{`$ cat main.txt
masterで更新したmain`}</CodeBox>
                    <Text>無事に現在のブランチ(master)の更新が採用され、競合が解決したことがわかります。</Text>
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
