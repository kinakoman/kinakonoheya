import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import Text from '@/components/contents/Text'
import CodeBox from '../../components/contents/CodeBox'
import ImageSet from '../../components/contents/ImageSet'
import image1 from "./UbuntuInstall_1.jpg"

export const data = {
    title: "WindowsへのUbuntuインストール",
    tag: ["Ubuntu", "Linux"],
    date: ["2024", "10", "19"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents title={data.title}>
                <Section title="はじめに">
                    <Text>この記事では、WSLを用いてWindows上にlinuxの実行環境を用意する手順を紹介します。
                        LinuxディストリビューションとしてUbuntuを利用するため、wslのインストールに合わせてUbuntuのインストール方法も紹介します。
                    </Text>
                </Section>
                <Section title="wslのインストール">
                    <Text>1.「Windowsの機能の有効化と無効化」から「Linux用Windowsサブシステム」にチェックを入れる。</Text>
                    <ImageSet image={image1} height={300} width={400} alt={"Windowsの機能の有効化と無効化"} />
                    <Text>ユーザー名とパスワードが求められるので入力する。</Text>
                    <Text>2.コマンドプロンプトからwslをインストールする。</Text>
                    <CodeBox lang={"bash"} comment={"コマンドプロンプトで実行"}>{`wsl --install`}</CodeBox>
                    <Text>wslのバージョンが2になっているか確認しておく。</Text>
                    <CodeBox lang={"bash"} comment={"コマンドプロンプトで実行"}>
                        {`C:\\Users\\user>wsl --list --verbose
  NAME      STATE           VERSION
* Ubuntu    Running         2`}
                    </CodeBox>
                    <Text></Text>
                </Section>
                <Section title="Ubuntuのインストール">
                    <Text>1.MicroSoftのストアからLinuxディストリビューションであるUbuntuをインストールする。</Text>
                </Section>
            </Contents>
        </>
    )
}
