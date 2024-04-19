import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';
import styles from './index.module.css';

const Header = ({ title }) => {
  // console.log("header");     

  const { width } = useWindowSize();

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      { width < 768 ? <FaMobileAlt /> 
        : width < 992 ? <FaTabletAlt /> 
          : <FaLaptop />}
    </header>
  )
}

export default Header
