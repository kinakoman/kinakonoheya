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

                </Sec>
            </Contents>
        </>
    )
}
