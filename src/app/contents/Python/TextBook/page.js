import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"

export const data = {
    title: "Python入門学習",
    tag: ["Python"],
    date: ["2024", "11", "02"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Toc />
                <Sec title="概要">
                    <Sub>インストール</Sub>
                    <Tx>仮想環境をローカルに用意します。</Tx>
                    <Code lang={"javascript"} tab={"Linux"}>{`$ wget https://repo.anaconda.com/archive/Anaconda3-2024.06-1-Linux-x86_64.sh
$ bash Anaconda3-2024.06-1-Linux-x86_64.sh
$ echo 'export PATH=$PATH:/anaconda3/bin' >> ~/.bashrc
$ source .bashrc
`}</Code>
                    <Sub>Hello,World</Sub>
                    <Tx>Pythonファイルの実行にはpython3コマンドを利用します。</Tx>
                    <Code lang={"python"} tab={""}>{`print("Hello,World")
`}</Code>
                    <Code lang={"shell"} tab={""}>{`$ python3 test.py
Hello,World
`}</Code>
                    <Sub>変数</Sub>
                    <Tx>Pythonでは変数定義に初期化やデータ型の指定は必要ありません。</Tx>
                    <Code lang={"python"} tab={""}>{`# int型
num_int=10
# float型
num_float=0.123
# 文字列
text="Hello"
# 配列
arr=[10,20,30]
`}</Code>
                </Sec>
                {/* <Sec title="はじめに">
                    <Sub>こんにちは</Sub>
                    <Tx>これは本文</Tx>
                    <Code lang={"javascript"} comment={"コードの例"}>{`const testiD=document.getElementById("test")
console.log(testiD)
testiD.addEventListener("mouseout",function () {
    this.classList.add("testadd")
})`}</Code>
                    <Sub>こんにちは2</Sub>

                </Sec>
                <Sec title="はじめにの">
                    <Sub>こんにちは3</Sub>
                    <Sub>こんにちは4</Sub>
                </Sec> */}
            </Contents>
        </>
    )
}
