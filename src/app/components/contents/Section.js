import styles from '@/css/global.module.css'
import "@/css/global.module.css"
import { v4 as uuidv4 } from "uuid"
export default function Section({ title, children, id }) {
    return (
        <>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle} id={uuidv4()}>{title}</h2>
                {children}
            </div>
        </>
    )
}