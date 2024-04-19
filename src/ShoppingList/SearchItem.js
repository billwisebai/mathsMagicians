import styles from './index.module.css'

const SearchItem = ({searchItem, setSearchItem}) => {
  return (
    <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
            id='searchItem'
            type='text'
            role="searchbox"
            placeholder='Search Item'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
        />
    </form>
  )
}

export default SearchItem
