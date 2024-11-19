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
                    <Tx>変数はデータ型を指定して宣言します。</Tx>
                </Sec>
            </Contents>
        </>
    )
}
