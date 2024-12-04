import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
            <Sec title="基本構文">
                <Sub>変数宣言</Sub>
                <Tx>変数はデータ型を指定して宣言します。初期化も同時に行えます。</Tx>
                <Code lang="java">{`int x;
x = 10;
double y = 3.14;
char word = 'a';
String str = "hello";
boolean flag = true;`}</Code>
                <Sub>型推論</Sub>
                <Tx>varを用いて型推論を行えます。</Tx>
                <Code lang="java">{`var num = 199;
var txt = "string";`}</Code>
                <Sub>配列</Sub>
                <Tx>配列を宣言した後に配列サイズを指定する場合はnewを利用します。</Tx>
                <Code lang="java">{`int[] arr;
arr = new int[5];
System.out.println(arr.length);
// 5

// 宣言と同時に初期化
String[] str = { "abc", "def", "ghi" };
System.err.println(str[0] + str[1] + str[2]);
// abcdefghi`}</Code>
                <Tx>2次元配列も当然扱えます。</Tx>
                <Code lang="java">{`// ２次元配列の初期化
String[][] str;
str = new String[2][2];
System.err.println(str.length + ":" + str[0].length);
// 2:2

// 宣言と初期化
int[][] arr = { { 0, 1, 2 }, { 3, 4, 5 } };`}</Code>
                <Sub>if分</Sub>
                <Tx>ifの後に{`()`}で条件式を記述します。if elseやelseも利用可能です。</Tx>
                <Code lang="java">{`int a = 12;

if (a < 5) {
    System.out.println("small");
} else if (a > 10) {
    System.out.println("big");
} else {
    System.out.println("normal");
}`}</Code>
                <Sub>switch文</Sub>
                <Tx>Javaではswitch文も実装されています。どの条件分岐にも一致しなかった場合はdefult内の処理が実行されます。
                    各分岐の最後にはbreakを記述します。
                </Tx>
                <Code lang="java">{`int a = 12;

switch (a) {
    case 10:
        System.out.println("good");
        break;
    default:
        System.out.println("bad");
        break;
}`}</Code>
                <Sub>for文</Sub>
                <Tx>Javaのfor文はC言語等の他の繰り返し処理と同様に、初期化式;条件式;変化式の形で記述します。</Tx>
                <Code lang="java">{`for (int i = 0; i < 10; i++) {
    System.out.println(i);
}`}</Code>
                <Sub>for-each</Sub>
                <Tx>配列の要素に応じて繰り返しを実行することが出来ます。繰り返し変数には配列の要素が順に代入されます。</Tx>
                <Code lang="java">{`String[] str = { "first", "second", "third" };

for (String word : str) {
    System.out.println(word);
}
// first
// second
// third`}</Code>
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