import React, {useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Mutation } from 'react-apollo';

import { GET_ALL_SONGS, NEW_PLAYLIST, GET_ALL_LISTS } from "../../queries";
import './index.css';

const PlayList = () => {
  const [ openAdd, setOpenAdd ] = useState(false);
  const [ listName, setListName] = useState('');

  const lists = useQuery(GET_ALL_LISTS);
  console.log(lists.data);

  const songs = useQuery(GET_ALL_SONGS);
  if (songs.loading) return <p>Loading...</p>;
  if (songs.error) return <p>Error</p>;


  const addingList = (event, addList) => {
    event.preventDefault();
    addList({
      variables: {
        name: listName
      }
    });
    setListName('');
    setOpenAdd(false);
  };

  return (
    <>
      <h5>Плейлисты</h5>
      <div className="playlist_area">
        <div className="playlist_area__div">
          <p className="playlist_area__p">test</p>
        </div>
      </div>
      <button
        onClick={ () => setOpenAdd(!openAdd ) }
      >
        { openAdd ? <span>Отменить</span> : <span>Добавить новый плейлист</span>}
      </button>
      {openAdd
        ? (
        <Mutation mutation={NEW_PLAYLIST} refetchQueries={ [ {query: GET_ALL_LISTS} ] }>
          { (addList) => (
            <form onSubmit={ event => addingList(event, addList) } className="new_playlist">
              <input type="text" onChange={ (event) => setListName(event.target.value)}/>
              <button type="submit">Добавить</button>
            </form>
          )}
        </Mutation>
        )
        : null
      }
    </>
  )
};

export default PlayList;