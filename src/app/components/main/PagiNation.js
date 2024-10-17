function setPagiNation(pageNum, pageNow, setPageNow) {
    return [...Array(pageNum)].map((_, index) => {
        return (<div key={"pagination" + index} onClick={() => setPageNow(index + 1)}>{index + 1}</div>)
    })
}
export default function PagiNation({ pageNow, setPageNow, listSize }) {
    const pageNum = Math.floor(listSize / 10) + 1
    return (
        <>
            {setPagiNation(pageNum, pageNow, setPageNow)}
            <div>{pageNow}</div>
        </>
    )
}