import fs from "fs"
import path from "path"
import LinkSet from "./LinkSet"

export default async function getStaticProps() {

    const directory = path.join(process.cwd(), 'src', 'app', 'contents')
    const folders = fs.readdirSync(directory)
    let allTag = []

    var linkArr = await Promise.all(folders.map(async (element) => {
        const Pagemodule = await import(`../../contents/${element}/page.js`)
        allTag = [...allTag, ...Pagemodule.data.tag]
        return (
            {
                link: element,
                title: Pagemodule.data.title,
                tag: [...Pagemodule.data.tag],
                date: [...Pagemodule.data.date],
                dateInt: parseInt(Pagemodule.data.date[0] + Pagemodule.data.date[1] + Pagemodule.data.date[2])
            }
        )
    }))
    linkArr = linkArr.filter(function (element) {
        return element.link !== '_template'
    })

    linkArr.sort((a, b) => { return b.dateInt - a.dateInt })
    let TagList = [...new Set(allTag)]

    return (
        <>
            <LinkSet linkArr={linkArr} TagList={TagList} />
        </>
    )

}
