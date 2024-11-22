import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'

export const data = {
    title: "UbuntuでのTypeScript環境構築",
    tag: ["TypeScript", "Ubuntu"],
    date: ["2024", "11", "22"],
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
                    <Text>この記事ではTypeScriptのアプリケーション開発環境構築についてまとめています。
                        実行環境はLinuxOSのUbuntuを想定しています。
                    </Text>
                </Section>
                <Section title="TypeScriptとは">
                    <Text>TypeScriptはJavaScriptを拡張した言語です。JavaScriptとは異なり、動的な型付けではなくコンパイル時の静的な型付けを採用しています。
                        また、JavaScriptにはないインターフェースの概念も実装されています。
                    </Text>
                    <Text>TypeScriptファイル(拡張子ts)はJavaScriptファイル(拡張子js)にコンパイルされます。
                        コンパイル後は通常のjsファイルと同様にブラウザ上あるいはNode.jsを用いて実行します。</Text>
                    <Text>TypeScriptの環境構築はtsファイルをjsファイルにコンパイルする環境を構築することになります。</Text>
                </Section>
                <Section title="環境構築">
                    <SubSection>Node.jsのインストール</SubSection>
                    <Text>jsファイル実行の前提となるNode.jsをインストールします。Node.jsのインストールについては以下の記事でまとめています。
                    </Text>
                    <LinkIn link="javascript/node-setup" title="Node.jsのインストール方法"></LinkIn>
                    <Text>npm、npxコマンドが実行できることを確認します。</Text>
                    <CodeBox lang="shell" comment="npm、npxの確認">{`$ npm -v
10.9.0
$ npx -v
10.9.0`}</CodeBox>
                    <SubSection>ディレクトリの作成</SubSection>
                    <Text>TypeScriptのプロジェクトディレクトリを作成して移動します。</Text>
                    <CodeBox lang="shell" comment="プロジェクトの作成">{`$ mkdir sample
$ cd ./sample/
/sample$`}</CodeBox>
                    <SubSection>プロジェクトの初期化</SubSection>
                    <Text>プロジェクトの初期化を行います。package.jsonファイルが生成されます。</Text>
                    <CodeBox lang="shell" comment="プロジェクトの初期化">{`/sample$ npm init --yes
/sample$ cat package.json
{
  "name": "sample",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}`}</CodeBox>
                    <SubSection>TypeScriptのインストール</SubSection>
                    <Text>プロジェクトにTypeScriptをインストールします。--save-devオプションを指定することでOS全体のグローバルインストールではなくプロジェクトのみへのインストールになります。</Text>
                    <CodeBox lang="shell" comment="TypeScriptのインストール">{`/sample$ npm install --seve-dev typescript @types/node

added 3 packages, and audited 4 packages in 2s

found 0 vulnerabilities
/sample$ ls -a
.  ..  node_modules  package-lock.json  package.json`}</CodeBox>
                    <Text>TypeScriptの実行に必要なモジュール類がインストールされます。</Text>
                    <SubSection>tsconfig.jsonの設定</SubSection>
                    <Text>プロジェクトディレクトリで以下のコマンドを実行します。</Text>
                    <CodeBox lang="shell" comment="tsc init">{`/sample$ npx tsc --init`}</CodeBox>
                    <Text>生成されたtsconfig.jsonを以下のように編集します。</Text>
                    <CodeBox lang="json" comment="sample/tsconfig.json">{`{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": [
    "./src/**/*.ts"
  ]
}`}</CodeBox>
                    <Text>以上で環境構築は完了です。</Text>
                </Section>
                <Section title="tsファイルの実行">
                    <SubSection>tsファイルの作成</SubSection>
                    <Text>プロジェクトディレクトリにsrcディレクトリを作成し、index.tsファイルを作成します。</Text>
                    <CodeBox lang="typescript" comment="sample/src/index.ts">{`const message: string = "Hello,world";
console.log(message);`}</CodeBox>
                    <SubSection>コンパイル</SubSection>
                    <Text>tsファイルをコンパイルします。</Text>
                    <CodeBox lang="shell" comment="コンパイルの実行">{`/sample$ npx tsc
/sample$ ls
dist  node_modules  package-lock.json  package.json  src  tsconfig.json`}</CodeBox>
                    <Text>distディレクトリが生成されコンパイル後のindex.jsファイルが生成されています。</Text>
                    <SubSection>jsファイルの実行</SubSection>
                    <Text>コンパイルしたjsファイルを実行します。</Text>
                    <CodeBox lang="shell" comment="jsファイルの実行">{`/sample$ node dist/index.js
Hello,world`}</CodeBox>
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
