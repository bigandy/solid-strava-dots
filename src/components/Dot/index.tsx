import styles from '../DotWithPopover/styles.module.css'

export const Dot = () => {
    return (
        <button class={`${styles.dot} ${styles.singleDot} dot`}></button>
    )
}