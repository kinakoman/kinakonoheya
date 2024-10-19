import styles from '@/css/global.module.css'

export default function SubSection({ children }) {
    return (
        <div className={`${styles.text} ${styles.subsection}`}>
            ・{children}
        </div>
    )
}