import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
            <Sec title="コレクション">
                <Sub>コレクションとは</Sub>
                <Tx>コレクションは配列などのオブジェクトの集合を扱う処理が定義され仕組みを指します。
                    コレクションにはListやSetなどのインターフェースが実装されており、各インターフェースに固有クラスとメソッドが実装されています。
                    コレクションの型定義はジェネリックが採用されています。コレクションのクラスを利用するには標準クラスのインポートが必要です。({`java.util.*`}の形でインポートするとすべてのクラスが自動インポートされます。)
                </Tx>
                <Sub>Listインターフェース</Sub>
                <Tx>ListインターフェースにはArrayListとLinkedListのクラスが実装されています。両者はほとんど同じですがメソッドごとに処理速度が異なっています。</Tx>
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