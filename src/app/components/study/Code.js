import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styles from "@/css/global.module.css"
// スタイルの種類ははここから
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/tree/master/src/styles/hljs
// 言語はこちら
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD

const Code = ({ lang, tab, children }) => {
    return (
        <div className={styles.codeBoxStudy}>
            <div style={{ border: " solid rgba(0, 0, 0, 0.2)", borderWidth: (tab == null || tab == "") ? "0px" : "1px 1px 0 1px", fontSize: "13px", padding: "0 10px", width: "fit-content", color: "#445566", fontWeight: "bold", backgroundColor: "#d8e0f0", alignContent: "center", borderRadius: "3px 3px 0 0 " }}>{tab}</div>
            <SyntaxHighlighter language={lang} style={githubGist} customStyle={{ fontSize: "13px", padding: "4px", overflowX: "auto", paddingRight: "40px", border: " solid rgba(0, 0, 0, 0.2) 1px" }}>
                {children}
            </SyntaxHighlighter>
        </div>
    );
};

export default Code;