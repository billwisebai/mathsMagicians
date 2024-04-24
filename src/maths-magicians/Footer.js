import styles from './index.module.css';

const Footer = () => {
  console.log("footer");

  const today = new Date()
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer
