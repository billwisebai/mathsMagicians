import React, { useEffect, useState } from 'react'
import TopBar from './TopBar';
import JsonList from './JsonList';

const ProjectChanllenge15 = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const nameList = ['users', 'posts', 'comments'];
  const [name, setName] = useState('users');
  const [contentList, setContentList] = useState([])
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const reqUrl = API_URL + name;
        const response = await fetch(reqUrl);
        if (!response.ok) throw Error('Did not receive expected data')
        const result = await response.json();
        console.log(result);
        setContentList(result);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }      
    }
    setIsLoading(true);
    fetchContent();
    // setTimeout(() => {
    //   fetchContent();
    // },100)
  },[name])

  return (
    <section>
      <TopBar 
        name={name}
        nameList={nameList}
        setName={setName}
      />
      {isLoading && <p style={{ textAlign: 'center'}}>Loading Content...</p>}
      {fetchError && <p style={{ color: 'red', textAlign:'center'}}>{`Error: ${fetchError}`}</p>}
      {!fetchError && !isLoading && <JsonList
        contentList={contentList}
      />}
    </section>
  )
}

export default ProjectChanllenge15
