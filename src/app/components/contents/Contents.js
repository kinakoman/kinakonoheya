import styles from '@/css/global.module.css'

export default function pageContents({ data, children }) {
    return (
        <div className={styles.contents}>
            <h1 className={styles.contentsTitle}>{data.title}</h1>
            <div style={{ display: "flex" }}>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    {data.tag.map((element) => { return <div key={`tagofpage${element}`} className={styles.tag} style={{ height: "fit-content" }}># {element}</div> })}
                </div>
                <div style={{ margin: "0 0 0 auto", opacity: "0.5", fontSize: "20px" }}>最終更新日:{data.date[0]}年{data.date[1]}月{data.date[2]}日</div>
            </div>
            {children}
        </div>
    )
}