import Link from "next/link"
export default function Header() {
    return <header>
        <div className="title">
            {/* <a href="/contents/../">きなこの部屋</a> */}
            <Link href="/">きなこの部屋</Link>
        </div>

    </header>

}