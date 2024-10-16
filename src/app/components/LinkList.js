import fs from "fs"
import path from "path"

export default async function getStaticProps() {

    const directory = path.join(process.cwd(), 'src', 'app', 'contents')
    const folders = fs.readdirSync(directory)

    const linkArr = await Promise.all(folders.map(async (element) => {
        const Pagemodule = await import(`../contents/${element}/page.js`)
        const pageTitle = Pagemodule.title
        return (<li key={`${element}`}><a href={`contents/${element}`}>{`${pageTitle}`}</a></li>)
    }))

    return (
        <ul>
            {linkArr}
        </ul>
    )
}