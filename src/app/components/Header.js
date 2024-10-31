import Link from "next/link"
import Image from "next/image";
import "@/globals.css"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const path = `${basePath}/logo.png`

export default function Header() {
    return <header>
        <div className="title">
            {/* <a href="/contents/../">きなこの部屋</a> */}
            <Link href="/">
                <Image src={path} alt={"ロゴ画像"} width={400} height={80} style={{ objectFit: 'contain', objectPosition: 'top' }} />
            </Link>
        </div>

    </header>

}