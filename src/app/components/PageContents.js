import styles from '@/css/global.module.css'

export default function pageContents({ title, children }) {
    return (
        <div className={styles.contents}>
            <h1 className={styles.contentsTitle}>{title}</h1>
            {children}
        </div>
    )
}