import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
export default function section() {
    return (
        <>
            <Sec title="インターフェース">
                <Sub>インターフェースの宣言</Sub>
                <Tx>インターフェースはクラスが定義すべきメソッドを指定します。インターフェースを継承したクラスはインターフェース内で定義されたメソッドの処理内容を記述しなければエラーとなります。
                    インターフェース内のメソッドは処理内容は記述しません。クラスがインターフェースを継承する際はimplementsを記述します。
                </Tx>
                <Code lang="java">{`interface Base {
    public void hello();
}

class NewClass implements Base {
    public void hello() {
        System.out.println("hello");
    }
}
                    `}</Code>
                <Sub>オーバーライドアノテーション</Sub>
                <Tx>インターフェースで定義されたメソッドの処理をクラス内で記述するとメソッドをオーバーライドしたことになります。
                    アノテーションを記述しておけばエラー対策になります。
                </Tx>
                <Code lang="java">{`class NewClass implements Base {
    @Override
    public void hello() {
        System.out.println("hello");
    }
}`}</Code>
                <Sub>多重継承</Sub>
                <Tx>複数のインターフェースを一つのクラスで継承することが可能です。</Tx>
                <Code lang="java">{`interface Base1 {
    public void hello();
}

interface Base2 {
    public void goodbye();
}

class NewClass implements Base1, Base2 {
    @Override
    public void hello() {
        System.out.println("hello");
    }

    @Override
    public void goodbye() {
        System.out.println("goodbye");
    }
}`}</Code>
                <Sub>インターフェースの継承</Sub>
                <Tx>クラスと同様にインターフェースも継承が可能です。implements後のクラスでは継承元のいインターフェースメソッドも記述しなければエラーになります。</Tx>
                <Code lang="java">{`interface Base1 {
    public void hello();
}

interface Base2 extends Base1 {
    public void goodbye();
}`}</Code>
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