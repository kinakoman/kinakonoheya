"use client"
import { useState } from "react"
import styles from "@/css/global.module.css"

export default function TafSearch({ TagList, TagNow, setTagNow, setPageNow, pageNum, pageNow }) {
    const [searchBoxOn, setSearchBoxOn] = useState("OFF")

    let TagButton = TagList.map((element) => {
        return <div style={{ height: "fit-content", border: "2px solid rgba(0,0,0,0.5)", cursor: "pointer", padding: "10px 10px", alignContent: "center", lineHeight: "30px", fontSize: "30px", marginRight: "40px", borderRadius: "10px" }} onClick={() => { setTagNow(element); setSearchBoxOn("SELECT"); setPageNow(1) }} key={`tagButton${element}`}># {element}</div>
    }
    )
    TagButton.unshift(<div style={{ height: "fit-content", border: "2px solid rgba(0,0,0,0.5)", cursor: "pointer", padding: "10px 10px", alignContent: "center", lineHeight: "30px", fontSize: "30px", marginRight: "40px", borderRadius: "10px" }} onClick={() => { setTagNow("all"); setSearchBoxOn("SELECT"); setPageNow(1) }} key={`tagButtonall`}>ALL</div>)

    return (
        <>
            <div className={styles.searchTag} style={{ height: searchBoxOn === "ON" ? `500px` : "50px", width: searchBoxOn === "ON" ? "calc(1280px * 0.9)" : "100px", border: "solid 2px #76D9FF", backgroundColor: "white", position: "absolute", right: "0", top: "calc(50px - 25px)", zIndex: "999", borderRadius: "5px", transition: searchBoxOn === "SELECT" ? "0s" : "all 0.2s ease-in-out", overflow: "hidden" }}>
                <div style={{ height: "50px", width: "100px", borderRadius: "5px", position: "absolute", right: "0", cursor: "pointer", textAlign: "center", alignContent: "center" }} onClick={() => searchBoxOn === "ON" ? setSearchBoxOn("OFF") : setSearchBoxOn("ON")}>
                    <p style={{ fontWeight: "bold", fontSize: "20px", userSelect: "none" }}>{searchBoxOn === "ON" ? "× 閉じる" : "タグ検索"}</p>
                </div>
                <div style={{ position: "absolute", height: "50px", right: "0", width: "calc(1280px * 0.9)", pointerEvents: "none", textAlign: "center", alignContent: "center", fontSize: "25px", fontWeight: "bold" }}>タグをクリックして絞り込み</div>
                <div style={{ alignContent: "space-evenly", display: "flex", padding: "20px 70px", width: "calc(1280px * 0.9)", height: "450px", flexWrap: "wrap", gap: "20px", position: "absolute", right: "0", top: "50px", overflowY: searchBoxOn === "ON" ? `scroll` : "hidden" }}>
                    {TagButton}
                </div>
            </div >
        </>
    )
}