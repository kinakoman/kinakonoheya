import styles from '@/css/global.module.css'

export default function PageTitle({ children }) {
    return (
        <div className={styles.text}>
            {children}
        </div>
    )
}