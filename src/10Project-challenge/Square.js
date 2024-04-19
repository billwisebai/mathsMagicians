import React from 'react'
import styles from './index.module.css'

const Square = ({
    colorValue, hexValue, isDarkColor
}) => {
    return (
        <section
            className={`${styles.colorBoard} ${isDarkColor ? styles.darkColor : styles.lightColor}`}
            style={{
                backgroundColor: colorValue || 'white',
            }}
        >
            <p id={styles.colorName} >{colorValue ? colorValue : 'Empty Value'}</p>
            <p id={styles.colorName} >{hexValue ? hexValue : null}</p>
        </section>
    )
}

export default Square
