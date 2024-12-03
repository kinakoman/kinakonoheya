import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
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
                <Sub>append関数</Sub>
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