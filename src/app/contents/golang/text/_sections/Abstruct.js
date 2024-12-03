import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
            <Sec title="概要">
                <Sub>インストール</Sub>
                <Tx>実行環境を用意します。</Tx>
                <Code lang="shell" tab="Linux">{`$ wget https://go.dev/dl/go1.22.1.linux-amd64.tar.gz
$ sudo tar -C /usr/local -xzf go1.22.1.linux-amd64.tar.gz
$ echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
$ source ~/.bashrc`}</Code>
                <Sub>Hello,World</Sub>
                <Tx>Go言語の実行はgoコマンドで行います。</Tx>
                <Code lang="go" tab="sample.go">{`package main

import "fmt"

func main() {
	fmt.Println("Hello,world!")
}`}</Code>
                <Code lang="shell" tab="ターミナル">{`$ go run sample.go 
Hello,world!`}</Code>
                <Sub>go build</Sub>
                <Tx>goコマンドで実行ファイルを生成できます。-oオプションで出力するファイル名を指定できます。</Tx>
                <Code lang="shell" tab="ターミナル">{`$ go build -o sample sample.go
$ ./sample 
Hello,world!`}</Code>
                <Sub>package</Sub>
                <Tx>goファイルの一行目はpackage節と呼ばれます。packageはプログラムに付与する名前のようなものです。goファイルをモジュール化して管理する際に必要になります。</Tx>
                <Code lang="go">{`package main`}</Code>
                <Sub>import</Sub>
                <Tx>goファイルではモジュール化したpackageをインポートして利用できます。</Tx>
                <Code lang="go">{`import "fmt"`}</Code>
            </Sec>
        </>
    )
}

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