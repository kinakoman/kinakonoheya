import Contents from '@/components/contents/Contents'
import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"

export const data = {
    title: "【Go入門学習】",
    tag: ["Go"],
    date: ["2024", "11", "09"],
    // latest: ["9999", "99", "99"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Toc />
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
                    <Tx>goコマンドでファイルを生成できます。-oオプションで出力するファイル名を指定できます。</Tx>
                    <Code lang="shell" tab="ターミナル">{`$ go build -o sample sample.go
$ ./sample 
Hello,world!`}</Code>
                </Sec>
                <Sec title="基本構文">

                </Sec>
            </Contents>
        </>
    )
}
