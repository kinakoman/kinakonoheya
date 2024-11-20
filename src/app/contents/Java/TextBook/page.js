import Contents from '@/components/contents/Contents'
import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"

export const data = {
    title: "【Java入門学習】",
    tag: ["Java"],
    date: ["2024", "11", "20"],
    latest: ["2024", "11", "20"]
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
                    <Tx>Java開発環境のJDKをインストールします。</Tx>
                    <Code lang="shell" tab="Linux">{`$ sudo apt update
$ sudo apt install openjdk-21-jdk`}</Code>
                    <Sub>Hello,World</Sub>
                    <Tx>Javaファイルはjavacコマンドでコンパイル、javaコマンドで実行します。</Tx>
                    <Code lang="java" tab="Sample.java">{`class Sample {
    public static void main(String[] args) {
        System.out.println("Hello,Borld");
    }
}`}</Code>
                    <Code lang="java" tab="ターミナル">{`$ javac Sample.java
$ java Sample
Hello,World`}</Code>
                    <Sub>クラスとmain関数</Sub>
                    <Tx>Javaのコードは全てクラスのオブジェクト内に記述します。プログラムのエントリーポイントとなるmain関数もクラス内に記述します。
                        クラス名はファイル名(拡張子を除く)と一致させます。
                    </Tx>
                    <Code lang="java">{`// ファイル名はSample.java
class Sample {
    // main関数
    public static void main(String[] args) {
        System.out.println("goodbye");
    }
}`}</Code>
                    <Sub>System.out</Sub>
                    <Tx>SystemはJavaの標準ライブラリでインポートなしで利用できます。outフィールドを利用すれば標準出力が行えます。</Tx>
                    <Code lang="java">{`// 改行無し
System.out.print("1" + "2" + "\\n");
// 改行あり
System.out.println("a" + "b" + "c");
// 12
// abc`}</Code>
                </Sec>
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
                <Sec title="クラス">
                    <Sub>クラスとは</Sub>
                    <Tx>クラスはオブジェクト指向プログラミングの最も基本的な枠組みです。オブジェクトの中に変数や関数をメンバとして持ちます。
                        変数メンバはフィールド、関数メンバはメソッドと呼びます。Javaではクラス名の一文字目は大文字が一般的です。

                    </Tx>
                    <Code lang="java">{`class NewClass {
    String name;
    int age;

    void echo() {
        System.out.println("hello");
    }
}`}</Code>
                    <Sub>インスタンス</Sub>
                    <Tx>クラスを変数として実体化したものをインスタンスと呼びます。インスタンスの作成にはnewを使用します。インスタンスのメンバを呼び出すには変数名.メンバとします。</Tx>
                    <Code lang="java">{`class NewClass {
    String name;
    int age;

    void echo() {
        System.out.println("hello");
    }
}

public class Sample {
    public static void main(String[] args) {
        NewClass ob = new NewClass();
        ob.name = "Bob";
        ob.age = 13;
    }
}`}</Code>
                    <Sub>コンストラクタ</Sub>
                    <Tx>コンストラクタはインスタンスが生成された時に実行される関数です。定義する際にはクラス名と同名の関数として定義します。フィールドの初期化などに利用されます。
                        コンストラクタには戻り値の型の指定はありません。
                    </Tx>
                    <Code lang="java">{`class NewClass {
    String name;
    int age;

    NewClass(String str0, int int0) {
        name = str0;
        age = int0;
    }
}

public class Sample {
    public static void main(String[] args) {
        NewClass ob = new NewClass("Bob", 10);
        System.out.println(ob.name + ":" + ob.age);
        // Bob:10
    }
}`}</Code>
                    <Sub>this</Sub>
                    <Tx>thisは自分自身のインスタンスを指します。通常は同クラス内のメンバにはthisの有無にかかわらずアクセスすることが可能ですが、
                        ローカル変数などで同名の変数を利用したい場合は区別のためにthisで明示的に指定します。
                    </Tx>
                    <Code lang="java">{`class NewClass {
    int x;

    NewClass(int x) {
        this.x = x;
    }

    void add(int x) {
        this.x += x;
        System.out.println(x);
        System.out.println(this.x);
    }
}

public class Sample {
    public static void main(String[] args) {
        NewClass ob = new NewClass(10);
        ob.add(30);
        // 30
        // 40  
    }
}`}</Code>
                    <Sub>オーバーロード</Sub>
                    <Tx>関数を定義する際、引数が異なっていれば同名の関数を複数定義することが可能です。これを関数のオーバーロードと言います。
                        コンストラクタも同様にオーバーロードが可能です。</Tx>
                    <Code lang="java">{`class NewClass {
    int x, y;

    // 引数無しのコンストラクタ
    NewClass() {
        x = y = 0;
    }
    // 引数無しのコンストラクタ
    NewClass(int x, int y) {
        this.x = x;
        this.y = y;
    }
}`}</Code>
                    <Sub>継承</Sub>
                    <Tx>親クラスのメンバを子クラスに継承することが出来ます。継承にはextendsを利用します。</Tx>
                    <Code lang="java">{`class Parent {
    int x;

    void output() {
        System.out.println(x);
    }
}

class Children extends Parent {
    int y;

    void outputChild() {
        System.out.println(y);
    }
}`}</Code>
                    <Sub>super</Sub>
                    <Tx>superは親クラスを指します。親クラスのコンストラクタや関数を明示的に呼び出す場合はsuperを利用します。</Tx>
                    <Code lang="java">{`class Parent {
    int x;

    Parent(int x0) {
        x = x0;
    }

    void output() {
        System.out.println(x);
    }
}

class Children extends Parent {
    int y;

    Children(int x0, int y0) {
        // 親クラスのコンストラクタの呼び出し
        super(x0);
        y = y0;
    }

    void outputChild() {
        // 親クラスのメソッドの呼び出し
        super.output();
        System.out.println(y);
    }
}`}</Code>
                    <Sub>オーバーライド</Sub>
                    <Tx>親クラスので定義した関数をサブクラスで再定義することをオーバーライドと呼びます。{`@Override`}アノテーションの直下でオーバーライドを行なえば、
                        不正なオーバーライドをコンパイル時に検出できます。
                    </Tx>
                    <Code lang="java">{`class Parent {
    void output() {
        System.out.println("This is Parent");
    }
}

class Children extends Parent {
    @Override
    void output() {
        System.out.println("This is Children");
    }
}`}</Code>
                    <Sub>static演算子</Sub>
                    <Tx>static演算子を付けたメンバはインスタンス化されていない状態でアクセスすることが出来ます。
                        thisやインスタンス変数は使用せず、クラス名.メンバで直接アクセスします。
                        特にstaticフィールドはどのクラスやインスタンスからアクセスしても同じ値を共有することになります。
                    </Tx>
                    <Code lang="java">{`class NewClass {
    static int x = 10;

    void echo() {
        System.out.println(NewClass.x);
    }

    static void hello() {
        System.out.println("hello");
    }
}

public class Sample {
    public static void main(String[] args) {
        NewClass.hello();

        NewClass ob1 = new NewClass();
        ob1.echo();
        // 10
        NewClass.x += 10;
        // 20
        ob1.echo();

        NewClass ob2 = new NewClass();
        ob2.echo();
        // 20
        // 値はob1と共有
    }
}`}</Code>
                </Sec>
            </Contents>
        </>
    )
}
