"use client"

import style from "@/css/global.module.css"
import PagiNation from "./PagiNation"
import GetDate from "./GetDate"
import GetTag from "./GetTag"
import GetTitle from "./GetTitle"
import { useState, useEffect } from "react"
import TagSearch from "./TagSearch"
import SubList from "./SubList"

export default function LinkSet({ linkArr, TagList }) {
    const [pageNow, setPageNow] = useState(1)
    const [tagNow, setTagNow] = useState("all")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pageNow])

    // サブコンテンツ用のリンクリスト
    let subLink = linkArr.concat()

    // タグフィルター
    if (tagNow !== "all") {
        linkArr = linkArr.filter(function (element) {
            return element.tag.includes(tagNow)
        })
    }
    TagList = TagList.filter(function (element) {
        return element !== "tag" && element !== "tag2"
    })



    return (
        <>
            <div className={style.container}>
                <div className={style.subList}>
                    <SubList linkArr={subLink}></SubList>
                </div>
                <div className={style.mainListCotainer}>
                    <div className={style.mainList}>
                        <div style={{ position: "relative", width: "100%", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", marginInline: "auto" }}>
                            <div style={{ fontSize: "30px", fontWeight: "bold" }}>記事一覧</div>
                        </div>
                        <TagSearch TagList={TagList} tagNow={tagNow} setTagNow={setTagNow} setPageNow={setPageNow} pageNum={linkArr.length} pageNow={pageNow}></TagSearch>
                        <ul className={style.list}>
                            {listOn(linkArr, pageNow)}
                        </ul>
                        <PagiNation pageNow={pageNow} setPageNow={setPageNow} listSize={linkArr.length} />
                    </div>
                </div>
            </div>
        </>
    )
}

function listOn(linkArr, pageNow) {
    const startIndex = (pageNow - 1) * 10;
    const endIndex = Math.min(startIndex + 10, linkArr.length);
    const sliedLink = linkArr.slice(startIndex, endIndex)
    const links = sliedLink.map((element) => {
        return (
            <li className={style.listLink} key={element.link}>
                <GetTitle link={element.link} title={element.title}>
                    <GetTag link={element.link} tags={element.tag} />
                    <GetDate date={element.date} />
                </GetTitle>
            </li>
        )
    })

    return links

}