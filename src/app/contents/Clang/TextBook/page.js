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
                    {/* <Sub>配列の繰り返し処理</Sub> */}
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
