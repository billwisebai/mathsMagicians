import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const postBodyLength = 25;
    const [ posts, setPosts] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const { data, error, isLoading } = useAxiosFetch('http://localhost:3500/posts')
  
    useEffect(() => {
      setPosts(data);
    },[data])

    useEffect(() => {
      const searchPosts = posts.filter(post => (post.body.toLowerCase()).includes(search.toLowerCase()) || (post.title.toLowerCase()).includes(search.toLowerCase())) 
      setSearchResults(searchPosts.reverse());
    }, [posts, search])

    return (
        <DataContext.Provider value={{
          search, setSearch,
          posts, postBodyLength, error, isLoading,
          searchResults,
          setPosts,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;