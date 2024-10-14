export default function EachContent({ content1, content2 }) {
    // 変数の設定はreturnの外で
    const text = 'コンテンツ'
    return (
        // styleは{{}}で囲う
        <div style={{ width: '100%', height: '200px', backgroundColor: 'red' }}>
            {/* 変数は{}で囲う */}
            {text}は{content1}と{content2}
        </div>
    )
}