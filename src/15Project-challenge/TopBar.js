import styles from './index.module.css'

const TopBar = ({
    name, nameList, setName
}) => {
    return (
        <section
            className={styles.topBar}
        >
            {nameList.map((item, index) => (
                <button
                    className={`${styles.topBarButton} ${item === name ? styles.selected : null}`}
                    type="button"
                    key={index}
                    // style={{ 
                    //   backgroundColor: item == name ? 'black' : null, 
                    //   color: item == name ? 'white' : null,
                    // }}
                    onClick={() => setName(item)}
                >
                    {item}
                </button>
            ))}
        </section>
    )
}

export default TopBar
