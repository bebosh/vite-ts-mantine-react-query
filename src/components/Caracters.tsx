import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import  Character  from "./Character";

export const Caracters = () => {
  const [page, setPage] = useState(1);
  
  const fetchData = async (queryKey:any) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
    return response.json();
    
  };

  const { data, status, isPreviousData, isLoading, isError } = useQuery(['characters', page], fetchData, {keepPreviousData:true});

  if (isLoading) {
    return(
    <div>Loading...</div>
    )
  }

  if (isError) {
    return(
    <div>Error</div>
    )
  }

  return (
    
    <div className='characters'> {data.results.map((character:any) => (
        <Character  key={character.id} character = {character}/>
      ))}
      <div>
        <button disabled={!data.info.prev} onClick ={()=>setPage(page - 1)} >Previous</button>
        <button  disabled={isPreviousData && !data.info.next } onClick ={()=>setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

/**
 * old method with integrated fetch
  export const Caracters = () => {
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    console.log(data);
    setCharacters(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    // @ts-ignore
    <div>{characters.map((character) => <div>{ character.name }</div>)}</div>
  );

};

 */
