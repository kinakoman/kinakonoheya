export default function Meta({ title }) {
    const text = `${title} | きなこの部屋`
    return (
        <>
            <title>{text}</title>
            <link rel="icon" href="../icon.png"></link>
        </>
    )
}