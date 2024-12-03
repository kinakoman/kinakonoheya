import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
            <Sec title="関数">
                <Sub>関数の宣言</Sub>
                <Tx>関数はmain関数の外で定義します。関数の宣言はfunc 関数名(データ型)(戻り値型)で定義します。</Tx>
                <Code lang="go">{`func add(x int, y int) int {
	return x + y
}

// 戻り値が無い場合は戻り値のデータ型は省略できます
func echo(str string) {
	fmt.Println(str)
}

// 引数が無い場合も()は記述します
func hello() {
	fmt.Println("hello")
}`}</Code>
                <Sub>複数の戻り値</Sub>
                <Tx>Goの関数は戻り値を複数もつことが可能です。戻り値の数に合わせてデータ型の宣言も行います。
                </Tx>
                <Code lang="go">{`func calc(x int, y int) (int, int) {
	return x + y, x - y
}

func main() {
	x, y := 10, 20

	sum, sub := calc(x, y)

	fmt.Println(sum, sub)
	// 30 -10
}`}</Code>
                <Sub>mapの値</Sub>
                <Tx>関数も値として扱われるため、map関数の値(value)として割り当てることが可能です。関数を値として扱う際は引数のデータ型と戻り値のデータが一致する必要があります。
                </Tx>
                <Code lang="go">{`func main() {
	funcList := map[string]func(int, int) int{ // mapのvalueに関数を指定
		"+": add,
		"-": sub,
	}

	for c, f := range funcList {
		fmt.Println(c)         // mapのキーをを表示
		fmt.Println(f(20, 10)) // 値として関数を実行
	}
	// +
	// 30
	// -
	// 10

}

// mapの値とデータ型が一致している関数
func add(x int, y int) int {
	return x + y
}

func sub(x int, y int) int {
	return x - y
}`}</Code>
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