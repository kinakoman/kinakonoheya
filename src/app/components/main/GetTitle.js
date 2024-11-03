"use client"
import style from "@/css/global.module.css"
import Link from "next/link"

export default function GetTitle({ link, title, children }) {
    return (
        <div>
            <Link className={style.linkBox} href={`${link}`}>{title}{children}</Link>
        </div>
    )
}