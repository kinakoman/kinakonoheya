import Meta from "@/components/Meta";
import LinkList from "@/components/main/LinkList"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Meta title="トップ" />
      <LinkList />
      <div style={{ height: "2000px" }}></div>
    </>
  );
}
