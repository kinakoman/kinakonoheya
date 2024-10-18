"use client"

import style from "@/css/global.module.css"
import PagiNation from "./PagiNation"
import GetDate from "./GetDate"
import GetTag from "./GetTag"
import GetTitle from "./GetTitle"
import { useState, useEffect } from "react"

export default function LinkSet({ linkArr }) {
    const [pageNow, setPageNow] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pageNow])

    return (
        <>
            <ul className={style.list}>
                {listOn(linkArr, pageNow)}
            </ul>
            <PagiNation pageNow={pageNow} setPageNow={setPageNow} listSize={linkArr.length} />
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