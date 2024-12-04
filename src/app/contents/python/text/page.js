import Contents from '@/components/contents/Contents'
import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
import Abstruct from "@/contents/python/text/_sections/Abstruct"
import Pandas from "@/contents/python/text/_sections/Pandas"
import Numpy from "@/contents/python/text/_sections/Numpy"
import Function from "@/contents/python/text/_sections/Function"
import MainMethod from "@/contents/python/text/_sections/MainMethod"



export const data = {
    title: "【Python入門学習】",
    tag: ["Python"],
    date: ["2024", "11", "04"],
    latest: ["2024", "12", "03"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Toc />
                <Abstruct />
                <MainMethod />
                <Function />
                <Numpy />
                <Pandas />
            </Contents>
        </>
    )
}
