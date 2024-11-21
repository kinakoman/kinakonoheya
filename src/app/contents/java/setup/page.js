import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'
import image1 from "./image1.jpg"

export const data = {
    title: "UbuntuでのJava環境構築",
    tag: ["Java", "Ubuntu"],
    date: ["2024", "11", "19"],
    // latest: ["9999", "99", "99"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>Javaはオブジェクト指向プログラミング言語で、OSに依存しないプログラムの実行が可能です。
                        この記事ではJavaの開発環境構築と実行方法についてまとめます。
                    </Text>
                    <Text>この記事ではLinuxOSのUbuntuで作業を行います。</Text>
                </Section>
                <Section title="JDK・JRE・JVM">
                    <Text>Javaの環境構築ではJDK(Java Development Kit)、JRE(Java Runtime Envitonment)、JVM(Java Virtual Machine)が重要なキーワードになります。</Text>
                    <Text>JDKはJavaの環境環境を指し、Javaファイルのコンパイル等を行う環境を提供します。JDKでコンパイルを行うと、機械語ではなくJavaバイトコードと呼ばれる中間言語が生成されます。</Text>
                    <Text>JREはJavaの実行環境を指し、JDKの開発環境の中に含まれます。基本的にはJavaバイトコードを実行することになりますが、最近のバージョンではJavaファイルを直接実行することも可能です。
                    </Text>
                    <Text>JVMはJREに実装された仮想マシンです。JVMはJavaバイトコードを機械語に変換します。JVMを利用するJavaではOSに依存しないプログラム実行が可能になっています。</Text>
                    <Text>環境構築ではJDKをインストールすればJREも同時にインストールされます。</Text>
                    <Text>また、JDKにはオープンソースのOpenJDKと有料ライセンスが必要なOracleJDKがあります。今回は無料で利用できるOpenJDKをインストールします。</Text>
                </Section>
                <Section title="OpenJDKのインストール">
                    <SubSection>aptのアップデート</SubSection>
                    <Text>まずaptのアップデートを行います。</Text>
                    <CodeBox lang="shell" comment="aptのアップデート">{`$ sudo apt update`}</CodeBox>
                    <SubSection>オープンJDKの確認</SubSection>
                    <Text>以下のコマンドでインストール可能なOpenJDKのバージョンを確認します。</Text>
                    <CodeBox lang="shell" comment="OpenJDKの確認">{`$ apt-cache search openjdk`}</CodeBox>
                    <Text>OpenJDKのバージョンがリストで表示されます。今回はバージョン21をインストールします。</Text>
                    <SubSection>インストール</SubSection>
                    <Text>OpenJDKをインストールします。</Text>
                    <CodeBox lang="shell" comment="OpenJDKのインストール">{`$ sudo apt install openjdk-21-jdk`}</CodeBox>
                    <SubSection>JREとJDKのバージョン確認</SubSection>
                    <Text>JREはjavaコマンドで、JDKはjavacコマンドで管理します。バージョン確認を行い現在のバージョンが表示されれば正しくインストールされています。</Text>
                    <CodeBox lang="shell" comment="バージョンの確認">{`$ java --version
openjdk 21.0.5 2024-10-15
OpenJDK Runtime Environment (build 21.0.5+11-Ubuntu-1ubuntu122.04)
OpenJDK 64-Bit Server VM (build 21.0.5+11-Ubuntu-1ubuntu122.04, mixed mode, sharing)
$ javac --version
javac 21.0.5`}</CodeBox>
                    <SubSection>バージョンの変更</SubSection>
                    <Text>複数のバージョンのJDK、JREをインストールしていた場合バージョン変更を行うことも可能です。</Text>
                    <Text>以下のコマンドでインストール済みのバージョンを表示します。(javaも同様)</Text>
                    <CodeBox lang="shell" comment="インストール済みjavacの確認">{`$ update-alternatives --list javac
/usr/lib/jvm/java-11-openjdk-amd64/bin/javac
/usr/lib/jvm/java-21-openjdk-amd64/bin/javac`}</CodeBox>
                    <Text>上の例ではバージョン21と11がインストールされています。次のコマンドでバージョンを選択できます。</Text>
                    <CodeBox lang="shell" comment="バージョン変更">{`$ sudo update-alternatives --config javac
There are 2 choices for the alternative javac (providing /usr/bin/javac).

  Selection    Path                                          Priority   Status
------------------------------------------------------------
* 0            /usr/lib/jvm/java-21-openjdk-amd64/bin/javac   2111      auto mode
  1            /usr/lib/jvm/java-11-openjdk-amd64/bin/javac   1111      manual mode
  2            /usr/lib/jvm/java-21-openjdk-amd64/bin/javac   2111      manual mode

Press <enter> to keep the current choice[*], or type selection number: 1
update-alternatives: using /usr/lib/jvm/java-11-openjdk-amd64/bin/javac to provide /usr/bin/javac (javac) in manual mode
$ javac --version
javac 11.0.25`}</CodeBox>
                    <Text>対話形式でバージョン変更が可能です。</Text>
                </Section>
                <Section title="VS Codeのセッティング">
                    <Text>Extension Pack for Javaの拡張機能をインストールします。</Text>
                    <ImageSet alt="Javaの拡張機能" height={200} width={600} image={image1} />
                </Section>
                <Section title="Javaファイルの実行">
                    <SubSection>Javaファイルの作成</SubSection>
                    <CodeBox lang="java" comment="Sample.java">{`class Sample {
    public static void main(String[] args) {
        System.out.println("Hello World!!");
    }
}`}</CodeBox>
                    <SubSection>javacでコンパイル</SubSection>
                    <Text>javacコマンドでコンパイルを行います。拡張子が{`.class`}の実行ファイルが生成されます。</Text>
                    <CodeBox lang="shell" comment="コンパイル">{`$ javac Sample.java
$ ls
Sample.class  Sample.java`}</CodeBox>
                    <SubSection>javaコマンドで実行</SubSection>
                    <Text>javaコマンドで{`.class`}ファイルを実行します。拡張子無しのファイル名のみで指定します。</Text>
                    <CodeBox lang="shell" comment="プログラムの実行">{`$ java Sample
Hello,World`}</CodeBox>
                    <Text>最近のバージョンでのJREではjavaコマンドで直接Javaファイルを実行できます。(実行速度は遅くなります。)</Text>
                    <CodeBox lang="shell" comment="プログラムの実行">{`$ java Sample.java
Hello,World`}</CodeBox>
                </Section>
            </Contents>
        </>
    )
}
