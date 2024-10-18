import Meta from '@/components/Meta'
import PageContents from '@/components/contents/PageContents'
import PageSection from '@/components/contents/PageSection'
import PageText from '@/components/contents/PageText'
import CodeBox from '../../components/contents/CodeBox'
import Image from 'next/image'
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
            <PageContents title={data.title}>
                <PageSection title="はじめに">
                    <PageText>この記事では、WSLを用いてWindows上にlinuxの実行環境を用意する手順を紹介します。
                        Linuxのコマンド実行にはUbuntuを利用するため、wslのインストールに合わせてUbuntuのインストール方法も紹介します。
                    </PageText>
                </PageSection>
                <PageSection title="wslのインストール">
                    <PageText>「Windowsの機能の有効化と無効化」から「Linux用Windowsサブシステム」にチェックを入れる。</PageText>
                </PageSection>
                <div style={{ height: "300", width: "400" }}>
                    <Image src={image1} alt="「Windowsの機能の有効化と無効化」" height={300} width={400} />
                </div>
            </PageContents>
        </>
    )
}
