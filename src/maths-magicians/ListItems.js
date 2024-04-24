import Item from "./Item"
import styles from './index.module.css'

const ListItems = ({ list }) => {
    return (
        <ul className={styles.question_ul}>
            {list && list.length > 0 && list.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </ul>
    )
}

export default ListItems
