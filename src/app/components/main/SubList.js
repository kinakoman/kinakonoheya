import { v4 as uuidv4 } from "uuid"
import Link from "next/link"
import styles from "@/css/global.module.css"


export default function SubList({ linkArr }) {
    let sortedArr = linkArr.concat()
    sortedArr = sortedArr.sort((a, b) => {
        const adate = a.latestInt ? a.latestInt : a.dateInt
        const bdate = b.latestInt ? b.latestInt : b.dateInt
        return bdate - adate
    })
    sortedArr = sortedArr.slice(0, 5)
    return (
        <>
            <div className={styles.contentsField}>
                <div style={title}>最近の更新</div>
                {sortedArr.map((element) => {
                    let dateInt = element.latestInt ? element.latestInt : element.dateInt
                    return (
                        <div key={uuidv4()} className={styles.subListLink}>
                            <Link href={element.link} className={styles.subListLinkName}>
                                {element.title}
                                <div style={{ fontSize: "14px", width: "fit-content", position: "absolute", top: "100%", right: "0", translate: "0 -100%", opacity: "0.5" }}>
                                    {dateInt.toString().slice(0, 4)}年{dateInt.toString().slice(4, 6)}月{dateInt.toString().slice(6, 8)}日更新!!
                                </div>
                            </Link>

                        </div>
                    )
                })}
            </div>
            <div className={styles.contentsField} >
                <div style={title}>プログラミングの基礎学習</div>
                {
                    textList.map((element) => {
                        return (
                            <div key={uuidv4()} className={styles.subListLink}>
                                <Link href={`contents/${element.link}/text`} className={styles.subListLinkName}>{element.title}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}

const textList = [
    { title: "Python", link: "python" },
    { title: "Java", link: "java" },
    { title: "C言語", link: "c-lang" },
    { title: "C++", link: "c-plus" },
    { title: "Go言語", link: "golang" }

]

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
    translate: "-50% -120%",
    fontWeight: "bold"
}