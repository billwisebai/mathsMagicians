import colorNames from 'colornames'
import styles from './index.module.css'

const Input = ({
    colorValue, setColorValue, setHexValue, isDarkColor, setIsDarkColor
}) => {
  return (
    <section className={styles.inputSection}>
      <input
        id={styles.colorNameInput}
        type='text'
        placeholder='Add Color Name'
        value={colorValue}
        onChange={(e) => {
            setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))
        }}
      />
      <button
        id={styles.changeTextColor}
        type='button'
        onClick={() => setIsDarkColor(!isDarkColor)}
        className={isDarkColor ? styles.darkColor : styles.lightColor}
      >
        Change Text Color
      </button>
    </section>
  )
}

export default Input
