import { useState } from 'react';
import { useQuery, QueryFunctionContext } from 'react-query';
import Character from './Character';
import { Result, QK } from '../../interfaces';

export const Caracters = () => {
  const [page, setPage] = useState(1);

  const fetchData = async (queryKey: QK) => {

    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey.queryKey['1']}`
    );

    return response.json();
  };

  const { data, status, isPreviousData, isLoading, isError } = useQuery(
    ['characters', page],
    fetchData,
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="characters">
      {' '}
      {data.results.map((character: Result) => (
        <Character key={character.id} character={character} />
      ))}
      <div>
        <button disabled={!data.info.prev} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button
          disabled={isPreviousData && !data.info.next}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
