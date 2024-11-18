import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'

export const data = {
    title: "Dockerの始め方",
    tag: ["Docker", "Ubuntu"],
    date: ["2024", "11", "18"],
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
                    <Text>この記事ではOS上に仮想コンテナを作成するDockerについてまとめます。
                        実行環境はUbuntuを想定しています。</Text>
                </Section>
                <Section title="Dockerとは">
                    <Text>DockerとはベースとなるホストOS上に新しい仮想環境をコンテナとして作成します。
                        ホストOS上に新しい環境が乗っかっているような状態のためコンテナと呼ばれています。
                        Dockerで作成したコンテナはコマンドラインから自由に往来が可能で、
                        VScodeと連携すればファイル編集もホストOS上のファイルとそん色なく行えます。
                    </Text>
                    <Text>コンテナを作成するにはイメージと呼ばれる設計図が必要になります。
                        イメージを元にコンテナを作成し、コンテナを起動することでアクセスが可能になります。
                    </Text>
                </Section>
                <Section title="Dockerのインストール">
                    <Text>Dockerの公式ドキュメント
                        <a href="https://docs.docker.com/engine/install/ubuntu/" style={{ textDecoration: "underline", color: "#12BFEE", fontWeight: "normal" }}>(https://docs.docker.com/engine/install/ubuntu/)</a>
                        に従いUbuntu上にDockerをインストールします。</Text>
                    <Text>以下のコマンドを順に実行します。</Text>
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
