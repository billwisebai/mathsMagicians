import styles from './index.module.css'

const ConfirmDialog = ({ name, setConfirmDialog, action }) => {
    return (
        <main className={styles.overlap}>
            <section className={styles.confirmDialog}>
                <h3>Are you sure to {name} ?</h3>
                <section className={styles.submitResetButton}>
                    <button className={styles.submit} onClick={() => action()} >Confirm</button>
                    <button className={styles.reset} onClick={() => setConfirmDialog(false)} >Cancel</button>
                </section>
            </section>
        </main>
    )
}

export default ConfirmDialog
