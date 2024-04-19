import styles from './index.module.css'

const JsonList = ({
  contentList
}) => {
  return (
    <main className={styles.main}>
      {/* <ul>
        {contentList.map((content, index) => (
          <li key={index}>
            {JSON.stringify(content)}
          </li>
        ))}
      </ul> */}
      <table className={styles.dataTable} >
        <thead>
          <tr>
            {Object.keys(contentList[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contentList.map((content, index) => (
            <tr key={index}>
              {Object.values(content).map((value, index) => (
                <td key={index}>{JSON.stringify(value)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default JsonList
