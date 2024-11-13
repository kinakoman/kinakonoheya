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
    latest: ["2024", "11", "13"]
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
                    <Code lang="go">{`x := [...]int{0, 1, 2, 3, 4, 5}
fmt.Println(len(x))
// 6`}</Code>
                    <Sub>スライス</Sub>
                    <Tx>Go言語において配列とスライスの最も大きな違いは、配列はサイズが固定であるのに対してスライスはサイズが可変である点です。
                        スライスの宣言では配列と異なり要素数を指定しません。
                    </Tx>
                    <Code lang="go">{`x := []int{0, 1, 2, 3, 4, 5}
fmt.Println(x)
// [0 1 2 3 4 5]`}</Code>
                    <Sub>要素の追加</Sub>
                    <Tx>スライスに要素を追加するにはappendを利用します。</Tx>
                    <Code lang="go">{`// int型のスライス宣言
var x []int
// 要素の追加
x = append(x, 0)
fmt.Println(x)
// [0]
x = append(x, 10, 20, 30)
fmt.Println(x)
// [0 10 20 30]

// スライスを追加,変数の後に...で展開
y := []int{40, 50, 60}
x = append(x, y...)
fmt.Println(x)
// [0 10 20 30 40 50 60]`}</Code>
                    <Sub>make関数</Sub>
                    <Tx>スライスの初期化に便利なのがmake関数です。引数にはデータ型と要素数を取り、要素が全て0のスライスを生成します。</Tx>
                    <Code lang="go">{`var x = make([]int, 5)
// x := make([]int, 5) これでも可
fmt.Println(x, len(x))
// [0 0 0 0 0] 5`}</Code>
                    <Sub>スライスのスライス</Sub>
                    <Tx>一般的な言語におけるスライスを行うこともできます。</Tx>
                    <Code lang="go">{`x := []int{0, 1, 2, 3, 4, 5}
y := x[:4]
z := x[2:]
w := x[1:4]
fmt.Println(y, z, w)
// [0 1 2 3] [2 3 4 5] [1 2 3]`}</Code>
                    <Sub>2次元スライス</Sub>
                    <Tx>2次元のスライスを作ることも可能です。Goの多次元スライスは一般的な多次元配列とは異なり、スライスの各要素がスライスになっているイメージです。</Tx>
                    <Code lang="go">{`x1 := [][]int{{0, 1}, {2, 3}}
fmt.Println(x1)
// [[0 1] [2 3]]

// 要素数は同じでなくても良い
x2 := [][]int{{0, 1, 2, 3}, {4, 5, 6, 7}, {8, 9, 10}}
fmt.Println(x2)
// [[0 1 2 3] [4 5 6 7] [8 9 10]]

// make関数を使って生成
x3 := make([][]int, 5)
for i := range x3 {
    x3[i] = make([]int, 3)
}
fmt.Println(x3)
// [[0 0 0] [0 0 0] [0 0 0] [0 0 0] [0 0 0]]`}</Code>
                    <Sub>map関数</Sub>
                    <Tx>mapは{`"キー"`}に対して値を紐づけることが出来ます。スライスのインデックスを自身で設定できるイメージです。紐づけた値はキーで指定して出力できます。
                        map[キーのデータ型]値のデータ型 で宣言します。
                    </Tx>
                    <Code lang="go">{`x := map[string]int{
    "a": 1,
    "b": 2,
    "c": 3,
}
// rangeではインデックスの代わりにキーが得られます
for c, i := range x {
    fmt.Println(c, i)
}
// a 1
// b 2
// c 3`}</Code>
                    <Tx>二次元のmapも可能です。</Tx>
                    <Code lang="go">{`x := map[string][]string{
    "a": {"aa", "ab", "ac"},
    "b": {"ba", "bb", "bc"},
    "c": {"ca", "cb", "cc"},
}
fmt.Println(x["a"])
// [aa ab ac]`}</Code>
                </Sec>
                <Sec title="制御構文">
                    <Sub>シャドーイング変数</Sub>
                    <Tx>外側のブロックで宣言された変数を内側のブロックで再宣言すると、そのブロック内では値が上書きされることになります。上書きされて隠れた変数をシャドーイング変数と呼びます。</Tx>
                    <Code lang="go">{`x := 10
{
    fmt.Println(x)
    // 10
    x := 20
    fmt.Println(x)
    // 20
}
fmt.Println(x)
// 10`}</Code>
                    <Sub>if文</Sub>
                    <Tx>Go言語でも一般的なif文が利用できます。注意点として一連のelse ifやelseは前の{`{}`}の終わりと同じ行から書き始めます。また条件式は{`()`}で囲みません。</Tx>
                    <Code lang="go">{`n := rand.Intn(10)
if n > 5 {
    fmt.Println("big")
} else if n < 2 {
    fmt.Println("small")
} else {
    fmt.Println("good")
}`}</Code>
                    <Sub>標準for文</Sub>
                    <Tx>Go言語の標準for文はC言語などの他の言語のfor文と同様です。初期化式;条件式;変化式でループの制御を行います。
                        式は{`()`}で囲みません。</Tx>
                    <Code lang="go">{`for i := 0; i < 5; i++ {
    fmt.Println(i)
    }`}</Code>
                    <Sub>条件のみのfor文</Sub>
                    <Tx>Go言語にはwhile文は実装されていません。代わりに条件式のみを記述したfor文で同様の処理が可能です。</Tx>
                    <Code lang="go">{`var i int = 0
for i < 5 {
    fmt.Println(i)
    i++
}`}</Code>
                    <Sub>for-rangeループ</Sub>
                    <Tx>配列やスライスにの要素数に対して繰り返し実行を行うのに有効なのがrange関数です。range関数は各要素に対してインデックスと要素を返します。
                        {`_`}や変数の省略で必要のない値を無視することもできます。
                    </Tx>
                    <Code lang="go">{`str := []string{"a", "b", "c"}
for i, c := range str {
    fmt.Println(c, i)
}
// インデックスを無視
for _, c := range str {
    fmt.Println(c)
}
// インデックスのみ
for i := range str {
    fmt.Println(i)
}`}</Code>
                    <Sub>for-rangeとmap</Sub>
                    <Tx>マップをfor-rangeでループすると、キーの順番が実行ごとに異なるという仕様があります。これはセキュリティの観点から実装されたGo独自の使用です。</Tx>
                    <Code lang="go">{`str := map[string]int{
    "a": 1,
    "b": 2,
    "c": 3,
    }
    for i := 0; i < 3; i++ {
        fmt.Println("ループ", i)
        for c, num := range str {
            fmt.Println(c, num)
            }
            }
            // ループ 0
            // b 2
            // c 3
            // a 1
            // ループ 1
            // a 1
            // b 2
            // c 3
            // ループ 2
            // c 3
            // a 1
            // b 2`}</Code>
                    <Sub>switch文</Sub>
                    <Tx>Go言語にもswitch文は実装されています。他の言語とは異なり各分岐の最後にbreakは必要ありません。</Tx>
                    <Code lang="go">{`arr := []string{"dog", "cat", "lion", "worm"}
for _, el := range arr {
    switch el {
    case "dog":
        fmt.Println("good")
    case "cat":
        fmt.Println("not bad")
    case "worm":
        fmt.Println("bad")
    default:
        fmt.Println("normal")
    }
}`}</Code>
                    <Sub>ブランクswitch</Sub>
                    <Tx>Goのswitch文には変数の値での分岐だけでなく、条件式での分岐を行うこともできます。
                    </Tx>
                    <Code lang="go">{`for _, num := range arr {
    switch { //変数の設定なし
    case num > 5:
        fmt.Println("big")
    case num <= 5:
        fmt.Println("small")
    }
}`}
                    </Code>
                </Sec>
                <Sec title="関数">
                    <Sub>関数の宣言</Sub>
                    <Tx></Tx>
                </Sec>
            </Contents>
        </>
    )
}
