import Meta from '@/components/Meta'
import PageContents from '@/components/PageContents'
import PageSection from '@/components/PageSection'
import PageText from '@/components/PageText'

export default function test() {
    return (
        <>
            <Meta title="フォルダです" />
            <PageContents title="タイトルのタイトルがタイトルタイトルのタイトルがタイトル">
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