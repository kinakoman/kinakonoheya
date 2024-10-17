"use client"

import style from "@/css/global.module.css"
import PagiNation from "./PagiNation"
import { useState, useEffect } from "react"

export default function Test({ linkArr }) {
    const [pageNow, setPageNow] = useState(1)
    const [currentList, setCurrentList] = useState([])

    useEffect(() => {
        setCurrentList(listOn(linkArr, pageNow))
        console.log(pageNow)
    }, [pageNow, linkArr])

    return (
        <>
            <PagiNation pageNow={pageNow} setPageNow={setPageNow} listSize={linkArr.length} />
            <ul className={style.list}>
                {currentList}
            </ul>

        </>
    )
}

function listOn(linkArr, pageNow) {
    let listOnView = []
    // const startIndex = pageNow
    // listOnView = linkArr[11]

    const startIndex = (pageNow - 1) * 10;
    const endIndex = Math.min(startIndex + 10, linkArr.length);
    for (let i = startIndex; i < endIndex && i < linkArr.length; i++) {
        listOnView = [...listOnView, linkArr[i]]
    }


    return listOnView
}