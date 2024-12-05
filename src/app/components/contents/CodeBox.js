import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { hybrid } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { androidstudio } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from "@/css/global.module.css"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { irBlack } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { sunburst } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
// スタイルの種類ははここから
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/tree/master/src/styles/hljs
// 言語はこちら
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD

const CodeBox = ({ lang, comment, children }) => {
    return (
        <div className={styles.codeBox}>
            <div style={{ height: "30px", backgroundColor: "#4d4d4d", paddingLeft: "10px", fontSize: "14px", lineHeight: "30px", color: "#ffffff", overflowX: "auto", whiteSpace: "nowrap", fontFamily: "monospace", borderRadius: "5px 5px 0 0" }}>{comment}</div>
            <SyntaxHighlighter language={lang} style={vs2015} customStyle={{ lineHeight: "1.5", fontSize: "15px", padding: "10px", borderRadius: "0 0 5px 5px", overflowX: "auto" }}>
                {children}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBox;