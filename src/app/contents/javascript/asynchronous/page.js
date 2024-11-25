import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'

export const data = {
    title: "JavaScriptの非同期処理",
    tag: ["JavaScript"],
    date: ["2024", "11", "24"],
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
                    <Text>この記事ではJavaScriptの非同期処理の実装に利用されるPromise、async/awaitについてまとめます。</Text>
                </Section>
                <Section title="非同期処理とPromise">
                    <SubSection>非同期処理とは</SubSection>
                    <Text>プログラミングのコードは基本的に上から順に記述されたものを実行します。
                        仮にA⇒B⇒Cの順のプログラムを実行するとした時、Aのプログラムが非常に時間のかかる処理であった場合、その後のB、Cの処理は一切行われません。
                        仮にCがA、Bとは独立した処理であった場合Cの処理が行われないのは無駄な待機になってしまいます。
                    </Text>
                    <Text>そこで、Aをバックグラウンドで処理しつつCの処理を並行して行い、Aが終わり次第Bを実行することでプログラム全体の実行速度を向上させます。
                        これを非同期処理と呼びます。
                    </Text>
                    <SubSection>Promiseとは</SubSection>
                    <Text>PromiseはJavaScriptで非同期処理を実現する機能です。Promiseで記述された処理は非同期処理としてバックグラウンドで実行されることになります。
                        Promiseはオブジェクトであり様々なメソッドや内部状態を持ちます。
                        以下はPromiseの実装例です。
                    </Text>
                    <CodeBox lang="javascript" comment="Promiseの実装">{`function main() {
    // 非同期処理の開始
    new Promise((resolve, reject) => {
        console.log("start A")  // 処理Aの開始(setTimeoutで疑似的に記述)
        setTimeout(() => {
            resolve("complete A");
        }, 3000);
    }).then((res) => {
        console.log(res)
        console.log("start B")  // 処理Aの後にBを開始
    })

    console.log("start C")  // 処理Cの開始
}
main();`}</CodeBox>
                    <CodeBox lang="shell" comment="出力結果">{`start A
start C
complete A
start B`}</CodeBox>
                    <Text>時間のかかるAと同時にCも開始し、Aの処理が終わった後にBを開始できていることが分かります。</Text>
                </Section>
                <Section title="Pomiseの使い方">
                    <SubSection>Promiseの内部状態</SubSection>
                    <Text>PromiseはPending、Fullfilled、Rejectedの3つの内部状態を持ちます。Promiseの処理が実行されると状態はPending(処理中)となり、
                        処理が成功した状態ではFullfilled、失敗した状態ではRejectedとなります。
                    </Text>
                    <CodeBox lang="javascript" comment="Promiseを宣言した直後はpending">{`const stat = new Promise(() => { })
console.log(stat)
// Promise { <pending> }
`}</CodeBox>
                    <Text>このような処理の状態を返すことをPromiseを返すと呼びます。</Text>
                    <SubSection>resolveとreject</SubSection>
                    <Text>resolveはとrejectは処理結果のPromiseを返します。Promiseの処理はresolove、rejectのいずれかが宣言されると処理状態が更新されます。
                        resolveではFullfilled、rejectではrejectedに変化します。
                    </Text>
                    <Text>resolveとrejectを利用するにはPromiseの引数で受け取ります。第一引数にresolve、第二引数にrejectを指定します。</Text>
                    <Text>resolveとrejectが受け取った値はPromise自体の返り値となります。</Text>
                    <SubSection>then</SubSection>
                    <Text>PromiseがFullfilledを返した後の処理は.thenで続けて記述できます。.thenは記述された処理を全て完了すればFullfilledのPromiseを返し、さらに続けてthenを書き続けることが出来ます。
                        resolveは引数に値を持ち、thenは値を引数として受け取ることが出来ます。
                    </Text>
                    <CodeBox lang="javascript" comment="thenの記述">{`const stat = new Promise((resolve) => {
    resolve("complete")
}).then((data) => { // resolveの値をdataとして受け取る
    console.log(data)
    // complete

    return "one more time" // 次のthenへの返り値
}).then((data) => {
    console.log(data)
    // one more time
})`}</CodeBox>
                    <SubSection>catch</SubSection>
                    <Text>PromiseがRejectedを返した後の処理は.catchで続けて記述します。catchはthenとは異なり基本的に記述は一回までです。
                        thenとcatchは両方とも記述することができ、Promiseの結果次第で場合分けして処理を行います。
                    </Text>
                    <CodeBox lang="javascript" comment="catchの記述">{`const stat = new Promise((resolve, reject) => {
    reject("fail")
}).then((data) => { // PromiseがRejectedなので無視される
    console.log(data)
    return "one more time"
}).then((data) => {
    console.log(data)
}).catch((data) => { // rejectの値をdataとして受け取る
    console.error(data)
    // fail
})`}</CodeBox>
                </Section>
                <Section title="Promiseを返す関数">
                    <SubSection>returnにPromise</SubSection>
                    <Text>Promiseを返す関数を作るには、そのまま関数の返り値にPromiseを記述します。
                        Promiseを返す関数はthenやcatchなどPromiseに応じて実行される処理を記述できます。
                    </Text>
                    <CodeBox lang="javascript" comment="Promiseを返す関数">{`function PromiseFunc() {
    console.log("start PromiseFunc method")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("PromiseFunc fullfilled")
        }, 3000);
    })
}

function main() {
    PromiseFunc().then((data) => console.log(data))
}
`}</CodeBox>
                    <Text>上の例では3秒後のPromiseがFullfilledで返される関数を記述しています。</Text>
                    <SubSection>fetch関数</SubSection>
                    <Text>fetch関数はAPIのアクセスなどに利用される関数です。fetch関数もPromiseを返す関数であり、非同期処理の利用が前提となっています。</Text>
                    <Text>以下の例はfetch関数をそのまま記述した失敗例です。fetch関数がFullfilledのPromiseを返す前にdataを表示してしまっているため、
                        正しい情報が表示されません。(今回はjsonplaceholderを利用してします。)
                    </Text>
                    <CodeBox lang="javascript" comment="fetchの失敗例">{`const data = fetch("https://jsonplaceholder.typicode.com/users")
console.log(data)
// Promise { <pending> } // PendingのPromiseが返ってくる`}</CodeBox>
                    <Text>dataを正しく表示するにはthenを使ってfetchがFullfilledを返すのを待ちます。</Text>
                    <CodeBox lang="javascript" comment="正しいfetch">{`const data = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        return res.json(); //.json関数もPromiseを返す
    }).then((res) => {
        console.log(res) // 取得したjsonを表示
    })`}</CodeBox>
                </Section>
                <Section title="async/await">
                    <SubSection>async</SubSection>
                    <Text>asyncは非同期処理を簡素に記述できるキーワードです。asyncが付与された関数は非同期処理となり、Promiseを返すようになります。
                        async関数の戻り値は通常のPromiseでのresolveに返り値を指定する場合と等価になります。
                    </Text>
                    <CodeBox lang="javascript" commen="asyncの使い方">{`async function AsyncFunc() {
    return "complete" // resolve("complete")と等価
}

AsyncFunc().then(data => console.log(data))
// complete`}</CodeBox>
                    <SubSection>await</SubSection>
                    <Text>awaitはasync関数内でのみ利用できます。awaitはPromiseを受け取り、Fullfiiledが返されるまでその処理でストップします。
                        通常のPromiseでthenを連ねる必要がある処理はawaitを用いて簡略化して記述できます。
                    </Text>
                    <CodeBox lang="javascript" comment="awaitの使い方">{`function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("finish delay"); // 3秒後にFullfilledを渡す
        }, 3000);
    })
}

async function AsyncFunc() {
    console.log("start program");
    const data = await delay();
    console.log(data);
    console.log("end program");

    // 上のプログラムと等価
    // console.log("start program");
    // delay().then(data => {
    //     console.log(data)
    //     console.log("end program")
    // })
}

AsyncFunc();`}</CodeBox>
                </Section>
                <Section title="Promise.all">
                    <SubSection>Promise.allの使い方</SubSection>
                    <Text>Promise.allもPromiseを返す処理になりますが、
                        引数には非同期処理で実行する内容ではなく、Promiseを要素に持つ配列を取ります。
                    </Text>
                    <Text>受け取った配列のPromiseが全てFullfilledになるとPromise.allは各Promiseの結果を配列として返します。
                    </Text>
                    <CodeBox lang="javascript" comment="Promise.allの使い方">{`const delay1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("delay1 complete")
    }, 1000);
})
const delay2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("delay2 complete")
    }, 2000);
})
const delay3 = async () => {  // asyncで定義した関数も渡せる
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    })
    return "delay3 complete"
}

// Promiseを要素に持つ配列
const PromiseList = [delay1, delay2, delay3()]

// Promise.allでPromiseを返す関数
function PromiseAll() {
    return Promise.all(PromiseList) // PromiseListを引数に渡す
}
PromiseAll().then(data => console.log(data)) // .thenで処理を続けることも可能`}</CodeBox>
                    <SubSection>map関数を組み合わせる</SubSection>
                    <Text>リストに対してPromiseを返す処理を行う際にはmap関数と組み合わせることで簡潔に記述することが出来ます。</Text>
                    <CodeBox lang="javascript" comment="map関数でPromise配列">{`const list = ["a", "b", "c"]

const PromiseList = list.map(async (element, index) => { // mapメソッドとasyncでPromiseの配列を作成
    const data = await new Promise((resolve, reject) => { // 各要素のPromise処理
        setTimeout(() => {
            resolve(\`complete \${element}\`)
        }, 1000 * index);
    })
    return data // async関数の返り値はresolveと等価
})

const PromiseAll = Promise.all(PromiseList)
PromiseAll.then(data => console.log(data))
// [ 'complete a', 'complete b', 'complete c' ]`}</CodeBox>
                    <Text>さらにまとめて記述すれば以下のようになります。</Text>
                    <CodeBox lang="javascript" comment="mapとPromise.allの組み合わせ">{`const list = ["a", "b", "c"]

const PromiseAll = Promise.all(list.map(async (element, index) => {
    const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(\`complete \${element}\`);
        }, 1000 * index);
    })
    return data;
}))
PromiseAll.then((data) => console.log(data))`}</CodeBox>
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
