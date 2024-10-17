import styles from '@/css/global.module.css'
export default function pageSection({ title, children }) {
    return (
        <>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                {children}
            </div>
        </>
    )
}