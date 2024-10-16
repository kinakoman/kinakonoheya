export default function Meta({ title }) {
    const text = `${title} | ホームページ`
    return (
        <>
            <title>{text}</title>
            <link rel="icon" href="../icon.png"></link>
        </>
    )
}