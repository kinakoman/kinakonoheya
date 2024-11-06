import Contents from '@/components/contents/Contents'
import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"

export const data = {
    title: "【C++入門学習】",
    tag: ["C++"],
    date: ["2024", "11", "06"],
    // latest: ["9999", "99", "99"]
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
                    <Code lang="shell" tab="Linux">{`sudo apt install g++`}</Code>
                    <Sub>Hello,World</Sub>
                    <Tx>C++を実行するにはcppファイルをコンパイルし実行ファイルを生成します。</Tx>
                    <Code lang="cpp" tab="test.cpp">{`#include <iostream>

int main(int argc, char const *argv[])
{
    std::cout << "Hello,World" << std::endl;
    return 0;
}`}</Code>
                    <Code lang="shell" tab="ターミナル">{`$ g++ test.cpp
$ ./a.out 
Hello,World`}</Code>
                    <Sub>{`#include <iostream>`}</Sub>
                    <Tx>iostreamは標準入出力の関数が実装されたライブラリです。</Tx>
                    <Sub>{`std::cout`}</Sub>
                    <Tx>cout(シーアウト)は出力演算子で{`<<`}に続く要素を出力します。cout(画面)に要素を押し込む({`<<`})イメージです。
                        {`std::endl`}(エンドエル)は改行を示します。
                    </Tx>
                    <Code lang="cpp">{`std::cout << "Hello" << std::endl;
std::cout << "こんにちは" << "さようなら" << std::endl;
// Hello
// こんにちはさようなら`}</Code>
                    <Sub>{`std::cin`}</Sub>
                    <Tx>cin(シーイン)は入力演算子です。cinで得た入力を({`>>`})で後に続く変数に押し込みます。</Tx>
                    <Code lang="cpp">{`int x;
std::cin >> x;
std::cout << x << std::endl;`}</Code>
                    <Sub>変数宣言</Sub>
                    <Tx>C言語と同様、変数宣言時にはデータ型の指定が必要です。出力の際のデータ型の指定は不要です。</Tx>
                    <Code lang="cpp">{`int x = 10;
double y = 1.34;
char z = 'a';
// bool型はtrueとfalseしかとらない
bool flag = true;

std::cout << x << y << z << std::endl;
// bool型の出力は1と0
std::cout << flag << !flag << std::endl;`}</Code>
                </Sec>
                <Sec title="string">
                    <Sub>文字列型の宣言</Sub>
                    <Tx>C++では文字列型が実装されています。利用するにはstringライブラリをインクルードします。</Tx>
                    <Code lang="cpp">{`// 文字列型の宣言にはstd::string
std::string name = "Tanaka";
std::cout << name << std::endl;
// Tanaka`}</Code>
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
