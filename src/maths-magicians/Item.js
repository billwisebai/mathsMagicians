import styles from './index.module.css'

const Item = ({item}) => {
    return (
        <li className={styles.question_li}>
            {item}
        </li>
    )
}
export default Item
