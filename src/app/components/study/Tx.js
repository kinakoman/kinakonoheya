import styles from '@/css/global.module.css'

export default function Text({ children }) {
    return (
        <div className={styles.textStudy}>
            {children}
        </div>
    )
}