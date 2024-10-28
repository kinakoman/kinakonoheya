import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import Toc from '../../components/contents/Toc'
export const data = {
    title: "ページのタイトルを書きます",
    tag: ["tag", "tag2"],
    date: ["9999", "99", "99"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title="はじめに">
                </Section>
                <Section title="次に"></Section>
            </Contents>
            {/* <Toc /> */}
        </>
    )
}
