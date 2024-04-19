import styles from './index.module.css'

const Header = ({title}) => {
    return (
        <header className={styles.header}>
            {/* <h1>Groceries List</h1> */}
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header
