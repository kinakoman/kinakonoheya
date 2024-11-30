import { v4 as uuidv4 } from "uuid"
import Link from "next/link"
import styles from "@/css/global.module.css"
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark"
export default function SubList({ linkArr }) {
    let sortedArr = linkArr.concat()
    sortedArr = sortedArr.sort((a, b) => {
        const adate = a.latestInt ? a.latestInt : a.dateInt
        const bdate = b.latestInt ? b.latestInt : b.dateInt
        return bdate - adate
    })
    sortedArr = sortedArr.slice(0, 5)
    console.log(sortedArr)
    return (
        <div style={contetsField}>
            <div style={title}>最近の更新</div>
            {sortedArr.map((element) => {
                return (
                    <div key={uuidv4()} className={styles.subListLink}>
                        <Link href={element.link} className={styles.subListLinkName}>{element.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}

const contetsField = {
    position: "relative",
    marginInline: "auto",
    marginTop: "120px",
    width: "90%",
    borderRadius: "5px",
    padding: "15px",
    backgroundColor: "white",
    // border: "2px solid rgba(0, 0, 0, 0.2)",
}

const title = {
    width: "100%",
    height: "40px",
    fontSize: "24px",
    // backgroundColor: "blue",
    textAlign: "center",
    alignContent: "center",
    position: "absolute",
    top: "0",
    left: "50%",
    translate: "-50% -100%",
    fontWeight: "bold"
}

// const lists = {
//     height: "40px",
//     // fontSize: "14px"
//     alignContent: "center"
// }