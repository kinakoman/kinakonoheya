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
    title: "GitHubへのSSH認証",
    tag: ["git", "GitHub", "Ubuntu"],
    date: ["2024", "10", "23"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title="始めに">
                    <Text>GitHubへのpush、あるいはpullを行うには、リモートリポジトリへの認証を行う必要があります。認証にはHTTPSを用いる方法とSSHを用いる方法が挙げられます。</Text>
                    <Text>HTTPSを用いる認証はGitHubのアカウントページから取得できるトークンを用いることで行います。ローカル側に設定等の必要ないメリットがある一方で、
                        安全性の観点からトークンを定期的に更新する必要があり、またpushやpullのたびにトークンの入力を手動で行う面倒さがあります。
                    </Text>
                    <Text>SSHを用いる認証は、最初の設定がやや面倒な一方、以降の認証は自動で行えるため日常的にGitHubとやり取りをする場合非常に有用です。</Text>
                    <Text>この記事ではSSH認証に必要となるSSHキーの作成方法とGitHubへの設定方法を紹介します。</Text>
                </Section>
                <Section title="SSH公開鍵認証">
                    <SubSection>公開鍵と秘密鍵</SubSection>
                    <Text>SSHキーを作成すると公開鍵と秘密鍵の2種類の鍵が生成されます。公開鍵は言い換えれば鍵穴のようなものであり、秘密鍵はその鍵穴に対応する鍵になります。この公開鍵をGitHubに登録しておけば、
                        対応する秘密鍵を持つデバイスからのみアクセスを受け付けることになります(リポジトリのがPublicの場合は鍵に関係なくファイルの閲覧やダウンロードは自由にできます)。
                    </Text>
                    <ImageSet alt="SSH公開鍵認証のイメージ" height={300} width={400} image={image1} />
                </Section>
                <Section title="公開鍵の作成">
                    <SubSection>.sshに移動</SubSection>
                    <Text>Ubuntuにはデフォルトで.sshフォルダが生成されているので、.sshフォルダに移動します。</Text>
                    <SubSection>SSHキーの生成</SubSection>
                    <CodeBox lang={"shell"} comment={"公開鍵の生成"}>{`$ ssh-keygen`}</CodeBox>
                    <Text>対話形式の入力を求められますが、何も入力せずEnterで問題ありません。デフォルトでRSA暗号が生成されます。</Text>
                    <Text>コマンドを実行すると2つのファイルが生成されます。id_rsaが秘密鍵、id_rsa.pubが公開鍵になります。</Text>
                    <CodeBox lang={"shell"} comment={"鍵ファイルの確認"}>{`$ ls
id_rsa  id_rsa.pub`}</CodeBox>
                </Section>
                <Section title="GitHubへの公開鍵の登録">
                    <Text>GitHubのページ右上のアカウントボタンからsettingを開きます。</Text>
                    <ImageSet alt="GitHub登録1" height={250} width={500} image={image2} />
                    <Text>SSH and GPG keysを開きます。</Text>
                    <ImageSet alt="GitHub登録2" height={250} width={500} image={image3} />
                    <Text>SSH keysの New SSH keyを開きます。</Text>
                    <ImageSet alt="GitHub登録3" height={250} width={500} image={image4} />
                    <Text>Titleにkeyの名前を入力します。デバイスの識別ができるようにわかりやすい名前を付けておくことがおすすめです。Keyにはid_rsa.pubの内容を全て貼り付けます。</Text>
                    <CodeBox lang={"shell"} comment={"catコマンド使うと鍵を全て表示できます"}>{`$ cat id_rsa.pub`}</CodeBox>
                    <ImageSet alt="GitHub登録4" height={250} width={500} image={image5} />
                    <Text>これで公開鍵の登録は完了です。</Text>
                    <SubSection>GitHubへの認証テスト</SubSection>
                    <Text>SSHキーの登録が終了したので、実際にGitHubへの認証が行えるかテストを行います。</Text>
                    <CodeBox lang={"shell"} comment={"認証テスト"}>{`$ ssh -T git@github.com
Hi アカウント名! You've successfully authenticated, but GitHub does not provide shell access.`}</CodeBox>
                    <Text>このような出力になれば、SSHキーの登録に成功しています。</Text>
                    <Text>以降は、gitコマンドでpushやpull操作を行うと自動で認証が行われ、リモートリポジトリへのアクセスが可能になります。</Text>
                </Section>
                {/* <Section title="セクションタイトル">
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
