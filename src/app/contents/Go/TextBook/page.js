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
    latest: ["2024", "11", "09"]
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
                <Sec title="基本構文">
                    <Sub>変数宣言</Sub>
                    <Tx>Go言語では変数の宣言はvar 変数名 データ型の形で行います。初期化を同時に行うことで型推定を行うことも可能です。カンマ(,)で区切って同時に宣言もできます。</Tx>
                    <Code lang="go">{`// 整数型
var x int
x = 10
// 浮動小数点型
var y float64 = 1.234
// 文字列型
var str string = "Hello"
// bool型
var On, Off bool = true, false
// 型推定
var est = 100

fmt.Println(x, y, str, On, Off, est)
// 10 1.234 Hello true false 100`}</Code>
                    <Tx>main関数の外でも宣言はできますが、その場合初期化を同時に行う必要があります。</Tx>
                    <Code lang="go">{`package main
import "fmt"

var x int = 10

func main() {
	fmt.Println(x)
	// 10
}`}</Code>
                    <Tx>var()で変数をまとめて宣言することも可能です。</Tx>
                    <Code lang="go">{`var (
	x   int     = 10
	y   float32 = 1.2
	str string  = "Hello"
)

func main() {
	fmt.Println(x, y, str)
	// 10 1.2 Hello
}`}</Code>
                    <Tx>{`:=`}でvarとデータ型を省略した宣言も可能です。この場合関数の外での宣言は出来ません。</Tx>
                    <Code lang="go">{`// varとデータ型の省略
x := 10
fmt.Println(x)
// 10`}</Code>
                    <Sub>定数宣言</Sub>
                    <Tx>varの代わりにconstを用いることで定数を宣言することが出来ます。宣言の方法は変数と同じです。</Tx>
                    <Code lang="go">{`const x int = 10
const (
    y   float32 = 2.35
    str string  = "Hello"
)`}</Code>
                    <Sub>型変換</Sub>
                    <Tx>データ型{`(変数)`}で型変換も可能です</Tx>
                    <Code lang="go">{`var x int = 10
var y float32
y = float32(x)`}</Code>
                    <Sub>データ型の定義</Sub>
                    <Tx>データ型を別名で再定義して利用することが出来ます。type 別名 データ型で定義を行います。</Tx>
                    <Code lang="go">{`type newInt int
var x newInt = 10
// typeをまとめて記述も可能
type (
    newString1 string
    newString2 string
)
var str1 newString1 = "hello"
var str2 newString2 = "world"
str1=str2
// stirng型ではあるが再定義したデータ型が違うのでエラー

str1 = newString1(str2)
// 型変換も可能`}</Code>
                    <Sub>Print系関数</Sub>
                    <Tx>print系関数はfmtパッケージをインポートして利用します。Print関数は接尾辞によって補助機能が付きます。</Tx>
                    <Code lang="go">{`x := 10
str := "Hello"
// フォーマットして出力(Cのprintと同じ)
fmt.Printf("%d,%s\\n", x, str)
// ,ごとに出力(文字列と隣接していなければスペースも出力)
fmt.Print("x=", x, x, str, "\\n")
// ,ごとにスペースを入れて出力、最後には改行を挿入
fmt.Println("x=", x, x, str)`}</Code>
                </Sec>
                <Sec title="配列とスライス">
                    <Sub>配列の宣言</Sub>
                    <Tx>Goにおける配列は{`[要素数]データ型{要素}`}の形で宣言を行います。
                        一般的な配列と同様にインデックスを指定した要素へのアクセスが可能です。</Tx>
                    <Code lang="go">{`var x = [3]int{0, 1, 2}
// x := [3]int{0, 1, 2} これでも可
fmt.Println(x[2])
// 2`}</Code>
                    <Tx>要素を全て指定せずとも、{`インデックス:要素`}の形で直接要素を指定すれば、そのほかの要素を0にした配列が宣言できます。</Tx>
                    <Code lang="go">{`var y = [5]float32{2: 1.24, 4: 1.11}
fmt.Println(y)
// [0 0 1.24 0 1.11]`}</Code>
                    <Tx>要素数の代わりに{`[...]`}を記述すれば、要素から要素数を自動で取得してくれます。</Tx>
                    <Code lang="go">{`var str = [...]string{"a", "b", "c", "d"}
fmt.Println(str)
// [a b c d]`}</Code>
                    <Sub>len関数</Sub>
                    <Tx>len関数を用いて配列の要素数を取得できます。</Tx>
                    <Code lang="go">{`x := []int{0, 1, 2, 3, 4, 5}
fmt.Println(len(x))
// 6`}</Code>
                </Sec>
            </Contents>
        </>
    )
}
