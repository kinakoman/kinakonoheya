import Meta from '@/components/Meta'
import PageContents from '@/components/contents/PageContents'
import PageSection from '@/components/contents/PageSection'
import PageText from '@/components/contents/PageText'
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
            <PageContents title={data.title}>
                <PageSection title="サブセクションがサブセクション">
                    <PageText>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                    </PageText>
                    <CodeBox lang={"javascript"} comment={コードの例}>{`console.log("test")`}</CodeBox>
                </PageSection>
            </PageContents>
        </>
    )
}
