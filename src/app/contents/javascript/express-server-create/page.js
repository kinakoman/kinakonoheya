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
    date: ["2024", "12", "05"],
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
                <Section title="ミドルウェアの設定">
                    <SubSection>use関数</SubSection>
                    <Text>ミドルウェアは簡単に言えばどのリクエストを受け取った時にも実行される処理のことです。expressのuse関数はミドルウェアを作成するための関数です。</Text>
                    <Text>簡単なミドルウェアを設計して実行してみます。</Text>
                    <CodeBox lang="javascript" comment="sample-api/server.js">{`const express = require("express")
const app = express()
const PORT = 5000

const data = [
    { name: "Yamada", age: "24" },
    { name: "Suzuki", age: "32" },
    { name: "Tanaka", age: "50" },
]

// これもミドルウェア
app.use(express.json());

// ミドルウェアの処理
app.use((req, res, next) => {
    console.log(req.method)  // リクエストのメソッドを表示
    console.log("catch http request")
    next()  // 次の処理への移行
})

app.get("/", (req, res) => {
    res.status(200).send(data)
})

app.post("/", (req, res) => {
    data.push(req.body)
    res.status(200).send(data)
})

app.listen(PORT, () => console.log("activate server"))`}</CodeBox>
                    <CodeBox lang="python" comment="client.py">{`import requests
import json

url="http://localhost:5000/" 

res=requests.get(url)
print(res.status_code)
res=requests.post(url)
print(res.status_code)`}</CodeBox>
                    <CodeBox lang="shell" comment="client.pyの実行結果">{`$ python3 client.py
200
200`}</CodeBox>
                    <Text>httpリクエストに成功し、statusコードを取得できていることが分かります。また、サーバーのターミナル出力には以下のように表示されているはずです。</Text>
                    <CodeBox lang="shell" comment="サーバーのターミナル出力">{`GET
catch http request
POST
catch http request`}</CodeBox>
                    <Text>client.pyからのhttpリクエストのメソッドに関わらず、ミドルウェアの処理が行われているのが分かります。</Text>
                    <Text>use関数の第三引き数で受け取れるnext関数は、ミドルウェアから次の処理に移行するのに必要な関数で、これを記述しなければそのミドルウェア以降の処理は行われません。</Text>
                    <Text>{`app.use(express.json())`}でnext関数を記述しなくても次の処理に移行できているのはjson関数の中で暗黙的にnext関数が呼び出されているためです。
                    </Text>
                    <Text>また、ミドルウェアは記述の順番が非常に重要です。例えば、レスポンスのsend関数などは実行された段階でレスポンス処理を終了するため、
                        上の例でuse関数の前にget関数を記述するとgetリクエストの時はミドルウェアが呼び出されなくなります。</Text>
                    <SubSection>jsonの識別処理</SubSection>
                    <Text>ミドルウェアを利用してpostリクエストで送信されるjsonデータの識別処理を行ってみます。
                        送信されるjsonデータのキーとserver.js側のデータのキーが一致しなかった場合エラー処理を行うようにします。
                    </Text>
                    <CodeBox lang="javascript" comment="sample-api/server.js">{`const express = require("express")
const app = express()
const PORT = 5000

// サーバー側のデータ
const data = [
    { name: "Yamada", age: "24" }
]

app.use(express.json());

// ミドルウェアの処理
app.use((req, res, next) => {
    // POSTリクエストならデータの識別処理
    if (req.method == "POST") {
        // サーバー側データとリクエストデータのキーを取得
        const dataKeys = Object.keys(data[0])
        const reqKeys = Object.keys(req.body)
        // キーの長さが一致しリクエストの全てのキーがデータに含まれていれば完全一致
        if (dataKeys.length == reqKeys.length &&
            dataKeys.every(key => reqKeys.includes(key))) {
            // リクエストデータをサーバー側データに追加
            data.push(req.body)
            // 次の処理へ
            next()
        }
        // キーが一致していない時の処理
        else {
            res.status(401).send({ message: "key is not correct" })
        }
    }
    // POSTリクエスト以外は次の処理へ
    else {
        next()
    }
})

app.get("/", (req, res) => {
    res.status(200).send(data)
})

app.post("/", (req, res) => {
    res.status(200).send(data)
})

app.listen(PORT, () => console.log("activate server"))`}</CodeBox>
                    <CodeBox lang="python" comment="client.py">{`import requests
import json

url="http://localhost:5000/" 
header={
    "Content-Type":"application/json"
}

data1={  # キーが正しい
    "name":"Yamamoto",
    "age":"28",
}
res1=requests.post(url,data=json.dumps(data1),headers=header)
print(res1.json())

data2={  # キーが誤り
    "Name":"Yamamoto",
    "age":"28",
}
res2=requests.post(url,data=json.dumps(data2),headers=header)
print(res2.json())

data3={  # 一致しないキーを含む
    "name":"Yamamoto",
    "age":"28",
    "from":"Osaka"
}
res3=requests.post(url,data=json.dumps(data3),headers=header)
print(res3.json())

getRes=requests.get(url)
print(getRes.json())`}</CodeBox>
                    <CodeBox lang="shell" comment="実行結果">{`$ python3 client.py
[{'name': 'Yamada', 'age': '24'}, {'name': 'Yamamoto', 'age': '28'}]
{'message': 'key is not correct'}
{'message': 'key is not correct'}
[{'name': 'Yamada', 'age': '24'}, {'name': 'Yamamoto', 'age': '28'}]`}</CodeBox>
                    <Text>postリクエストではjsonデータのキー識別が成功し、getリクエスト(postリクエスト以外)の処理も問題なく実行されていることが分かります。</Text>
                    <SubSection>認証システム</SubSection>
                    <Text>ミドルウェアを利用してhttpリクエストに認証システムを設定してみます。</Text>
                    <Text>server.js側では認証のパスワードとなるtokenを設定し、
                        リクエストのheadersのAuthorizationがtokenと一致していれば次の処理に回し、不一致ならエラーのレスポンスを返すミドルウェアを記述します。</Text>
                    <Text>client側ではheaderのAuthorizationにサーバーのtokenを設定すれば認証に成功します。</Text>
                    <CodeBox lang="javascript" comment="sample-api/server.js">{`const express = require("express")
const app = express()
const PORT = 5000

const data = [
    { name: "Yamada", age: "24" }
]
// サーバーの認証token
const authPass = "api-auth-password"

app.use(express.json());

// 認証ミドルウェア
app.use((req, res, next) => {
    // リクエストのauthorizationがtokenと一致していれば次の処理へ
    if (req.headers["authorization"] === authPass) {
        next()
    }
    // tokenが不一致なら認証失敗のレスポンスを返す
    else {
        res.status(401).send({ message: "Authorization failed" })
    }
})

// データ認識ミドルウェア
app.use((req, res, next) => {
    if (req.method == "POST") {
        const dataKeys = Object.keys(data[0])
        const reqKeys = Object.keys(req.body)
        if (dataKeys.length == reqKeys.length &&
            dataKeys.every(key => reqKeys.includes(key))) {
            data.push(req.body)
            next()
        }
        else {
            res.status(401).send({ message: "key is not correct" })
        }
    }
    else {
        next()
    }
})

app.get("/", (req, res) => {
    res.status(200).send(data)
})

app.post("/", (req, res) => {
    res.status(200).send(data)
})

app.listen(PORT, () => console.log("activate server"))`}</CodeBox>
                    <CodeBox lang="python" comment="client.py">{`import requests

url="http://localhost:5000/" 

header={
    "Content-Type":"application/json",
    # Authorizationに認証用tokenを指定
    "Authorization":"api-auth-password"
}
res=requests.get(url,headers=header)
print(res.json())

header_miss={
    "Content-Type":"application/json",
    # 認証用tokenが間違い
    "Authorization":"api-auth-password-miss"
}
res_miss=requests.get(url,headers=header_miss)
print(res_miss.json())`}</CodeBox>
                    <CodeBox lang="shell" comment="実効結果">{`$ python3 client.py
[{'name': 'Yamada', 'age': '24'}]
{'message': 'Authorization failed'}`}</CodeBox>
                    <Text>tokenが正しい場合はhttpリクエストが成功し、間違いの場合はエラーがレスポンスされています。</Text>
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
