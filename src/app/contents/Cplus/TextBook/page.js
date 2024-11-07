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
    latest: ["2024", "11", "07"]
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
                <Sec title="クラス">
                    <Sub>クラスとは</Sub>
                    <Tx>クラスはオブジェクト指向プログラミングで必須の概念です。構造体とよく似ていますが、メンバに関数を持つことが出来るようになっています。</Tx>
                    <Sub>クラスの生成</Sub>
                    <Tx>クラスの生成はmain関数の外で行います。以下に示すのはクラスの簡単な例です。</Tx>
                    <Code lang="cpp">{`class Number
{
public:
    int x;
    void show()
    {
        std::cout << x << std::endl;
    }
};`}</Code>
                    <Sub>クラスの宣言</Sub>
                    <Tx>クラスの宣言はmain関数内で行います。メンバへのアクセスはクラス変数.メンバ名で行います。</Tx>
                    <Code lang="cpp">{`class Number
{
public:
    int x;
    void show()
    {
        std::cout << x << std::endl;
    }
};
int main(int argc, char const *argv[])
{
    Number data;
    data.x = 10;
    data.show();

    return 0;
}`}</Code>
                    <Sub>public,private</Sub>
                    <Tx>クラスにはpublicとprivateのアクセス制限を設定します。publicのメンバはクラス外から自由にアクセス可能ですがprivateのメンバはクラス外からアクセスできません。</Tx>
                    <Code lang="cpp">{`class Number
{
public:
    int x;
private:
    int y;  
};
int main(int argc, char const *argv[])
{
    Number data;
    // アクセス可能
    data.x = 10;
    // privateはアクセス不可でエラー
    // data.y=10;
    
    return 0;
}`}</Code>
                    <Sub>カプセル化</Sub>
                    <Tx>privateのメンバは外部からアクセスできないため、クラス内にアクセス用の関数などを用意します。これをアクセッサと呼び、メンバの外部操作を禁止し内部からの操作を受け付けることをカプセル化と呼びます。</Tx>
                    <Code lang="cpp">{`class Number
{
public:
    void setNum(int x0, int y0)
    {
        x = x0;
        y = y0;
    }
    void show()
    {
        std::cout << x << "," << y << std::endl;
    }
private:
    int x;
    int y;
};
int main(int argc, char const *argv[])
{
    Number data;
    data.setNum(10, 12);
    data.show();
    // 10,12
    return 0;
}`}</Code>
                </Sec>

            </Contents>
        </>
    )
}
