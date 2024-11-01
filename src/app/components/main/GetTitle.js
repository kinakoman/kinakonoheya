import style from "@/css/global.module.css"

export default function GetTitle({ link, title, children }) {
    return (
        <div>
            <a className={style.linkBox} href={`${link}`}>{title}
                {children}</a>
        </div>
    )
}