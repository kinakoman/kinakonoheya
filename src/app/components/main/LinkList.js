import fs from "fs"
import path from "path"
import style from "@/css/global.module.css"
import GetTitle from "./GetTitle"
import GetTag from "./GetTag"

export default async function getStaticProps() {

    const directory = path.join(process.cwd(), 'src', 'app', 'contents')
    const folders = fs.readdirSync(directory)
    let allTag = []

    const linkArr = await Promise.all(folders.map(async (element) => {
        const Pagemodule = await import(`../../contents/${element}/page.js`)
        const pageTitle = Pagemodule.data.title
        const pageTag = [...Pagemodule.data.tag]
        allTag = [...allTag, ...pageTag]
        return (
            <li className={style.listLink} key={`${element}`}>
                <GetTitle link={element} title={pageTitle}>
                    <GetTag link={element} tags={pageTag} />
                </GetTitle>
            </li>
        )
    }))

    const tagList = [...new Set(allTag)]
    const listSize = linkArr.length
    console.log(listSize)

    return (
        <ul className={style.list} >
            {linkArr}
        </ul>
    )

}