import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '../../../components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '../../../components/contents/CodeBox'
import CodeIn from '../../../components/contents/CodeIn'
import LinkIn from '../../../components/contents/LinkIn'

export const data = {
    title: "Node.jsのインストール方法",
    tag: ["Ubuntu", "Linux", "Node.js"],
    date: ["2024", "10", "21"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>この記事ではNode.jsのインストール方法についてまとめています。OSはLinux、ディストリビューションはUbuntuを想定しています。</Text>
                </Section>
                <Section title="Node.jsとは">
                    <Text>Node.jsはよく、「サーバーサイドのJavaScriptの実行環境」と紹介されます。実行環境とは、プログラミング言語で記述されたファイルが、記述通りに出力を
                        行うために必要な環境のことです。PythonでいえばAnacondaの仮想環境は実行環境の一種であると言えます。
                    </Text>
                    <Text>JavaScriptはもともとブラウザ内で動作する言語として開発されており、JavaScriptの実行環境はNode.jsの誕生までブラウザのみでした。</Text>
                    <Text> Node.jsは、ブラウザ上でしか動作しなかったJavaScriptの実行環境をサーバーサイドに提供し、サーバーサイドでのJavaScriptの実行を可能にしました。そして当然、
                        ローカル環境のOSにNode.jsをインストールすることで、ローカル環境でもJavaScriptの実行環境を用意することが出来ます。
                    </Text>
                    <Text>また、Node.jsにはnpmと呼ばれるパッケージ管理ツールが用意されており、ライブラリのインストール等が容易に行えるようになっています。</Text>
                </Section>
                <Section title="Node.jsのインストール">
                    <SubSection>ホームディレクトリでnvmのダウンロードを行う。</SubSection>
                    <Text>nvmとはNode.jsのバージョン管理ツールです。</Text>
                    <CodeBox lang={"shell"} comment={"nvmのダウンロード"}>{`~$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash`}</CodeBox>
                    <Text>ターミナルを再起動し、nvmのインストールが完了しているか確認します。</Text>
                    <CodeBox lang={"shell"} comment={"インストールに成功していればnvmが出力される"}>{`~$ command -v nvm
nvm`}</CodeBox>
                    <CodeBox lang={"shell"} comment={"再起動の代わりにこれでも良い"}>{`~$ source .bashrc`}</CodeBox>
                    <SubSection>Node.jsとnpmのインストール</SubSection>
                    <CodeBox lang={"shell"} comment={"最新版のNode.jsとnpmのインストール"}>{`~$ nvm install --lts --latest-npm`}</CodeBox>
                    <Text>--ltsコマンドはNodeの最新の安定バージョンであるLTSバージョンをインストールし、--latest-npmはnpmの最新バージョンをインストールします。</Text>
                    <Text>Node.jsとnpmのバージョンを確認します。</Text>
                    <CodeBox lang={"shell"} comment={"Node.jsのバージョン確認"}>{`~$ node -v
v20.18.0`}</CodeBox>
                    <CodeBox lang={"shell"} comment={"npmのバージョン確認"}>{`~$ npm -v
10.9.0`}</CodeBox>
                    <Text>これでNode.jsのインストールは完了です。</Text>
                </Section>
                <Section title="ローカルでのJavaScriptの実行">
                    <Text>Node.jsのインストールが完了したので、ローカル環境でJavaScriptを実行してみます。</Text>
                    <SubSection>.jsファイルの作成</SubSection>
                    <CodeBox lang={"javascript"} comment={"sample/sample.js"}>{`console.log("Hello,World!!")`}</CodeBox>
                    <SubSection>.jsファイルの実行</SubSection>
                    <Text>作業ディレクトリでJSファイルを実行します。</Text>
                    <CodeBox lang={"shell"} comment={"コマンドラインで実行"}>{`sample$ node sample.js
Hello,World!!`}</CodeBox>
                    <Text>ローカル環境でJSファイルが実行できていることが分かります。</Text>
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
            </Contents>
        </>
    )
}
