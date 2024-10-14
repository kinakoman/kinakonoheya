import EachContent from "@/components/eachContent";
import '@/page.module.css'



// 子要素としてpropを受け取ることも可能
function Decolation({ children }) {
  return (
    <div style={{ color: "blue", fontSize: '40px', fontWeight: 'bold' }}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* コンポーネントを利用しつつ関数に代入 */}
      <EachContent content1="自己紹介をします" content2="ギャラリー" />
      <EachContent content1="自己紹介" content2="ギャラリー" />
      <Decolation>
        <p>コメント</p>
      </Decolation>
    </>
  );
}
