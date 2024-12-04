import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
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
                <Sub>public,private演算子</Sub>
                <Tx>public演算子が付いたメンバはクラス外から自由にアクセスが可能です。
                    private演算子はクラス内部からのアクセスしか受け付けません。private演算子はサブクラスからのアクセスも不可です。
                </Tx>
                <Code lang="java">{`class NewClass {
    public int x = 10;
    private int y = 20;
}

public class Sample {
    public static void main(String[] args) {
        NewClass ob = new NewClass();
        System.out.println(ob.x);
        // 10
        // System.out.println(ob.y);
        // アクセス不可でエラー
    }
}`}</Code>
                <Sub>カプセル化</Sub>
                <Tx>privateフィールドにアクセスするためにpublicメソッドを定義し、このメソッド経由でのみprivateフィールドにアクセスします。
                    これをカプセル化と呼びます。privateをフィールドの値を変更する関数をセッター、privateフィールドを取得する関数をゲッターと呼ぶ場合もあります。</Tx>
                <Code lang="java">{`class NewClass {
    private int x;

    public void setter(int x) {
        this.x = x;
    }

    public int getter() {
        return this.x;
    }
}

public class Sample {
    public static void main(String[] args) {
        NewClass ob = new NewClass();
        ob.setter(20);
        System.out.println(ob.getter());
        // 20
    }
}`}</Code>
                <Sub>ジェネリック</Sub>
                <Tx>ジェネリックはクラスのメンバの型をインスタンス生成時に指定できる機能です。クラスの定義時にクラス名の横に{`<T>`}を記述し、メンバの型宣言の代わりにTを記述します。
                    インスタンス生成時にはクラス名の横に{`<>`}でデータ型を宣言します。クラス定義時のTがこの時宣言したデータ型として利用できます。
                </Tx>
                <Code lang="java">{`class NewClass<T> {
    private T num;

    public void setter(T x) {
        this.num = x;
    }

    public T getter() {
        return num;
    }
}

public class Main {
    public static void main(String[] args) {
        NewClass<Integer> obj1 = new NewClass<Integer>();
        obj1.setter(20);
        System.out.println(obj1.getter());
        // 20

        // 右辺の<>のデータ型は省略可能
        NewClass<String> obj2 = new NewClass<>();
        obj2.setter("Hello");
        System.out.println(obj2.getter());
        // Hello
    }
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