import style from "@/css/global.module.css"
export default function GetDate({ date }) {
    return (
        <>
            <p className={style.date}>公開日:{date[0]}年{date[1]}月{date[2]}日</p>
        </>
    )
}