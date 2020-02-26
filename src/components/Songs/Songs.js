import React, {useState} from 'react';
import { useQuery } from "@apollo/react-hooks";
import { Mutation } from 'react-apollo';

import { GET_PAY_LIST, NEW_SONG } from "../../queries";
import './index.css';

const Songs = (props) => {
  const [ openAdd, setOpenAdd ] = useState(false);
  const [newSong, setNewSong] = useState({
    name: '',
    author: '',
    link: ''
  });

  const { loading, data } = useQuery(GET_PAY_LIST, {
    variables: {playList: props.playlist}
  });

  const { name, author, link } = newSong;
  const addingSong = (event, addSong) => {
    event.preventDefault();
    addSong({
      variables: {name, author, link, playList: props.playlist}
    });
    setOpenAdd(false);
  };

  if (loading) return <p>Loading</p>;
  const songs = data.getPlayList.map(item => (
    <div className="songs_area_title" key={item._id}>
      <div className="songs_area__div" style={{width: '15%'}}><p>{item.author}</p></div>
      <div className="songs_area__div" style={{width: '20%'}}><p>{item.name}</p></div>
      <div className="songs_area__div"><p>{item.link}</p></div>
      <div className="songs_area__div" style={{width: '7vw'}}><button>Изменить</button></div>
      <div className="songs_area__div" style={{width: '7vw'}}><button>Удалить</button></div>
    </div>
  ));
  if (props.playlist !== '') {
    return (
      <div>
        <div className="songs_area" style={{marginTop: '70px'}}>
          <div style={{display: 'flex'}}>
            <h5 style={{marginRight: '10px'}}>Плейлист:</h5>
            <h5>{props.playlist}</h5>
          </div>
          <div className="songs_area_title">
            <div className="songs_area__div" style={{width: '15%'}}><p>Автор</p></div>
            <div className="songs_area__div" style={{width: '20%'}}><p>Название</p></div>
            <div className="songs_area__div"><p>Ссылка</p></div>
            <div className="songs_area__div" style={{width: '7vw', fontSize: '16px'}}><p>Изменить</p></div>
            <div className="songs_area__div" style={{width: '7vw', fontSize: '16px'}}><p>Удалить</p></div>
          </div>
          {songs}
        </div>
        <button
          onClick={ () => setOpenAdd(!openAdd ) }
        >
          { openAdd ? <span>Отменить</span> : <span>Добавить новый трек</span>}
        </button>
        { openAdd ? (
          <Mutation mutation={NEW_SONG} refetchQueries={[{query: GET_PAY_LIST, variables: {playList: props.playlist}}]}>
            {(addSong) => (
              <form className="new_playlist new_song" onSubmit={(event) => addingSong(event, addSong)}>
                <input type="text" placeholder="Автор" required onChange={event => setNewSong({...newSong, author: event.target.value}) }/>
                <input type="text" placeholder="Название" required onChange={event => setNewSong({...newSong, name: event.target.value})}/>
                <input type="text" placeholder="Ссылка" required onChange={event => setNewSong({...newSong, link: event.target.value})}/>
                <button type="submit" style={{marginTop: '15px'}}>Добавить</button>
              </form>
            )}
          </Mutation>
        )
          : null
        }
      </div>
    )
  }
  return null
};

export default Songs;