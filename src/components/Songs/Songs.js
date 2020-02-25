import React, {useState} from 'react';
import { useQuery } from "@apollo/react-hooks";

import { GET_PAY_LIST } from "../../queries";
import './index.css';

const Songs = (props) => {
  const [ openAdd, setOpenAdd ] = useState(false);

  const { loading, data } = useQuery(GET_PAY_LIST, {
    variables: {playList: props.playlist}
  });

  if (loading) return <p>Loading</p>;
  const songs = data.getPlayList.map(item => (
    <div className="songs_area_title" key={item._id}>
      <div className="songs_area__div"><p>{item.name}</p></div>
      <div className="songs_area__div"><p>{item.link}</p></div>
      <div className="songs_area__div" style={{width: '10%'}}><p>Удалить</p></div>
    </div>
  ));
  if (props.playlist !== '') {
    return (
      <div>
        <div className="songs_area">
          <div style={{display: 'flex'}}>
            <h5 style={{marginRight: '10px'}}>Плейлист:</h5>
            <h5>{props.playlist}</h5>
          </div>
          <div className="songs_area_title">
            <div className="songs_area__div"><p>Название</p></div>
            <div className="songs_area__div"><p>Ссылка</p></div>
            <div className="songs_area__div" style={{width: '10%'}}><p>Удалить</p></div>
          </div>
          {songs}
        </div>
        <button
          onClick={ () => setOpenAdd(!openAdd ) }
        >
          { openAdd ? <span>Отменить</span> : <span>Добавить новый трек</span>}
        </button>
      </div>
    )
  }
  return <p>hui</p>
};

export default Songs;