import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'

export const data = {
    title: "addEventListenerとuseEffect",
    tag: ["React", "JavaScript"],
    date: ["2024", "11", "11"],
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
                    <Text>Reactでオブジェクトにスクロールに応じた処理をさせたくなり、
                        JavaScriptと同様にaddEventListenerｓで記述できるのか調べました。
                        結論としては以下のような記述方法になります。
                    </Text>
                    <CodeBox lang="javascript" comment="スクロールイベントの実装">{`const scrollEvent = () => {
    // スクロール時の処理
}
useEffect(() => {
    window.addEventListener('scroll', scrollEvent)
    return () => {
        window.removeEventListener('scroll', scrollEvent)
    }
}, [])`}</CodeBox>
                    <Text>これで問題なく実装できるのでそれでも良いのですが、なぜわざわざuseEffectを利用しなければならないのか疑問に思ったのでまとめました。</Text>
                </Section>
                <Section title="JSでのイベント処理">
                    <Text>JavaScriptではaddEventListenerを利用することでクリックやスクロールに応じた処理を実装できます。
                        次のコードはクリックイベントのコード例です。htmlファイルに読み込む等してテストできます。
                    </Text>
                    <CodeBox lang="javascript" comment="addEventListener">{`window.addEventListener('click', () => console.log("click!"))`}</CodeBox>
                    <SubSection>イベントの重複</SubSection>
                    <Text>addEventListenerは{`"イベント"`}を{`"追加"`}するので単純に同じ記述を繰り返せば処理が重複してしまいます。</Text>
                    <CodeBox lang="javascript" comment="イベントの重複">{`window.addEventListener('click', () => console.log("click!"))
window.addEventListener('click', () => console.log("click!"))
// クリック一回で"click!"が2回出力`}</CodeBox>
                    <SubSection>重複の解消</SubSection>
                    <Text>イベントの重複は2種類のアプローチで解決できます。</Text>
                    <Text>一つ目はイベント処理の関数化です。addEventListenerは同じ記述を繰り返しても、同名の関数を追加しようとした場合2回目以降の追加は無視されます。</Text>
                    <CodeBox lang="javascript" comment="関数化で対処">{`const clickEvent = () => {
console.log("click")
}
window.addEventListener('click', clickEvent)
window.addEventListener('click', clickEvent)
// クリック一回で"click!"が1回出力`}</CodeBox>
                    <Text>二つ目はremoveEventListenerの利用です。addEventListenerと反対で処理の削除を行うことが出来ます。
                        removeを利用すればイベントの管理が容易に行えます。
                    </Text>
                    <CodeBox lang="javascript" comment="removeEventListener">{`window.addEventListener('click', clickEvent)
window.removeEventListener('click', clickEvent)
// クリック一回で"click!"が0回出力`}</CodeBox>
                </Section>
                <Section title="Reactにおけるイベント処理">
                    <Text>話をReactに戻します。Reactにおいても重複は問題です。さらに、コンポーネントにイベントを紐づける場合、
                        そのコンポーネントがレンダリングされた時にイベント処理が追加され、それ以外ではイベントが発生しないのが理想です。
                    </Text>
                    <SubSection>レンダリングによる重複</SubSection>
                    <Text>addEventListenerは同名関数を引数に持てば処理の重複はされません。しかし、Reactではこのルールが適用されません。この原因がレンダリングの仕様です。</Text>
                    <Text>コンポーネントがレンダリングされるとそのファイル内の記述が実行され、再レンダリングのたびにさらに実行されることになります。
                        コンポーネントの中にaddEventListenerがあればレンダリングのたびに実行されますが、この時に追加される関数は(記述上は当然同名ですが)別関数として扱われます。
                        すなわち、再レンダリングのたびにイベントが重複していくことになります。
                    </Text>
                    <Text>レンダリングのサイクルから逃げるためにexport default 関数の外にaddEventListenerを記述してみます。一見重複の問題が解決したように思えますが、
                        コンポーネントがアンマウントされても(ページ遷移などで消えても)イベント処理が残り続けてしまいます。
                    </Text>
                    <Text>以上のことから、イベント処理はレンダリング時に追加され、再レンダリング直前(アンマウント時)に削除されることが理想です。</Text>
                    <SubSection>useEffectの利用</SubSection>
                    <Text>useEffect関数は第二引数に指定して変数と連動させる形で関数内の処理の実行が可能です。</Text>
                    <Text>第二引数に何も指定しない場合はレンダリング時に必ず一回処理を行います。さらに、
                        returun内に処理の記述を行うと、コンポーネントがアンマウントされた時に処理が実行されます。
                    </Text>
                    <Text>よって、useEffectに第二引数の指定なしでaddEventListenerを記述し、
                        return内にremoveEventListenerを記述することでイベント処理の要求を満たすことが出来ます。
                    </Text>
                    <Text>これが、Reactにおいてイベント処理にuseEffectが利用されている理由です。</Text>
                    <CodeBox lang="javascript" comment="useEffectを利用">{`// 処理を行う関数
const scrollEvent = () => {
    // スクロール時の処理
    console.log("test")
}
useEffect(() => {
    // レンダリング時に一回実行
    // イベントを追加
    window.addEventListener('click', scrollEvent)
    // アンマウント時に一回実行
    return () => {
        // イベントの削除
        window.removeEventListener('click', scrollEvent)
    }
}, [])`}</CodeBox>
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
