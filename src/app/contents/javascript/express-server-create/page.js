import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'

export const data = {
    title: "Express.jsでサーバー構築",
    tag: ["JavaScript", "Python"],
    date: ["2024", "12", "04"],
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
                    <Text>Express.jsはNode.jsのフレームワークであり、WebアプリケーションやWebAPIのサーバー構築を容易に行うことが出来ます。
                        この記事では、Express.jsを用いてWebAPIのサーバーをローカル上に構築し、さらにPythonのrequestsライブラリを用いて実際にWebAPIにアクセスしてみます。
                    </Text>
                    <Text>実行環境はLunuxOSのUbuntuを想定しています。また、Node.jsのインストールは前提になっています。</Text>
                    <LinkIn link="javascript/node-setup" title="Node.jsのインストール方法"></LinkIn>
                </Section>
                <Section title="Express.jsでサーバー構築">
                    <SubSection>プロジェクトの用意</SubSection>
                    <Text>まずは、プロジェクトのディレクトリとして{`sample-api`}というディレクトリを用意します。
                        このディレクトリ内に移動し、次のコマンドでnodeプロジェクトの初期化を行います。
                    </Text>
                    <CodeBox lang="shell" comment="npmの初期化">{`/sample-api$ npm init -y
Wrote to /home/nozaki/02_Javascript/02_express/sample-api/package.json:

{
  "name": "sample-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}`}</CodeBox>
                    <Text>次にexpressとnodemonのモジュールをインストールします。</Text>
                    <CodeBox lang="shell" comment="モジュールのインポート">{`/sample-api$ npm install express nodemon`}</CodeBox>
                    <Text>package.jsonのdependenciesにインストールしたモジュールが追加されています。nodemonは構築したサーバーの自動更新を行ってくれるモジュールです。
                    </Text>
                    <Text>サーバー起動時のコマンドとして、package.jsonのtestを削除して次のようにdevを追加します。</Text>
                    <CodeBox lang="json" comment="sample-api/package.json">{`{
  "name": "sample-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.21.1",
    "nodemon": "^3.1.7"
  }
}`}</CodeBox>
                    <SubSection>サーバーの起動</SubSection>
                    <Text>server.jsをというファイルを作成、このファイルでサーバーを構築していきます。
                        expressをjsファイルで利用するにはrequire関数を用いてロードした後インスタンス化します。
                    </Text>
                    <CodeBox lang="javascript" comment="sample-api/server.js">{`const express=require("express")  //  expressのロード
const app=express()  //   インスタンス化`}</CodeBox>
                    <Text>以降はappというインスタンスでサーバーの管理をしていきます。</Text>
                    <Text>では、appを用いてサーバーのポートを指定して起動してみます。サーバーを起動して待機状態にするにはlistenという関数を利用します。</Text>
                    <CodeBox lang="javascript" comment="sample-api/server.js">{`const express = require("express")  // expressのロード
const app = express()  //   インスタンス化

const PORT = 5000  //  PORT番号の指定

app.listen(PORT, () => console.log("activate server"))  //  サーバーの起動`}</CodeBox>
                    <Text>コマンドラインからサーバーを起動します。listen関数のconsoleコメントがコマンド上に表示されるはずです。</Text>
                    <CodeBox lang="shell" comment="サーバー起動">{`/sample-api$ npm run dev

> sample-api@1.0.0 dev
> nodemon server.js

[nodemon] 3.1.7
[nodemon] to restart at any time, enter \`rs\`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting \`node server.js\`
activate server`}</CodeBox>
                    <Text>Ctrl+Cでプログラムを停止するまでサーバーは起動状態になります。
                        また、server.jsの内容を更新すると、自動でサーバーの停止と再起動が行われ更新が適用されます。
                    </Text>
                    <SubSection>getリクエストの設定</SubSection>
                    <Text>このサーバーがgetリクエスト受け取った際の処理を記述します。Expressではget関数を利用し、第一引数にgetリクエストのパス、第二引数に処理を記述します。</Text>
                    <CodeBox lang="javascript" comment="sample-api/server.js">{`const express = require("express")  
const app = express()  
const PORT = 5000  

app.get("/", (req, res) => {  //  ルートにアクセスされた時の処理
    res.send("<h1>hello,world</h1>")  //  レスポンスの記述
})

app.listen(PORT, () => console.log("activate server"))  //  listenは最後に記述
`}</CodeBox>
                    <Text>リクエストの処理はreqとresを引数として受け取ります。res.sendでリクエストに対するレスポンスを記述します。</Text>
                    <Text>サーバに対してgetリクエストを送信してみます。getリクエストの最も簡単な方法はブラウザでのアクセスです。
                        ブラウザ上で{`"localhost:5000"`}でアクセスします。
                    </Text>
                    <Text>res.sendで記述したレスポンスが表示されているはずです。</Text>
                    <Text>また、get関数の第一引数のパスを変更することで、リクエスト先のurlを変更して処理を行うこともできます。(ページ遷移のリンクのイメージ)</Text>
                    <CodeBox lang="javascript" comment="sample-api/server.js">{`const express = require("express")
const app = express()
const PORT = 5000

app.get("/", (req, res) => {  //  localhost:5000のリクエスト処理
    res.send("<h1>hello,world</h1>")
})

app.get("/sample", (req, res) => {  //  localhost:5000/sampleのリクエスト処理
    res.send("これはサンプルページ")
})

app.listen(PORT, () => console.log("activate server")) `}</CodeBox>
                    <SubSection>post、putリクエストの設定</SubSection>
                    <Text>postやputはデータの書き換えを依頼するリクエストになります。getリクエストと同様にpost関数とput関数で定義できます。</Text>
                    <CodeBox lang="javascript" comment="sample-api/server.js">{`const express = require("express")
const app = express()
const PORT = 5000

app.get("/", (req, res) => {  //  getリクエストの処理
    res.send({ message: "get request successed" })  //  レスポンスはjson形式
})

app.post("/", (req, res) => {  //  postリクエストの処理
    res.send({ message: "post request successed" })

})

app.put("/", (req, res) => {  //  putリクエストの処理
    res.send({ message: "put request successed" })
})

app.listen(PORT, () => console.log("activate server"))  //  listenは最後に記述`}</CodeBox>
                    <SubSection>Pythonでhttpリクエスト</SubSection>
                    <Text>ブラウザ上からではpostやputのリクエストは送れないのでPythonでhttpリクエストを送ることにします。</Text>
                    <Text>Pythonでhttpリクエストを行うにはrequestsというモジュールを利用するのが一番簡単です。
                        Pythonの仮想環境にrequestsのモジュールをインストールしておきます。(今回はPythonの実行方法などについては省略します。)
                    </Text>
                    <Text>requestsモジュールはget、post、put関数でhttpリクエストを送信できます。requestsを使用してhttpリクエストを送信するプログラムを簡単に記述してみます。</Text>
                    <CodeBox lang="python" comment="client.py">{`import requests

url="http://localhost:5000/"  #  サーバーのurl

response_get=requests.get(url)  #  getリクエスト
print(response_get.json())  #  レスポンスをjson形式で表示

response_post=requests.post(url)  #  postリクエスト
print(response_post.json())

response_put=requests.put(url)  #  putリクエスト
print(response_put.json())
`}</CodeBox>
                    <Text>このプログラムの実行結果は次の通りです。</Text>
                    <CodeBox lang="shell" comment="client.pyでhttpリクエスト">{`$ python3 client.py
{'message': 'get request successed'}
{'message': 'post request successed'}
{'message': 'put request successed'}`}</CodeBox>
                    <Text>サーバー側で定義した各リクエストに対するレスポンスを取得できていることが分かります。</Text>
                </Section>
                <Section title="jsonデータの操作">
                    <Text>server.jsでjson形式のデータを用意し、client.pyからアクセスします。まずはserver.jsの中でjsonデータを用意します。</Text>
                    <CodeBox lang="javascript" comment="jsonデータ">{`const data = [
    { name: "Yamada", age: "24" },
    { name: "Suzuki", age: "32" },
    { name: "Tanaka", age: "50" },
]`}</CodeBox>
                    <SubSection>getリクエスト</SubSection>
                    <Text>getリクエストからserver.jsのjsonデータを取得します。server.jsでgetリクエストに対する処理の中にjsonデータを返すように記述します。</Text>
                    <CodeBox lang="javascript" comment="sample-api/server.js">{`const express = require("express")
const app = express()
const PORT = 5000

// json形式のデータ
const data = [
    { name: "Yamada", age: "24" },
    { name: "Suzuki", age: "32" },
    { name: "Tanaka", age: "50" },
]
// getリクエストの処理
app.get("/", (req, res) => {
    res.status(200).send(data)  //  statusコード200と一緒にdataを渡す
})

app.listen(PORT, () => console.log("activate server"))`}</CodeBox>
                    <Text>client.pyでgetリクエストを送信し、jsonデータを取得します。</Text>
                    <CodeBox lang="python" comment="client.py">{`import requests

url="http://localhost:5000/"  #  サーバーのurl

response_get=requests.get(url)  #  getリクエスト
print(response_get.status_code)  #  statusコードの表示

client_data=response_get.json()  #  レスポンスをjson形式に変換
# jsonデータを表示
print(client_data)
print(client_data[0])
print(client_data[0]["name"])`}</CodeBox>
                    <CodeBox lang="shell" comment="実行結果">{`$ python3 client.py
200
[{'name': 'Yamada', 'age': '24'}, {'name': 'Suzuki', 'age': '32'}, {'name': 'Tanaka', 'age': '50'}]
{'name': 'Yamada', 'age': '24'}
Yamada`}</CodeBox>
                    <Text>getリクエストに成功し、statusコードとjsonデータを取得できていることが分かります。</Text>
                    <SubSection>postリクエスト</SubSection>
                    <Text>client.pyでpostリクエストを送信し、server.jsのデータに追加を行います。</Text>
                    <Text>Pythonでjsonデータを生成するにはjsonモジュールのdumps関数で辞書型データの変換を行います。</Text>
                    <Text>postリクエストの送信にはrequestsのpost関数をします。post関数にはサーバーのurl、送信するjsonデータを引き数として渡し、
                        さらにheadersで送信するデータがjsonであることを明記します。</Text>
                    <Text>server.jsでjsonデータを受け取るためには{`app.use(express.json())`}を宣言する必要があります。この関数はapp.postより先に記述します。
                        post関数内では{`req.body`}で受け取ったデータにアクセスできます。
                    </Text>
                    <Text>では、server.jsでpostリクエストで受け取ったデータを元のデータに追加し、追加後のデータをレスポンスとして返すように記述します。</Text>
                    <CodeBox lang="javascript" comment="sample-api/server.js">{`const express = require("express")
const app = express()
const PORT = 5000

// json形式のデータ
const data = [
    { name: "Yamada", age: "24" },
    { name: "Suzuki", age: "32" },
    { name: "Tanaka", age: "50" },
]

// jsonを解析する関数、httpリクエストの処理を前に記述する
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send(data)
})

// postリクエストの処理
app.post("/", (req, res) => {
    data.push(req.body) //  dataにpostで送信されたデータを追加
    res.status(200).send(data)  // 追加後のdataをレスポンスとして返す
})

app.listen(PORT, () => console.log("activate server"))`}</CodeBox>
                    <CodeBox lang="python" comment="client.py">{`import requests
import json  # モジュールのインポート

url="http://localhost:5000/" 

data={"name":"Yamamoto","age":"28"}  # 辞書型データの用意
json_data=json.dumps(data)  # jsonデータに変換

# headerにjsonを指定する
response=requests.post(url,data=json_data,headers={"Content-Type":"application/json"})

# postリクエストのレスポンスをjson形式で表示
print(response.json())`}</CodeBox>
                    <CodeBox lang="shell" comment="実行結果">{`$ python3 client.py
[{'name': 'Yamada', 'age': '24'}, {'name': 'Suzuki', 'age': '32'}, {'name': 'Tanaka', 'age': '50'}, {'name': 'Yamamoto', 'age': '28'}]`}</CodeBox>
                    <Text>client.pyでレスポンスとして追加更新後のデータが取得できているのが分かります。</Text>
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
