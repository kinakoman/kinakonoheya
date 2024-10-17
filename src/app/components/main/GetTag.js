import style from "@/css/global.module.css"

export default function GetTag({ link, tags }) {
    return (
        <div className={style.tagBox}>
            {tags.map((tag) => {
                return <div className={style.tag} key={`${link + tag}`}>{`# ${tag}`}</div>
            })}
        </div>
    )
}