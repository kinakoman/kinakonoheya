import styles from '@/css/global.module.css'

export default function pageContents({ data, children }) {
    const dateSet = data.latest == undefined ? data.date : data.latest
    return (
        <div className={`${styles.contents} target-toc`} >
            <h1 className={styles.contentsTitle}>{data.title}</h1>
            <div className={styles.DataOfPage}>
                <div style={{ display: 'flex', alignItems: "center", marginTop: "10px" }}>
                    {data.tag.map((element) => { return <div key={`tagofpage${element}`} className={styles.tag} style={{ fontSize: "20px", lineHeight: "20px" }}># {element}</div> })}
                </div>
                <div className={styles.DateOfPage}>最終更新日:{dateSet[0]}年{dateSet[1]}月{dateSet[2]}日</div>
            </div>
            {children}
        </div>
    )
}