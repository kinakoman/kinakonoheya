import styles from '@/css/global.module.css'
import "@/css/global.module.css"
import { v4 as uuidv4 } from "uuid"
export default function Sec({ title, children }) {
    return (
        <>
            <div className={styles.sectionStudy}>
                <h2 className={styles.sectionTitleStudy} id={uuidv4()}>{title}</h2>
                {children}
            </div>
        </>
    )
}