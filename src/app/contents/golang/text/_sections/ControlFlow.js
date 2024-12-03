import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
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