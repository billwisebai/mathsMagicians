import { useStoreActions } from 'easy-peasy'
import styles from './index.module.css'
import ConfirmDialog from './ConfirmDialog';
import { useState } from 'react';

const ResultTable = ({
    mathQuestion, setEditResult, setUpdatedResult, setShowResult
}) => {
    const [showDeleteResultConfirmDialog, setShowDeleteResultConfirmDialog] = useState(false);
    const [indexOfDeleteResult, setIndexOfDeleteResult] = useState(null);
    const updateQuestions = useStoreActions((actions) => actions.updateQuestions);

    const handleEdit = (index) => {
        setUpdatedResult(mathQuestion.result[index]);
        setEditResult(true);
    }
    const handleDelete = (index) => {
        setShowDeleteResultConfirmDialog(true);
        setIndexOfDeleteResult(index);
    }
    const deleteResult = () => {
        setShowDeleteResultConfirmDialog(false);
        mathQuestion.result.splice(indexOfDeleteResult, 1);
        updateQuestions(mathQuestion);
        if (mathQuestion.result.length === 0) {
            setShowResult(false);
        }
    }

    return (
        <section>
            <table>
                <thead>
                    <tr>
                        {Object.keys(mathQuestion.result[0]).map((header, index) => (
                            <td key={index} className={styles.resultHeader} >{header}</td>
                        ))}
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {mathQuestion.result.map((item, index) => (
                        <tr key={index}>
                            {Object.values(item).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                            <td>
                                <section className={styles.tableButton}>
                                    <button className={styles.submit} onClick={() => handleEdit(index)} >Edit</button>
                                    <button className={styles.reset} onClick={() => handleDelete(index)} >Delete</button>
                                </section>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <section className={styles.submitResetButton}>
                <button className={styles.submit} onClick={() => setEditResult(true)} >Add Result</button>
            </section>
            {showDeleteResultConfirmDialog && <ConfirmDialog name='delete' setConfirmDialog={setShowDeleteResultConfirmDialog} action={deleteResult} />}
        </section>
    )
}

export default ResultTable
