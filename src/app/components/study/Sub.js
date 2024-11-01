import styles from '@/css/global.module.css'
import { v4 as uuidv4 } from "uuid"


export default function SubSection({ children }) {
    return (
        <h3 className={`${styles.subsectionStudy}`} id={uuidv4()}>
            {children}
        </h3>
    )
}