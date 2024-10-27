import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '../../components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '../../components/contents/CodeBox'
import CodeIn from '../../components/contents/CodeIn'
import LinkIn from '../../components/contents/LinkIn'
import ImageSet from '../../components/contents/ImageSet'
import image from "../../icon.png"

export const data = {
    title: "forEachとmap・filter・find",
    tag: ["JavaScript"],
    date: ["2024", "10", "27"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>この記事ではJavaScriptの繰り返しメソッドであるforEachと、配列の固有メソッドであるmap・filter・findの使い分けを紹介します。</Text>
                </Section>
                <Section title="forEach">
                    <Text>for文を使って配列のサイズ数だけ繰り返し実行を行う場合以下のような記述になります。</Text>
                    <CodeBox lang={"javascript"} comment={"for文"}>{`const array = ["a", "b", "c", "d"]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
// 出力結果
// a
// b
// c
// d`}</CodeBox>
                    <Text>forEachでは次のように書き換えることが出来ます。</Text>
                    <CodeBox lang={"javascript"} comment={"forEachでの書き換え"}>{`array.forEach((element, index) => {
    console.log(element + index)
});
// 出力結果
// a0
// b1
// c2
// d3`}</CodeBox>
                    <Text>forEachではelementを用いて各繰り返しにおける配列の要素、indexでその要素の番号を利用することが出来ます。
                        単純に配列の数だけ繰り返し実行を行う場合はfor文よりforEachの方が便利です。
                    </Text>
                    <Text>forEachはreturnでの戻り値は基本的になく、またbreakやcontinueなどの繰り返しの中断処理も利用できません。</Text>

                </Section>
                <Section title="map関数">
                    <Text>map関数はforEachと同様に配列数だけ繰り返し実行が出来ます。</Text>
                    <CodeBox lang={"javascript"} comment={"map関数の繰り返し"}>{`const array = ["a", "b", "c", "d"]
const newArray = array.map((element, index) => console.log(element + index))
// 出力結果
// a0
// b1
// c2
// d3
console.log(newArray)
// 出力結果
// [ undefined, undefined, undefined, undefined ]`}</CodeBox>
                    <Text>map関数でもelementとindexで配列の要素にアクセスすることが出来ます。</Text>
                    <Text>また、map関数は返り値を持ち、繰り返し実行の結果が配列として出力されます。</Text>
                    <CodeBox lang={"javascript"} comment={"map関数の返り値"}>{`const array = ["a", "b", "c", "d"]
const newArray = array.map((element, index) => element + index)
console.log(newArray)
// 出力結果
// [ 'a0', 'b1', 'c2', 'd3' ]`}</CodeBox>
                    <Text>配列の要素を書き換えたりする場合はmap関数を使用した方が便利です。</Text>
                </Section>
                <Section title="filter・find関数">
                    <SubSection>filter関数</SubSection>
                    <Text>filter関数は、配列の要素のうち条件に一致する要素を新しい配列として取り出すことが出来ます。</Text>
                    <CodeBox lang={"javascript"} comment={"filter関数"}>{`const array = [
    { name: "tanaka", class: "A" },
    { name: "yamanaka", class: "B" },
    { name: "suzuki", class: "A" },
    { name: "hirano", class: "C" }
]
const filterArray = array.filter((element) => element.class === "A")
console.log(filterArray)
// 出力結果
// [ { name: 'tanaka', class: 'A' }, { name: 'suzuki', class: 'A' } ]`}</CodeBox>
                    <Text>returnに条件式を書くことで、その条件に一致する要素を新しい配列に加えていきます。</Text>
                    <SubSection>find関数</SubSection>
                    <Text>find関数はfilter関数と同様に配列の要素から条件に一致する要素を取り出すことが出来ます。</Text>
                    <CodeBox lang={"javascript"} comment={"find関数"}>{`const array = [
    { name: "tanaka", class: "A" },
    { name: "yamanaka", class: "B" },
    { name: "suzuki", class: "A" },
    { name: "hirano", class: "C" }
]
const findResult = array.find((element) => element.class === "A")
console.log(findResult)
// 出力結果
// { name: 'tanaka', class: 'A' }`}</CodeBox>
                    <Text>find関数はfilter関数と異なり、返り値は配列ではなく条件と一致した要素そのものです。要素の先頭から最初に条件に一致した
                        要素が返ってきます。上の例では{`"suzuki"`}は返ってきません。
                    </Text>
                    <Text>find関数はfor文でbreakを利用する時の書き換えとして利用できます。</Text>
                    <CodeBox lang={"javascript"} comment={"for文のbreak"}>{`const array = [
    { name: "tanaka", class: "A" },
    { name: "yamanaka", class: "B" },
    { name: "suzuki", class: "A" },
    { name: "hirano", class: "C" }
]
let findResult = null
for (let i = 0; i < array.length; i++) {
    if (array[i].class === "A") {
        findResult = array[i]
        break
    }
}
console.log(findResult)
// 出力結果
// { name: 'tanaka', class: 'A' }`}</CodeBox>
                    <Text>for文でも同様の出力が可能ですがfindを利用した方が簡単であることがわかると思います。</Text>
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
