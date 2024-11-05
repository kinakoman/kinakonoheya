import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '../../../components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '../../../components/contents/CodeBox'
import CodeIn from '../../../components/contents/CodeIn'
import LinkIn from '../../../components/contents/LinkIn'
import ImageSet from '../../../components/contents/ImageSet'
import image1 from "./image1.jpg"

export const data = {
    title: "UbuntuでのC/C++環境構築",
    tag: ["C言語", "C++", "Ubuntu"],
    date: ["2024", "10", "22"],
    latest: ["2024", "10", "24"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Section title={"はじめに"}>
                    <Text>この記事ではUbuntuでのC言語、C++の実行環境の構築方法について紹介します。</Text>
                </Section>
                <Section title={"コンパイラのインストール"}></Section>
                <Text>C/C++はコンパイラ言語であり、コードを機械語にコンパイルするコンパイラが必要になります。今回は、C言語のコンパイラとして
                    gccを、C++のコンパイラとしてg++をインストールします。
                </Text>
                <CodeBox lang={"shell"} comment={"gccのインストール"}>{`~$ sudo apt install gcc`}</CodeBox>
                <CodeBox lang={"shell"} comment={"g++のインストール"}>{`~$ sudo apt install g++`}</CodeBox>
                <Text>実行環境の構築はこれで完了です。</Text>
                <Section title={"VS Codeのセッティング"}>
                    <Text> C/C++の拡張機能をインストールします。</Text>
                    <ImageSet alt="C/C++の拡張機能" height={200} width={600} image={image1} />
                </Section>
                <Section title="コマンドラインでの実行">
                    <Text>コマンドラインで実行してみます。今回はC言語を例に実行してみます。</Text>
                    <SubSection>.cファイルの作成</SubSection>
                    <CodeBox lang={"c"} comment={"sample/sample.c"}>{`#include <stdio.h>

int main(int argc, char const *argv[])
{
    printf("Hello,World\\n");
    return 0;
}`}</CodeBox>
                    <SubSection>.cファイルの実行</SubSection>
                    <Text>コマンドラインでコンパイルを行います。C++ではgccをg++に置き換えることでコンパイルが出来ます。</Text>
                    <CodeBox lang={"shell"} comment={".cファイルのコンパイル"}>{`sample$ gcc sample.c`}</CodeBox>
                    <Text>コンパイルを行うと実行ファイルである<CodeIn>a.out</CodeIn>が生成されます。これを実行すれば処理が行われます。</Text>
                    <CodeBox lang={"shell"} comment={"処理の実行"}>{`sample$ ./a.out
Hello,World`}</CodeBox>
                </Section>
                {/* <Section title="セクションタイトル">
                    <SubSection>サブセクションタイトル</SubSection>
                    <Text>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        <CodeIn>
                            {`console.log`}
                        </CodeIn>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                    </Text>
                    <LinkIn link={"PythonInstall"} title={"ページのタイトルページのタイトルページのタイトル"}></LinkIn>
                    <CodeBox lang={"javascript"} comment={"コードの例"}>{`console.log("test")`}</CodeBox>
                    <ImageSet alt="テスト画像" height={200} width={200} image={image} />
                </Section> */}
            </Contents>
        </>
    )
}
