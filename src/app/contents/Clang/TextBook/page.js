import Contents from '@/components/contents/Contents'
import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"

export const data = {
    title: "【C言語入門学習】",
    tag: ["C言語"],
    date: ["2024", "11", "05"]
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
                    <Tx>コンパイラをインストールします。</Tx>
                    <Code lang="shell" tab="Linux">{`$ sudo apt install gcc`}</Code>
                    <Sub>Hello,World</Sub>
                    <Tx>C言語のプログラムを実行するにはcファイルをコンパイルし実行ファイルを生成し、これを実行することで結果が出力されます。</Tx>
                    <Code lang="c" tab="test.c">{`#include <stdio.h>

int main(int argc, char const *argv[])
{
    printf("Hello,World\\n");
}`}</Code>
                    <Code lang="shell" tab="ターミナル">{`$ gcc test.c
$ ./a.out
Hello,World`}</Code>
                    <Sub>main関数</Sub>
                    <Tx>c言語ではmain関数で定義された関数から実行されます。関数の中では上から順にプログラムが実行されます。
                        各列の最後にはコロン{`(;)`}を必ずつけます。
                    </Tx>
                    <Code lang="c">{`#include <stdio.h>
int main(int argc, char const *argv[])
{
    printf("Hello\\n");
    return 0;
}

// 以下の書き方でも可
// int main(void)
// {
//     printf("Hello\\n");
//     return 0;
// }`}</Code>
                    <Sub>{`#include <stdio.h>`}</Sub>
                    <Tx>{`<stdio.h>`}標準Cライブラリの一つです。{`pritnf`}や{`scanf`}などの基礎的な関数が実装されています。</Tx>
                    <Sub>エスケープシーケンス</Sub>
                    <Tx>{`printf`}の中でエスケープシーケンスを使用して特殊文字を出力できます。</Tx>
                    <Code lang="c">{`// 改行
printf("Hello\\n");
// 水平タブ
printf("\\tWorld\\n");`}
                    </Code>
                </Sec>
                <Sec title="変数宣言">
                    <Sub>データ型</Sub>
                    <Tx>C言語では変数宣言時にデータ型の指定をします。</Tx>
                    <Code lang="c">{`// 整数型
int x;
// 倍精度浮動小数点型
double y;
// 文字型
char z;`}</Code>
                    <Sub>変数の初期化</Sub>
                    <Tx>データ型が指定された変数に値を代入します。変数宣言と同時に行うことも可能です。
                        char型の値はシングルクォート{`('')`}で囲みます。
                    </Tx>
                    <Code lang="c">{`int x = 100;
double y = 1.2;
char z = 'a';`}</Code>
                    <Sub>変数の文字出力</Sub>
                    <Tx>{`printf`}で変数に格納した値を出力できます。</Tx>
                    <Code lang="c">{`int x = 100;
double y = 3.14159265;
char z = 'a';

// 整数型の出力
printf("%d\\n", x);
// 倍精度浮動小数点型の出力(デフォルトは6桁)
printf("%f\\n", y);
// 桁指定
printf("%.8f\\n", y);
// 文字型の出力
printf("%c\\n", z);`}</Code>
                </Sec>
                <Sec title="配列">
                    <Sub>配列の初期化</Sub>
                    <Tx>配列の宣言は型を指定し、配列名{`[配列のサイズ]`}の形で行います。要素も同時に初期化でき、
                        サイズが要素数と一致させる場合はサイズの宣言の省略も可能です。
                    </Tx>
                    <Code lang={"c"}>{`// 配列の宣言
int arr[10];
// 要素の初期化
int arr_2[3] = {0, 1, 2};
// 初期化を同時に行うなら配列のサイズは省略可
double arr_3[] = {3.2, 4.1, 5.4};`}</Code>
                    <Sub>文字列</Sub>
                    <Tx>char型で宣言された配列は文字列と呼ばれます。
                        初期化を行うときは要素の最後にヌル文字{`'\\0'`}を追加する必要があります。</Tx>
                    <Code lang={"c"}>{`char str[] = {'a', 'b', 'c', '\\0'};`}</Code>
                    <Tx>文字列をそのまま格納することも可能です。1文字ずつ要素として格納され、ヌル文字も自動で格納されます。
                        文字列はダブルクォーテーション{`(")`}で囲みます。</Tx>
                    <Code lang={"c"}>{`char str_2[] = "hello";`}</Code>
                    <Sub>sizeof演算子</Sub>
                    <Tx>sizeof演算子で配列に割り当てられたバイトサイズを表示できます</Tx>
                    <Code lang="c">{`int x;
int arr[3];
// %ldで出力
printf("%ld\\n", sizeof(x));
// 4
printf("%ld\\n", sizeof(arr));
// 12
// int型が3つで3x4=12`}</Code>
                </Sec>
                <Sec title="基本構文">
                    <Sub>for文</Sub>
                    <Tx>for文は{`()`}の中で初期化、条件式、変化式を記述し、条件式がTrueの間繰り返しを実行します。</Tx>
                    <Code lang="c">{`for (int i = 0; i < 5; i++)
{
    printf("%d\\n", i);
}`}</Code>
                    <Sub>配列の繰り返し</Sub>
                    <Tx>sizeof演算子を用いれば配列のサイズ数回繰り返し実行することが簡単に記述できます。</Tx>
                    <Code lang="c">{` int arr[3];
// sizeof(arr)/sizeof(arr[0])で配列サイズを取得
for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++)
{
    arr[i] = i;
    printf("%d\\n", arr[i]);
}`}</Code>
                    <Sub>while,do-while文</Sub>
                    <Tx>while文は条件式だけ記述して繰り返しを実行します。</Tx>
                    <Code lang="c">{`int count = 0;
while (count < 10)
{
    printf("%d\\n", count);
    count++;
}`}</Code>
                    <Tx>do-while文もwhile文と同様ですが、繰り返しの条件判定が処理の実行後に行われるという点で異なります。</Tx>
                    <Code lang="c">{`int answer, num;
do
{
    num++;
    printf("%d\\n", num);
    answer = num % 10;
} while (answer != 0);`}
                    </Code>
                    <Sub>if文</Sub>
                    <Tx>比較演算子や論理演算子を元に条件分岐を行います。
                        条件が複数ある場合はif elseやelseを利用します。
                    </Tx>
                    <Code lang="c">{`int a = 10;
if (a < 10)
{
    printf("a<10\\n");
}
else if (a > 10)
{
    printf("a>10\\n");
}
else
{
    printf("a=10\\n");
}`}</Code>
                    <Sub>比較演算子</Sub>
                    <Tx>比較演算子には{`==、!=、<=、<、>=、>`}があります。</Tx>
                    <Sub>論理演算子</Sub>
                    <Tx>論理演算子には論理積{`(&&)`}、論理和{`(||)`}、真偽反転{`(!)`}があります。</Tx>
                    <Code lang="c">{`int a = 10;
int b = 5;
int c = 5;

if (a == b && b == c)
{
    printf("good\\n");
}
else
{
    printf("bad\\n");
}

if (a == b || b == c)
{
    printf("good\\n");
}
else
{
    printf("bad\\n");
}

if (!(a == b) && b == c)
{
    printf("good\\n");
}
else
{
    printf("bad\\n");
}`}</Code>
                    <Sub>switch文</Sub>
                    <Tx>ある変数の値に応じて条件分岐を行いたい場合はswitch文が適しています。{`()`}には参照したい変数を入れ、
                        caseで条件分岐したい値を指定して処理を書きます。処理の最後にはbreakを入れます。
                    </Tx>
                    <Tx>どの値にも一致しなかった時のためにdefaultの分岐も記述します。</Tx>
                    <Code lang="c">{`int a = 1;
switch (a)
{
case 1:
    printf("a=1\\n");
    break;
case 2:
    printf("a=2\\n");
    break;
case 3:
    printf("a=3\\n");
    break;
default:
    break;
}`}</Code>
                </Sec>

                {/* <Sec title="はじめに">
                    <Sub>こんにちは</Sub>
                    <Tx>これは本文</Tx>
                    <Code lang={"javascript"} tab={"コードの例"}>{`const testiD=document.getElementById("test")
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
