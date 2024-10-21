"use client"
import { useState } from "react"
import styles from "@/css/global.module.css"

export default function TafSearch({ TagList, TagNow, setTagNow }) {
    const [searchBoxOn, setSearchBoxOn] = useState("OFF")
    console.log(TagList)

    let TagButton = TagList.map((element) => {
        return <div style={{ height: "fit-content", border: "2px solid black", cursor: "pointer", padding: "10px 10px", alignContent: "center", lineHeight: "30px", fontSize: "30px", marginRight: "40px", borderRadius: "10px" }} onClick={() => { setTagNow(element); setSearchBoxOn("SELECT") }} key={`tagButton${element}`}># {element}</div>
    }
    )
    TagButton.unshift(<div style={{ height: "fit-content", border: "2px solid black", cursor: "pointer", padding: "10px 10px", alignContent: "center", lineHeight: "30px", fontSize: "30px", marginRight: "40px", borderRadius: "10px" }} onClick={() => { setTagNow("all"); setSearchBoxOn("SELECT") }} key={`tagButtonall`}>ALL</div>)

    return (
        <>
            <div className={styles.searchTag} style={{ height: searchBoxOn === "ON" ? `500px` : "50px", width: searchBoxOn === "ON" ? "90vw" : "100px", border: "solid 2px black", backgroundColor: "white", position: "absolute", right: "5%", top: "20px", zIndex: "999", borderRadius: "5px", transition: searchBoxOn === "SELECT" ? "0s" : "all 0.3s", overflow: "hidden" }}>
                <div style={{ height: "50px", width: "100px", borderRadius: "5px", position: "absolute", right: "0", cursor: "pointer", textAlign: "center", alignContent: "center" }} onClick={() => searchBoxOn === "ON" ? setSearchBoxOn("OFF") : setSearchBoxOn("ON")}>
                    <p style={{ fontWeight: "bold", fontSize: "20px", userSelect: "none" }}>{searchBoxOn === "ON" ? "× 閉じる" : "タグ検索"}</p>
                </div>
                <div style={{ position: "absolute", height: "50px", right: "0", width: "90vw", pointerEvents: "none", textAlign: "center", alignContent: "center", fontSize: "25px", fontWeight: "bold" }}>タグをクリックして絞り込み</div>
                <div style={{ display: "flex", padding: "20px", width: "90vw", height: "450px", flexWrap: "wrap", position: "absolute", right: "0", top: "50px", overflowY: searchBoxOn === "ON" ? `scroll` : "hidden" }}>
                    {TagButton}
                </div>
            </div >
        </>
    )
}