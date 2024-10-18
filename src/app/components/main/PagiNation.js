import style from "@/css/global.module.css"
function setPagiNation(pageNum, pageNow, setPageNow) {
    return [...Array(pageNum)].map((_, index) => {
        return (<div key={"pagination" + index} onClick={() => setPageNow(index + 1)} className={`${style.paginationList} ${(index + 1) === pageNow ? style.On : ''}`}>{index + 1}</div>)
    })
}
export default function PagiNation({ pageNow, setPageNow, listSize }) {
    const pageNum = Math.ceil(listSize / 10)
    return (
        <>
            <div className={style.pagination}>
                {setPagiNation(pageNum, pageNow, setPageNow)}
            </div>
        </>
    )
}