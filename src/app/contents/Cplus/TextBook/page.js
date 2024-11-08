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
    latest: ["2024", "11", "08"]
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
                    <Sub>参照渡し</Sub>
                    <Tx>&で変数を宣言し別の変数を代入することで参照渡しが可能です。参照渡しでは複数の変数で同じアドレスを参照するため値の紐づけが行われます。</Tx>
                    <Code lang="cpp">{`int a = 10;
int &b = a;
std::cout << &a << "," << &b << std::endl;
// 0x7ffdffa0688c,0x7ffdffa0688c
std::cout << b << std::endl;
// 10
a = 20;
std::cout << b << std::endl;
// 20`}</Code>
                    <Sub>関数のオーバーロード</Sub>
                    <Tx>C言語では同名の関数は定義できませんが、C++では引数が違う同名の関数を定義できます。これを関数のオーバーロードと呼びます。</Tx>
                    <Code lang="cpp">{`void output(int x)
{
    std::cout << "引数はint型でした:" << x << std::endl;
}
void output(char a)
{
    std::cout << "引数はchar型でした:" << a << std::endl;
}
int main(int argc, char const *argv[])
{
    int x = 10;
    char a = 'A';

    output(x);
    // 引数はintでした:10
    output(a);
    // 引数は文字列でした:Hello
    return 0;
}`}</Code>
                </Sec>

                <Sec title="string">
                    <Sub>文字列型の実装</Sub>
                    <Tx>C++では文字列型が実装されています。利用するにはstringライブラリをインクルードします。</Tx>
                    <Code lang="cpp">{`#include <iostream>
#include <string>

int main(int argc, char const *argv[])
{
    // 文字列型の宣言にはstd::string
    std::string name = "Tanaka";
    std::cout << name << std::endl;
    // Tanaka
    return 0;
}`}</Code>
                    <Sub>文字列型の初期化</Sub>
                    <Tx>文字列型の宣言や初期化は以下のように行います。</Tx>
                    <Code lang="cpp">{`std::string s1;
std::string s2 = "Hello";
// Hello
std::string s3("World");
// World
std::string s4(s3);
// World
std::string s5(10, 'a');
// aaaaaaaaaa
// 同じ文字を10個格納`}</Code>
                    <Sub>文字の抽出</Sub>
                    <Tx>文字列から任意の箇所の文字を抽出できます。</Tx>
                    <Code lang="cpp">{`std::string s1 = "Hello,World";
// 1文字抽出
char c = s1[3];
// n番目以降の抽出
std::string s2 = s1.substr(6);
// n番目以降のm文字抽出
std::string s3 = s1.substr(6, 3);`}</Code>
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

                    <Sub>コンストラクタ</Sub>
                    <Tx>コンストラクタはクラスの宣言時に一度実行される関数です。コンストラクタは戻り値なしでクラス名と同じ名前として宣言します。</Tx>
                    <Code lang="cpp">{`class Number
{
public:
    Number()
    {
        std::cout << "コンストラクタ" << std::endl;
    }
};
int main(int argc, char const *argv[])
{
    Number data;
    // コンストラクタ
    return 0;
}`}</Code>
                    <Sub>コンストラクタでの初期化</Sub>
                    <Tx>コンストラクタは引数を設定できます。初期化などに利用すると便利です。</Tx>
                    <Code lang="cpp">{`class Number
{
public:
    Number(int x0, int y0)
    {
        x = x0;
        y = y0;
    }
    // これでも可
    // Number(int x0, int y0) : x(x0), y(y0) {}
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
    Number data(10, 20);
    data.show();
    // 10,20
    return 0;
}
`}</Code>
                    <Sub>コンストラクタのオーバーロード</Sub>
                    <Tx>コンストラクタもオーバーロードで引数ごとに処理を分岐できます。</Tx>
                    <Code lang="cpp">{`class Number
{
public:
    Number()
    {
        x = y = 0;
    }
    Number(int x0, int y0)
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
    Number data(10, 20);
    // Number()で初期化
    Number data2;
    data.show();
    // 10,20
    data2.show();
    // 0,0
    return 0;
}`}</Code>
                    <Sub>関数のクラス外定義</Sub>
                    <Tx>メンバ関数はクラスの外でも定義できます。戻り値 クラス名::関数名の形でアクセスします。</Tx>
                    <Code lang="cpp">{`class Number
{
public:
    int x;
    void show();
};
void Number::show()
{
    std::cout << x << std::endl;
}`}</Code>
                    <Sub>継承</Sub>
                    <Tx>親となるクラスの構成要素を引き継いだ子クラスを生成することが出来ます。これを継承と呼びます。
                        継承を行うには{`class 子クラス名 : public 親クラス名`}で定義します。
                    </Tx>
                    <Code lang="cpp">{`class Parent
{
public:
    int x;
    int y;
    void show()
    {
        std::cout << x << "," << y << std::endl;
    };
};
class Child : public Parent
{
};
int main(int argc, char const *argv[])
{
    Child data;
    data.x = 10;
    data.y = 20;
    data.show();
    // 10,20
    return 0;
}`}</Code>
                    <Sub>protected</Sub>
                    <Tx>親クラスでprivate演算子で定義されたメンバは子クラスからもアクセスできません。
                        子クラスからはアクセス可能でクラス外からはアクセス不可に設定するにはprotected演算子を用います。
                    </Tx>
                    <Code lang="cpp">{`class Parent
{
protected:
    int z;
};
class Child : public Parent
{
public:
    void setZ(int z0)
    {
        z = z0;
    }
    void showZ()
    {
        std::cout << z << std::endl;
    }
};`}</Code>
                    <Sub>継承コンストラクタ</Sub>
                    <Tx>親クラスで定義されたコンストラクタを子クラスでも利用する場合は、再度子クラスでコンストラクタを定義し、親クラスのコンストラクタを実行します。
                        子クラスで追加されたメンバを初期化する場合は親クラスのコンストラクタに追加して初期化できます。
                    </Tx>
                    <Code lang="cpp">{`class Parent
{
public:
    int x;
    Parent(int x0) : x(x0) {}
};
class Child : public Parent
{
public:
    int y;
    // 親クラスのコンストラクタの継承
    Child(int x0) : Parent(x0) {}
    // 初期化の追加
    Child(int x0, int y0) : Parent(x0), y(y0) {}
};`}</Code>
                    <Sub>親クラスのメンバ関数呼び出し</Sub>
                    <Tx>子クラスのメンバ関数内で親クラスのメンバ関数を呼び出すことが出来ます。呼び出しは{`親クラス::メンバ関数`}の形で記述します。</Tx>
                    <Code lang="cpp">{`class Parent
{
public:
    int x;
    Parent(int x0) : x(x0) {}
    void show()
    {
        std::cout << x << std::endl;
    }
};
class Child : public Parent
{
public:
    int y;
    // 親クラスのコンストラクタの継承
    Child(int x0) : Parent(x0) {}
    // 初期化の追加
    Child(int x0, int y0) : Parent(x0), y(y0) {}
    void showChild()
    {
        Parent::show();
        std::cout << "以降は子要素独自" << std::endl;
        std::cout << y << std::endl;
    }
};`}</Code>
                    <Sub>関数のオーバーライド</Sub>
                    <Tx>親クラスで定義されたメンバ関数と同名の関数を子クラスで再定義できます。これを関数のオーバーライドと言います。</Tx>
                    <Code lang="cpp">{`class Parent
{
public:
    void show()
    {
        std::cout << "これは親クラスで定義されている。" << std::endl;
    }
};
class Child : public Parent
{
public:
    void show()
    {
        std::cout << "これは子クラスで定義されている。" << std::endl;
    }
};
int main(int argc, char const *argv[])
{
    Parent parent;
    Child child;
    parent.show();
    // これは親クラスで定義されている。
    child.show();
    // これは子クラスで定義されている。
    
    return 0;
}`}</Code>
                </Sec>

            </Contents>
        </>
    )
}
