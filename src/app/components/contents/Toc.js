"use client"
import { useEffect } from "react"
import tocbot from "tocbot"
import styles from "@/css/global.module.css"

export default function Toc() {
    useEffect(() => {
        tocbot.init({
            tocSelector: ".toc", // 目次を追加する class 名
            contentSelector: ".target-toc", // 目次を取得するコンテンツの class 名
            headingSelector: " h2, h3, h4", // 目次として取得する見出しタグ
            // headingsOffset: 100, // 見出しのオフセット
            // scrollSmoothOffset: -40, //スムーススクロールのオフセット
        });

        // 不要となったtocbotインスタンスを削除
        return () => tocbot.destroy();
    }, []);

    return (
        <>
            <div className={styles.section} style={{ marginTop: "20px" }}>
                <div className={styles.sectionTitleStudy} style={{ fontWeight: "bold" }}>目次</div>
            </div>
            <nav className="toc" style={tocStyle} />
        </>
    )
}

const tocStyle = {
    marginTop: "20px",
    height: "fit-content"
    // paddingLeft: "30px"
}