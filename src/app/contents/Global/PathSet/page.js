import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '../../../components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '../../../components/contents/CodeBox'
import CodeIn from '../../../components/contents/CodeIn'
import LinkIn from '../../../components/contents/LinkIn'

export const data = {
    title: "「パスを通す」とは?.bashrcとの関係",
    tag: ["Ubuntu", "Linux"],
    date: ["2024", "10", "21"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>
                        Ubuntuにプログラミング言語をインストールする際に、たびたび「パスを通す」という作業を行います。いろんなサイトを見ていると「パスを通す」ための方法は
                        提供してくれているので、操作自体は簡単に行えますがその内容はおまじない的になってしまいます。この記事では「パスを通す」とは何かを解説し、実行方法の解説も行います。
                        OSはLinux、ディストリビューションはUbuntuを想定します。
                    </Text>
                </Section>
                <Section title="パスとコマンド">
                    <Text>まず、「パスを通す」を言いかえると「外部コマンドのパスを環境変数PATHに登録する」になります。これを理解するためには、Linuxにおけるコマンドと環境変数PATHについて理解する必要があります。</Text>
                    <SubSection>内部コマンドと外部コマンド</SubSection>
                    <Text>コマンドとは、コマンドライン上で実行するOSへの指示のことです。Linuxのコマンドには内部コマンドと外部コマンドが2種類があり、内部コマンドはOS内に組み込まれている一方で、
                        外部コマンドは特定のディレクトリ内に存在しています。
                    </Text>
                    <Text>内部コマンドにはcd、echo、外部コマンドにはls、cat等があります。</Text>
                    <CodeBox lang={"shell"} comment="whichコマンドでディレクトリの検索">{`~$ which ls
/usr/bin/ls`}</CodeBox>
                    <Text>外部コマンドのディレクトリはwhichコマンドで検索できます。上記の例では、lsコマンドは<CodeIn>/usr/bin/ls</CodeIn>に存在していることがわかります。</Text>
                    <SubSection>環境変数PATH</SubSection>
                    <Text>環境変数PATHとは、外部コマンドのディレクトリを登録するための変数になっています。
                        Linuxでは外部コマンドの実行を受け付けた際、そのコマンドの場所を環境変数PATHに登録されている中から検索し、その中に存在しているコマンドのみが実行可能になっています。
                    </Text>
                    <Text>PATHに登録したディレクトリはコマンドで確認できます。上で確認したlsコマンドのディレクトリも標示されるはずです。</Text>
                    <CodeBox lang={"shell"} comment={"環境変数PATHの確認"}>{`~$ echo $PATH`}</CodeBox>
                    <SubSection>まとめると</SubSection>
                    <Text>新しい外部コマンドを実行できるようにするためには、そのコマンドのディレクトリを環境変数PATHに登録する必要があります。その操作こそが「パスを通す」ことになります。</Text>
                </Section>
                <Section title="パスの開通と.bashrcの利用">
                    <Text>過去の記事でAnacondaをインストールした際、condaコマンドのパスを通す際以下のコマンドを紹介しています。</Text>
                    <LinkIn link={"Python/PythonInstall"} title={"UbuntuでのPython環境構築"}></LinkIn>
                    <CodeBox lang={"shell"} comment={"condaコマンドのパス開通"}>{`~$ echo 'export PATH=$PATH:/anaconda3/bin' >> ~/.bashrc`}</CodeBox>
                    <Text>以下では、このコマンドでなぜパスの開通が出来るのかを説明します。(anaconda3はホームディレクトリにあるとします。)</Text>
                    <SubSection>パスの開通</SubSection>
                    <Text>環境変数PATHへの新しいディレクトリの登録は以下のコマンドで出来ます。</Text>
                    <CodeBox lang={"shell"} comment={"PATHの登録"}>{`~$ export PATH=$PATH:/anaconda3/bin`}</CodeBox>
                    <Text>コマンドは非常に単純で、変数設定用のコマンドexportで、環境変数PATHにcondaコマンドのディレクトリのパスを代入しています。
                        パスの左側の<CodeIn>$PATH:</CodeIn>は、環境変数PATHに新しいパスを上書き登録ではなく、追加登録するために必要になります。
                    </Text>
                    <Text>これにより、condaコマンドのディレクトリが登録され、コマンドの実行が可能になります。</Text>
                    <SubSection>.bashrcファイル</SubSection>
                    <Text>パスの開通が出来るようになりましたが、exportでのパスの登録は一時的なものであり、ターミナルを再起動すると環境変数PATHはリセットされ再起動のたびにパスの登録が必要になります。</Text>
                    <Text>再起動のたびに登録をし直すのは非常に面倒ですが、これを解決するために.bashrcファイルを利用します。</Text>
                    <Text>.bashrcはUbuntuをインストールした際にホームディレクトリに自動で生成されます。.bashrcは隠しファイルのため、通常のlsコマンドでは表示されません。</Text>
                    <CodeBox lang={"shell"} comment={"隠しコマンドの表示"}>{`~$ ls -a`}</CodeBox>
                    <Text>.bashrcは簡単に言うとターミナルを起動するたびに読み込まれるファイルであり、.bashrcに記述しておいたコマンドやスクリプトがターミナルの起動時に実行されます。</Text>
                    <Text>よって、.bashrcに先ほどのパス開通のコマンドを記述しておけば、ターミナルを起動するたびにパス開通が実行され、再登録の面倒さが解決します。</Text>
                    <Text>.bashrcへの記述も含めたパス開通のコマンドがまさに最初に示したコマンドになります。</Text>
                    <CodeBox lang={"shell"} comment={"condaコマンドのパス開通"}>{`~$ echo 'export PATH=$PATH:/anaconda3/bin' >> ~/.bashrc`}</CodeBox>
                    <Text><CodeIn>echo</CodeIn>は出力用コマンド、<CodeIn>{`>>`}</CodeIn>は出力をファイルに追記するためのコマンドであり、出力(<CodeIn>{`'export PATH=$PATH:/anaconda3/bin'`}</CodeIn>)
                        をホームディレクトリの.bashrc(<CodeIn>{`~/.bashrc`}</CodeIn>)に追記しています。</Text>
                    <Text>これでパスの開通が自由にできます。</Text>
                </Section>
                {/* <Section title="セクションがセクション">
                    <SubSection>サブセクションの内容</SubSection>
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
                </Section> */}
            </Contents >
        </>
    )
}
