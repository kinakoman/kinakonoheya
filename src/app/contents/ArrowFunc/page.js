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
    title: "アロー関数とfunctionの違い",
    tag: ["JavaScript"],
    date: ["2024", "10", "27"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>JavaScriptで関数を宣言する場合、functionとアロー関数の2つを利用することが出来ます。単に関数を実行するだけなら
                        この2つに違いはありませんが、記述方法に若干の違いがあります。この記事ではfunctionとアロー関数の記述の違いについてまとめます。
                    </Text>
                </Section>
                <Section title="function">
                    <Text>functionの使い方は以下の通りです。</Text>
                    <CodeBox lang={"javascript"} comment={"functionの使い方"}>{`const calcAverage = function (num1, num2) {
    return (num1 + num2) / 2
}
const average = calcAverage(10, 20)
console.log(average)
// 出力結果
// 15`}</CodeBox>
                    <Text>()で引数を指定し、returnで返り値を出力できます。</Text>
                </Section>
                <Section title="アロー関数">
                    <Text>アロー関数ではfunctionの代わりに{`=>`}を利用します。
                    </Text>
                    <CodeBox lang={"javascript"} comment={"アロー関数の使い方"}>{`const calcAverage = (num1, num2) => {
    return (num1 + num2) / 2
}
const average = calcAverage(10, 20)
console.log(average)
// 出力結果
// 15`}</CodeBox>
                    <Text>アロー関数は記述の省略が可能です。</Text>
                    <Text>関数内の記述が一行の場合は{`{}`}を省略できます。さらに、それが返り値の場合はreturnの省略も可能です。</Text>
                    <CodeBox lang={"javascript"} comment={"関数内の省略"}>{`const outPut = () => console.log("output")
outPut()
// 出力結果
// output
const sum = (num1, num2) => num1 + num2
console.log(sum(2, 4))
// 出力結果
// 6`}</CodeBox>
                    <Text>引数が1つの場合は引数の{`()`}も省略できます。引数が無い場合は{`()=>`}で記述します。</Text>
                    <CodeBox lang={"javascript"} comment={"()の省略"}>{`const pow = num => num * num
console.log(pow(2))
// 出力結果
// 4`}</CodeBox>
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
