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
                    <Tx>データ型が指定された変数に値を代入します。変数宣言と同時に行うことも可能です。</Tx>
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
