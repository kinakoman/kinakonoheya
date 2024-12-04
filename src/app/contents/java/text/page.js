import Contents from '@/components/contents/Contents'
import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
import Abstruct from "@/contents/java/text/_sections/Abstruct"
import MainMethod from "@/contents/java/text/_sections/MainMethod"
import Class from "@/contents/java/text/_sections/Class"
import Interface from "@/contents/java/text/_sections/Interface"
import Collection from "@/contents/java/text/_sections/Collection"


export const data = {
    title: "【Java入門学習】",
    tag: ["Java"],
    date: ["2024", "11", "20"],
    latest: ["2024", "11", "22"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Toc />
                <Abstruct />
                <MainMethod />
                <Class />
                <Interface />
                <Collection />
                <Sec title="packageとimport">
                    <Sub>Javaにおけるimport</Sub>
                    <Tx>Javaでは別のファイルで定義したクラスをimportしてインスタンスを生成することが可能です。
                        Javaにおけるimportはmainファイルの中でサブファイルで定義したクラスのインスタンスを生成できる状態にすることを指します。
                    </Tx>
                    <Sub>package</Sub>
                    <Tx>packageはクラスのグループを指します。サブファイルの最初にそのファイルが属するpackageを明記します。
                        ディレクトリ構成が以下の場合のSub1、Sub2のpackageを示します。
                    </Tx>
                    <Code lang="shell" tab="ディレクトリ構成">{`main
├── Main.java
└── pkg1
        ├── Sub1.java
        └── pkg2
                └── Sub2.java`}</Code>
                    <Code lang="java" tab="Sub1.java">{`package pkg1;`}</Code>
                    <Code lang="java" tab="Sub2.java">{`package pkg1.pkg2;`}</Code>
                    <Sub>import</Sub>
                    <Tx>サブファイルをメインファイルにインポートする際は、package.ファイル名の形で行います。
                        同一パッケージからであればインポート無しでインスタンスを生成できます。
                    </Tx>
                    <Code lang="java" tab="Main.java">{`import pkg1.Sub1;
import pkg1.pkg2.Sub2;
`}</Code>
                    <Sub>インスタンスの生成</Sub>
                    <Tx>サブファイルをインポートするとサブファイルで定義したクラスのインスタンスが生成できます。
                        サブファイルのクラス名は必ずファイル名と一致させます。
                    </Tx>
                    <Code lang="java" tab="Sub1.java">{`package pkg1;

public class Sub1 {
    public void hello() {
        System.out.println("Hello from Sub1");
    }
}`}</Code>
                    <Code lang="java" tab="Sub2.java">{`package pkg1.pkg2;

public class Sub2 {
    public void hello() {
        System.out.println("Hello from Sub2");
    }
}`}</Code>
                    <Code lang="java" tab="Main.java">{`import pkg1.Sub1;
import pkg1.pkg2.Sub2;

class Main {
    public static void main(String[] args) {
        Sub1 ob1 = new Sub1();
        Sub2 ob2 = new Sub2();
        ob1.hello();
        // Hello from Sub1
        ob2.hello();
        // Hello from Sub2
    }
}`}</Code>
                    <Sub>アクセス演算子</Sub>
                    <Tx>public演算子がついたクラス、メンバはインポート先(異なるpackage下)でも自由にアクセス可能です。
                        インポート先でインスタンスを生成するクラスにはサブファイル側でpublicを指定します。
                        publicを指定できるクラスは1つのサブファイルで1つまでです。publicが付いたクラスはファイル名と名前が一致する必要があります。
                        privateは演算子のメンバは自クラスからのみアクセス可能です。
                    </Tx>
                    <Code lang="java" tab="Sub1.java">{`package pkg1;

public class Sub1 {
    private int x;
    public int y;

    public void setX(int x) {
        this.x = x;
    }

    public int getX() {
        return this.x;
    }
}`}</Code>
                    <Code lang="java" tab="Main.java">{`import pkg1.Sub1;

class Main {
    public static void main(String[] args) {
        Sub1 ob1 = new Sub1();
        ob1.y = 10; // publicフィールドはアクセス可能
        // ob1.x=10; // アクセス不可でエラー

        ob1.setX(10);
        System.out.println(ob1.getX());
        // 10
    }
}`}</Code>
                    <Sub>protected演算子</Sub>
                    <Tx>protected演算子が付いたメンバは自クラスおよびサブクラスからのみアクセスを受け付けます。</Tx>
                    <Code lang="java" tab="Sub1.java">{`package pkg1;

public class Sub1 {
    private int x = 10;
    public int y = 20;
    protected int z = 30;
}`}</Code>
                    <Code lang="java" tab="Main.java">{`import pkg1.Sub1;

class NewSub extends Sub1 {
    void echo() {
        // System.out.println(super.x); // アクセス不可でエラー
        System.out.println(super.y);
        System.out.println(super.z);
    }
}

class Main {
    public static void main(String[] args) {
        NewSub ob1 = new NewSub();
        ob1.echo();
        // 20
        // 30

        // ob1.z=100; //protected演算子も外部からのアクセスは不可
    }
}`}</Code>
                    <Tx>同一パッケージ内(同一ファイル内)ではprotected演算子はpublic演算子と同じ扱いです。</Tx>
                    <Code lang="java" tab="Main2.java">{`package main;

public class Main2 {
    protected int y = 10;
}`}</Code>
                    <Code lang="java" tab="Main.java">{`package main;

class Main {
    public static void main(String[] args) {
        Main2 ob = new Main2();
        System.err.println(ob.y);
        // 10 // protected演算子はアクセス可能
    }
}`}</Code>
                </Sec>
            </Contents>
        </>
    )
}
