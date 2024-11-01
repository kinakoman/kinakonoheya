import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '../../../components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '../../../components/contents/CodeBox'
import ImageSet from '../../../components/contents/ImageSet'
import image1 from "./UbuntuInstall_1.jpg"
import image2 from "./UbuntuInstall_2.jpg"
import image3 from "./UbuntuInstall_3.jpg"


export const data = {
    title: "WindowsへのUbuntuインストール",
    tag: ["Ubuntu", "Linux"],
    date: ["2024", "10", "19"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>この記事では、WSLを用いてWindows上にlinuxの実行環境を用意する手順を紹介します。
                        LinuxディストリビューションとしてUbuntuを利用するため、wslのインストールに合わせてUbuntuのインストール方法も紹介します。
                    </Text>
                </Section>
                <Section title="wslのインストール">
                    <SubSection>「Windowsの機能の有効化と無効化」から「Linux用Windowsサブシステム」にチェックを入れる。</SubSection>
                    <ImageSet image={image1} height={250} width={300} alt={"Windowsの機能の有効化と無効化"} />
                    <SubSection>コマンドプロンプトからwslをインストールする。</SubSection>
                    <CodeBox lang={"shell"} comment={"コマンドプロンプトで実行"}>{`>wsl --install`}</CodeBox>
                    <Text>ユーザー名とパスワードが求められるので入力します。インストールが完了すると自動でLinuxの仮想環境に入ります。</Text>
                    <CodeBox lang={"bash"} comment={"Linuxの仮想環境(@の左に登録したユーザー名が表示)"}>{`user@DESKTOP:~$`}</CodeBox>
                    <SubSection>コマンドプロンプトを再起動し、wslのバージョンが2になっているか確認しておく。</SubSection>
                    <CodeBox lang={"shell"} comment={"コマンドプロンプトで実行"}>
                        {`>wsl --list --verbose
  NAME      STATE           VERSION
* Ubuntu    Running         2`}
                    </CodeBox>
                    <Text></Text>
                </Section>
                <Section title="Ubuntuのインストール">
                    <SubSection>MicroSoftのストアからLinuxディストリビューションであるUbuntuをインストールする。</SubSection>
                    <ImageSet alt="MicroSoftのストアのUbuntu" height={300} width={600} image={image2} />
                    <Text>Ubuntuのターミナルを開くとLinuxの仮想環境を利用出来ます。</Text>
                </Section>
                <Section title="VS Codeのセッティング">
                    <SubSection>MicroSoftのストアのからVS Codeをインストールする。</SubSection>
                    <SubSection>VS Codeの拡張機能WSLをインストールする。</SubSection>
                    <ImageSet alt="拡張機能wsl" height={200} width={600} image={image3} />
                    <Text>VS Codeのエディタ左下の{`「≶」`}マークから「Connect to WSL」でLinux上のフォルダにアクセスできるようになります。</Text>
                </Section>
            </Contents>
        </>
    )
}
