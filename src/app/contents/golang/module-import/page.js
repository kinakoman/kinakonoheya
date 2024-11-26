import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'

export const data = {
    title: "Go言語もインポートのモジュール",
    tag: ["Go"],
    date: ["2024", "11", "27"],
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
                    <Text>この記事ではGo言語でのモジュールの作成とインポートの方法についてまとめます。</Text>
                </Section>
                <Section title="Goのモジュールとgo mod">
                    <SubSection>モジュールとインポート</SubSection>
                    <Text>Go言語でも他のプログラミング言語と同様にプログラムをモジュール化し、他のファイルにインポートして実行することが出来ます。</Text>
                    <Text>多くの言語ではディレクトリ構成に応じた相対パスでインポートを記述しますが、
                        Goのモジュール相対パスではなく絶対パス記述で行います。</Text>
                    <Text>さらに、多くのモジュールは外部モジュールとして公開しているものをインポートします。</Text>
                    <SubSection>go mod</SubSection>
                    <Text>go modコマンドはモジュールが必要としている外部モジュールの依存関係を整理するコマンドです。
                        モジュールとして公開するプロジェクトはgo modで生成されるgo.modで常に依存関係を整理します。
                    </Text>
                </Section>
                <Section title="モジュールの作成と利用">
                    <Text>今回はモジュールを作成して公開し、そのモジュールをサブモジュールとして別のメインモジュールでインポートして利用し、さらにそのメインモジュールをメインファイルで実行します。</Text>
                    <SubSection>package</SubSection>
                    <Text>まずはサブモジュールとして公開するプログラムをローカルで作成します。</Text>
                    <Text>Go言語のモジュールはpackageという単位でまとめられます。packageはgoファイルの最初に記述します。
                    </Text>
                    <Text>packageは基本的にgoファイルが置かれたディレクトリ名と一致させます。同じディレクトリに属するgoファイルは同じpackageになります。</Text>
                    <SubSection>サブモジュールの作成</SubSection>
                    <Text>それでは、サブモジュールを以下のような構成で作成します。モジュールの中で公開するオブジェクト(定数や関数)はい一文字目を大文字にします。</Text>
                    <CodeBox lang="shell" comment="サブモジュールの構成">{`submodule
    ├── submodule1
    │      └── app.go
    └── submodule2
            ├── app.go
            └── app2.go`}</CodeBox>
                    <CodeBox lang="go" comment="submodule1/app.go">{`package submodule1 //  packageはディレクトリ名と一致させる

import "fmt"

func Func1() { // 1文字目は大文字
	fmt.Println("submodele1/app.goの関数")
}

// 1文字目は大文字
const Text string = "submodele1/app.goの定数"`}</CodeBox>
                    <CodeBox lang="go" comment="submodule2/app.go">{`package submodule2

import "fmt"

func Func2() {
	fmt.Println("submodele2/app.goの関数")
}`}</CodeBox>
                    <CodeBox lang="go" comment="submodule2/app2.go">{`package submodule2

import "fmt"

func Func3() {
	fmt.Println("submodele2/app2.goの関数")
}`}</CodeBox>
                    <SubSection>githubでの公開とgo mod init</SubSection>
                    <Text>まずは、githubのsubmoduleという名前のgithubリポジトリを作成します(git関連の手順に関しては省略します。)。
                    </Text>
                    <Text>次に、submoduleディレクトリで以下のコマンドを実行します。</Text>
                    <CodeBox lang="shell" comment="go mod init">{`/submodule$ go mod init github.com/username/submodule`}</CodeBox>
                    <Text>usenameはgithubのアカウント名になります。コマンドを実行することでgo.modファイルが生成され、このディレクトリがモジュールとして認識されます。</Text>
                    <CodeBox lang="shell" comment="/submodule/go.mod">{`module github.com/username/submodule

go 1.22.1`}</CodeBox>
                    <Text>1行目に記述されているのはモジュールをインポートする際のurlになります(Go言語ではhttps://の部分は記述しません)。
                        このurlに続いてpackage名を記述してインポートすることで公開されているオブジェクトにアクセスできます。
                    </Text>
                    <Text>submoduleディレクトリを作成したリポジトリにプッシュすればサブモジュールの公開は終了です。</Text>
                    <SubSection>メインモジュールの作成</SubSection>
                    <Text>次にメインモジュールを作成します。このモジュール内で先ほど作成したサブモジュールを利用します。</Text>
                    <CodeBox lang="go" comment="mainmodule/mainmodule1/app.go">{`package mainmodule1

import (
	"fmt"

	"github.com/username/submodule/submodule1"
	"github.com/username/submodule/submodule2"
)

func Mainfunc() {
	fmt.Println(submodule1.Text)
	submodule1.Func1()
	submodule2.Func2()
	submodule2.Func3()
}`}</CodeBox>
                    <Text>次に、mainmoduleというgithubリポジトリを作成し、go mod initコマンドを実行します。</Text>
                    <Text>今回はサブモジュールを利用しているため、go.modファイルにモジュールの依存関係を記録する必要があります。</Text>
                    <CodeBox lang="shell" comment="go mod tidy">{`/mainmodule$ go mod tidy`}</CodeBox>
                    <Text>このコマンドで必要なモジュールがインストールされます。</Text>
                    <CodeBox lang="shell" comment="/mainmodule/go.mod">{`module github.com/username/mainmodule

go 1.22.1

require github.com/username/submodule v0.0.0-20241126151143-cca76c49821b`}</CodeBox>
                    <Text>go.modのrequireに記述されているのはそのモジュールが必要としている外部モジュールのパスになります。</Text>
                    <Text>最後にmainmoduleををプッシュして公開します。</Text>
                    <SubSection>mainファイルで実行</SubSection>
                    <Text>mainファイルを作成し、このファイル内でメインモジュールをインポートして実行してみます。</Text>
                    <CodeBox lang="go" comment="main/main.go">{`package main

import "github.com/username/mainmodule/mainmodule1"

func main() {
	mainmodule1.Mainfunc()
}`}</CodeBox>
                    <Text>mainファイルはモジュール化しませんがgo modコマンドで依存関係を整理します。</Text>
                    <CodeBox lang="shell" comment="依存関係の整理">{`/main$ go mod init main
/main$ go mod tidy`}</CodeBox>
                    <Text>モジュール化しないのでinitで指定するパスは適当で問題ありません。go.modファイルのrequireにはmainmoduleだけでなく、mainmodule内で利用しているsubmoduleも記述されます。
                    </Text>
                    <Text>ではファイルを実行します。</Text>
                    <CodeBox lang="shell" comment="mainファイルの実行">{`/main$ go run main.go
submodele1/app.goの定数
submodele1/app.goの関数
submodele2/app.goの関数
submodele2/app2.goの関数`}</CodeBox>
                    <Text>mainmoduleで定義した関数が実行されていますし、mainmodule内でsubmoduleで定義したオブジェクトが利用できています。</Text>
                    <Text>メインファイルをビルドして実行ファイルを作ることも可能です。この実行ファイルはどこに移動しても常に依存関係を解決した状態で実行できます。</Text>
                    <CodeBox lang="shell" comment="実行ファイルのビルド">{`$ go build
$ ./main
submodele1/app.goの定数
submodele1/app.goの関数
submodele2/app.goの関数
submodele2/app2.goの関数`}</CodeBox>
                </Section>
                {/* <Section title="セクション名">
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
