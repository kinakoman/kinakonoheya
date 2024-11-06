import Contents from '@/components/contents/Contents'
import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"

export const data = {
    title: "【C言語入門学習】",
    tag: ["C言語"],
    date: ["2024", "11", "05"],
    latest: ["2024", "11", "06"]
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
printf("%c\\n", z);
// 指定を増やして対応する変数をカンマで区切れば同時に複数出力できます
printf("%d,%f,%c\\n", x, y, z);`}</Code>
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
                    <Code lang={"c"}>{`char str_2[] = "hello";
printf("%s\\n", str_2);`}</Code>
                    <Tx>文字列の出力には{`%s`}を利用します。配列はインデックスを指定せず変数のみを指定します。</Tx>
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
                    <Sub>関数の定義</Sub>
                    <Tx>関数はmainの外で宣言し、戻り値の型 関数名 (引数)の形で定義します。戻り値が無い場合は型指定はvoidとします。</Tx>
                    <Code lang="c">{`void output()
{
    printf("Hello\\n");
}

int calcSum(int a, int b)
{
    return a + b;
}
int main(int argc, char const *argv[])
{
    output();
    // Hello
    int a = 10;
    int b = 5;
    printf("%d\\n", calcSum(a, b));
    // 15
    return 0;
}`}</Code>
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
                <Sec title="ポインタ">
                    <Sub>アドレスの概念</Sub>
                    <Tx>変数を宣言するとメモリが割り当てられます。{`&+変数`}でメモリのアドレスにアクセスできます。</Tx>
                    <Code lang="c">{`int x;
// %pで出力
printf("%p\\n", &x);
// 0x7ffcaecb30c4`}</Code>
                    <Sub>ポインタ型変数</Sub>
                    <Tx>ポインタ型変数の宣言はデータ型の横に{`*`}を付けます。ポインタ型変数にはアドレスを代入します。</Tx>
                    <Code lang="c">{`// int型通常変数
int x;
// intポインタ型変数
int *x_p;
// ポインタ型変数の初期化
x_p = &x;`}</Code>
                    <Sub>通常変数モード</Sub>
                    <Tx>ポインタ型変数に{`*`}を付けると通常変数としてアドレスに格納された値を操作できます。</Tx>
                    <Code lang="c">{`int x = 10;
int *x_p = &x;

// 通常変数モードで操作
*x_p = 20;

printf("%d,%d\\n", x, *x_p);
// 20,20
// ポインタはアドレスに格納された値を参照するので
// アドレス元のxの値も更新されます`}</Code>
                    <Sub>ダブルポインタ</Sub>
                    <Tx>ポインタ型変数もメモリとアドレスが割り当てられます。ダブルポインタはポインタ型変数のポインタです。</Tx>
                    <Code lang="c">{`int x = 10;
int *x_p = &x;
int **x_pp = &x_p;

printf("%p,%p\\n", &x, x_p);
// 0x7ffe0abdbf54,0x7ffe0abdbf54

printf("%p,%p\\n", &x_p, x_pp);
// 0x7ffe0abdbf58,0x7ffe0abdbf58`}</Code>
                    <Sub>配列とポインタ</Sub>
                    <Tx>配列とポインタはほぼ等価です。ポインタ型変数の初期化には配列の変数も代入できます。</Tx>
                    <Code lang="c">{`int arr[] = {0, 1, 2};
int *arr_p = arr;`}</Code>
                    <Tx>配列を代入したポインタ型変数は、変数+indexで元配列の要素のアドレスを参照することが出来ます。(配列の変数も同様。)</Tx>
                    <Code lang="c">{`char str[] = "Hello";
char *str_p = str;

printf("%p,%p,%p,%p\\n", str, &str[0], str_p, str_p + 1);
// 0x7fff033a3d62,0x7fff033a3d62,0x7fff033a3d62,0x7fff033a3d63
printf("%c,%c\\n", *(str + 1), *(str_p + 4));
// e,o`}</Code>
                    <Tx>配列とポインタの相違点として、ポインタはアドレスを変数として更新できますが配列はできません。</Tx>
                    <Code lang="c">{`int arr[] = {0, 1};
int *arr_p = arr;

arr_p++;
printf("%d\\n", *arr_p);
// 1

// これはエラー
// arr++;
// printf("%d\\n", *arr);
// arrはあくまで&arr[0]であり変数として操作できない`}</Code>
                    <Sub>ポインタの文字列</Sub>
                    <Tx>ポインタを配列として直接文字列を代入して扱うことも可能です。</Tx>
                    <Code lang="c">{`char *name = "Tanaka";
printf("%s\\n", name);`}</Code>
                    <Sub>関数のポインタ渡し</Sub>
                    <Tx>関数の引数にポインタを渡せば関数の中で直接アドレスの操作が可能です。</Tx>
                    <Code lang="c">{`void overWrite(int a, int *b_p)
{
    a = 10;
    *b_p = 10;
}
int main(int argc, char const *argv[])
{
    int a = 5;
    int b = 5;
    int *b_p = &b;

    printf("%d,%d\\n", a, b);
    // 5,5

    overWrite(a, b_p);

    printf("%d,%d\\n", a, b);
    // 通常変数を渡したaの値は変化しないがアドレスを渡したbの値は上書きされる
    // 5,10

    return 0;
}`}</Code>
                    <Tx>通常変数を渡すと関数の中で新しいメモリにその値が保存されますがポインタはメモリが共通なのでメモリの節約にもなります。</Tx>
                    <Code lang="c">{`void showAddress(int a, int *b_p)
{
    printf("%p,%p\\n", &a, b_p);
}
int main(int argc, char const *argv[])
{
    int a = 5;
    int b = 5;
    int *b_p = &b;

    printf("%p,%p\\n", &a, b_p);
    // 0x7ffc0fac11d8,0x7ffc0fac11dc

    showAddress(a, b_p);
    // 0x7ffc0fac11ac,0x7ffc0fac11dc
    // aは関数内で新しいメモリが割り当てられている、bは共通

    return 0;
}
`}</Code>
                </Sec>
                <Sec title="構造体">
                    <Sub>構造体とは</Sub>
                    <Tx>構造体とは、ある対象の関連項目をまとめたものです。各関連項目はメンバと呼ばれ、変数をメンバとして設定します。
                        構造体を宣言したものは実体と呼ばれ、この実体を通してメンバへの値の代入などを行います。
                    </Tx>
                    <Sub>構造体の作成</Sub>
                    <Tx>構造体の作成はmain関数の外で行います。メンバはデータ型と変数名を設定します。作成時に変数の初期化はできません。</Tx>
                    <Code lang="c">{`struct number
{
int x;
int y;
};`}</Code>
                </Sec>
                <Sub>構造体の宣言</Sub>
                <Tx>構造体の宣言はmain関数で行います。宣言時には使用する構造体と構造体変数を明記します。メンバの初期化も同時に行うことが出来ます。</Tx>
                <Code lang="c">{`struct person
{
    char *name;
    int age;
    double height;
};
int main(int argc, char const *argv[])
{
    struct person Tanaka = {"Tanaka", 24, 1.74};
    return 0;
}`}</Code>
                <Sub>メンバへのアクセス</Sub>
                <Tx>メンバには変数名.メンバ名の形でアクセスします。</Tx>
                <Code lang="c">{`struct number
{
    int x;
    double y;
};
int main(int argc, char const *argv[])
{
    struct number data;
    data.x = 1;
    data.y = 1.234;
    printf("%d,%f\\n", data.x, data.y);
    return 0;
}`}</Code>
                <Sub>構造体のポインタ</Sub>
                <Tx>構造体変数にポインタを当てることも可能です。ポインタからメンバにアクセスする際は.の代わりに{`->`}を使います。</Tx>
                <Code lang="c">{`struct number
{
    int x;
    double y;
};
int main(int argc, char const *argv[])
{
    struct number data = {1, 1.2345};
    struct number *data_p = &data;
    printf("%d,%f\\n", data_p->x, data_p->y);
    return 0;
}`}</Code>
                <Sub>構造体の配列</Sub>
                <Tx>構造体変数を配列として宣言できます。メンバには配列{`[インデックス]`}.メンバ名でアクセスします。
                </Tx>
                <Code lang="c">{`struct number
{
    int x;
};
int main(int argc, char const *argv[])
{
    struct number data[3];
    for (int i = 0; i < sizeof(data) / sizeof(data[0]); i++)
    {
        data[i].x = i;
    }
    printf("%d,%d,%d\\n", data[0].x, data[1].x, data[2].x);
}`}</Code>
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
