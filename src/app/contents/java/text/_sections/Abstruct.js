import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
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