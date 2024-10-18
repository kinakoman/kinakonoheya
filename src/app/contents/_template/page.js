import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import Text from '@/components/contents/Text'
import CodeBox from '../../components/contents/CodeBox'

export const data = {
    title: "ページのタイトルを書きます",
    tag: ["tag", "tag2"],
    date: ["2024", "10", "19"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents title={data.title}>
                <Section title="サブセクションがサブセクション">
                    <Text>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                    </Text>
                    <CodeBox lang={"javascript"} comment={コードの例}>{`console.log("test")`}</CodeBox>
                </Section>
            </Contents>
        </>
    )
}
