
import LinkList from "@/components/main/LinkList"

export default function Home() {
  return (
    <>
      <LinkList />
    </>
  );
}

const data = {
  title: "トップ"
}
export const metadata = {
  title: `${data.title} | きなこの部屋`
}