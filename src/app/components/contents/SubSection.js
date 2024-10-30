import styles from '@/css/global.module.css'

export default function SubSection({ children }) {
    return (
        <h3 className={`${styles.subsection}`}>
            ・{children}
        </h3>
    )
}