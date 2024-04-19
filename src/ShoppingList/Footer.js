import styles from './index.module.css'

const Footer = ({length}) => {
    const today = new Date();
  return (
    <footer className={styles.footer}>
      <p>{length} list {length === 1 ? "item" : "items"}</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
