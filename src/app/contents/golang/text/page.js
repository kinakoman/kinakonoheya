import Contents from '@/components/contents/Contents'
import Sec from '@/components/study/Sec'
import Sub from '@/components/study/Sub'
import Tx from '@/components/study/Tx'
import Code from '@/components/study/Code'
import Toc from "@/components/contents/Toc"
import Abstruct from "@/contents/golang/text/_sections/Abstruct"
import MainMethod from "@/contents/golang/text/_sections/MainMethod"
import Array from "@/contents/golang/text/_sections/Array"
import ControlFlow from "@/contents/golang/text/_sections/ControlFlow"
import Function from "@/contents/golang/text/_sections/Function"


export const data = {
    title: "【Go入門学習】",
    tag: ["Go"],
    date: ["2024", "11", "09"],
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
                <Array />
                <ControlFlow />
                <Function />
            </Contents>
        </>
    )
}
