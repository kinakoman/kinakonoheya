
import Link from "next/link"
export default function LinkIn({ link, title }) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    return (
        <div style={{ height: "60px", width: "100%", border: "solid 2px", borderColor: "rgba(0,0,0,0.5)", borderRadius: "10px", marginTop: "10px", position: "relative", display: "flex", padding: "0 20px", overflow: "hidden", }}>
            <a href={`${basePath}/contents/${link}`} style={{ display: "block", height: "100%", width: "100%", position: "absolute" }}>
                <div style={{ height: "20px", width: "60px", backgroundColor: "#00aaff", position: "absolute", left: "0px", borderRadius: "0 0 5px 5px", textAlign: "center", alignContent: "center", color: "white", fontWeight: "bold" }}>リンク</div>
                <p style={{ width: "100%", height: "30px", overflow: "hidden", whiteSpace: "nowrap", fontSize: "20px", position: "absolute", bottom: "8px" }}>
                    {title}
                </p>
            </a>
        </div>
        // <a href={`/contents/${link}`}>{title}</a>
    )
}