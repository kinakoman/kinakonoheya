import fs from "fs"
import path from "path"
import LinkSet from "./LinkSet"

const contentsList = ["typescript", "next", "javascript", "python", "git", "golang", "c-lang", "global", "react", "c-plus", "docker", "java"]

export default async function getStaticProps() {
    // const allFolders = []
    let allTag = []
    let linkArr = []
    await Promise.all(contentsList.map(async (element) => {
        const scopeFolder = element
        const directory = path.join(process.cwd(), 'src', 'app', 'contents', scopeFolder)
        const folders = fs.readdirSync(directory)

        let scopeArr = await Promise.all(folders.map(async (element) => {
            const Pagemodule = await import(`../../contents/${scopeFolder}/${element}/page.js`)
            allTag = [...allTag, ...Pagemodule.data.tag]
            return (
                {
                    link: `contents/${scopeFolder}/${element}`,
                    title: Pagemodule.data.title,
                    tag: [...Pagemodule.data.tag],
                    date: [...Pagemodule.data.date],
                    dateInt: parseInt(Pagemodule.data.date[0] + Pagemodule.data.date[1] + Pagemodule.data.date[2]),
                    latestInt: Pagemodule.data.latest ? parseInt(Pagemodule.data.latest[0] + Pagemodule.data.latest[1] + Pagemodule.data.latest[2]) : 0,
                }
            )
        }))

        linkArr.push(...scopeArr)
    }))

    linkArr.reverse()
    linkArr = linkArr.filter(function (element) {
        return !/_/.test(element.link)
    })

    linkArr.sort((a, b) => { return b.dateInt - a.dateInt })
    let TagList = [...new Set(allTag)]
    TagList.sort()

    return (
        <>
            <LinkSet linkArr={linkArr} TagList={TagList} />
        </>
    )

}
