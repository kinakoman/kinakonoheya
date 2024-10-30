import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '../../components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '../../components/contents/CodeBox'
import CodeIn from '../../components/contents/CodeIn'
import LinkIn from '../../components/contents/LinkIn'
import ImageSet from '../../components/contents/ImageSet'

export const data = {
    title: "LinuxでのGo言語の環境構築",
    tag: ["Go", "Linux", "Ubuntu"],
    date: ["2024", "10", "25"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>この記事では、LinuxへのGo言語のインストールと実行方法についてまとめています。
                        LinuxのディストリビューションはUbuntuを想定しています。</Text>
                </Section>
                <Section title="Goのインストール">
                    <SubSection>インストーラーのダウンロード</SubSection>
                    <Text>ホームディレクトリでGoのインストーラーをダウンロードします。下記のコマンドはバージョン1.22.1になります。</Text>
                    <CodeBox lang={"shell"} comment={"インストーラーのダウンロード"}>{`~$ wget https://go.dev/dl/go1.22.1.linux-amd64.tar.gz`}</CodeBox>
                    <SubSection>Goのインストール</SubSection>
                    <Text>インストーラーを展開してGoをインストールします。インストール場所は/usr/localとします。</Text>
                    <CodeBox lang={"shell"} comment={"Goのインストール"}>{`~$ sudo tar -C /usr/local -xzf go1.22.1.linux-amd64.tar.gz`}</CodeBox>
                    <SubSection>パスを通す</SubSection>
                    <Text>goコマンドを利用するためにパスの開通をします。</Text>
                    <CodeBox lang={"shell"} comment={"パスの開通"}>{`~$ echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc`}</CodeBox>
                    <CodeBox lang={"shell"} comment={".bashrcの再起動"}>{`~$ source ~/.bashrc`}</CodeBox>
                </Section>
                <Section title="goファイルの実行">
                    <Text>goファイルを作成して実行してみます。</Text>
                    <CodeBox lang={"go"} comment={"sample/sample.go"}>{`package main

import "fmt"

func main() {
	fmt.Println("Hello,world!")
}`}</CodeBox>
                    <CodeBox lang={"shell"} comment={"goファイルの実行"}>{`sample$ go run sample.go
Hello,world!`}</CodeBox>
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
