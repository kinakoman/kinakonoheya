import Meta from '@/components/Meta'
import PageContents from '@/components/contents/PageContents'
import PageSection from '@/components/contents/PageSection'
import PageText from '@/components/contents/PageText'

export const data = {
    title: "これはタイトル",
    tag: ["a", "b", "c", "e"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <PageContents title={data.title}>
                <PageSection title="サブセクションがサブセクション">
                    <PageText>本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト</PageText>
                    <PageText>本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト</PageText>
                </PageSection>
                <PageSection title="サブセクションがサブセクション">
                    <PageText>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                    </PageText>
                </PageSection>
            </PageContents>
        </>
    )
}