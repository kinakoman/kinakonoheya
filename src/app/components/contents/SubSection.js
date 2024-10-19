import styles from '@/css/global.module.css'

export default function SubSection({ children }) {
    return (
        <div className={styles.text} style={{ marginTop: "30px", fontWeight: "bold" }}>
            ・{children}
        </div>
    )
}