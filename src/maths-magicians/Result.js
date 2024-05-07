import { useState } from 'react'
import styles from './index.module.css'
import NewResult from './NewResult';
import ResultTable from './ResultTable';

const Result = ({ mathQuestion, setShowResult }) => {
    const [editResult, setEditResult] = useState(false);
    const [updatedResult, setUpdatedResult] = useState({});

    return (
        <section className={styles.result}>
            {editResult || mathQuestion.result.length === 0 ?
                (<NewResult
                    mathQuestion={mathQuestion}
                    setEditResult={setEditResult}
                    updatedResult={updatedResult}
                    setUpdatedResult={setUpdatedResult}
                />)
                :
                (<ResultTable
                    mathQuestion={mathQuestion}
                    setEditResult={setEditResult}
                    setUpdatedResult={setUpdatedResult}
                    setShowResult={setShowResult}
                />)
            }
        </section>
    )
}

export default Result
