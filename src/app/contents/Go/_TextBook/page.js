import Contents from '@/components/contents/Contents'
import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"

export const data = {
    title: "【Go入門学習】",
    tag: ["Go"],
    date: ["2024", "11", "08"],
    // latest: ["9999", "99", "99"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Toc />
                <Sec title="概要"></Sec>
            </Contents>
        </>
    )
}
