import React, {useState, useEffect} from 'react';
import {useMutation} from "@apollo/react-hooks";

import './index.css';
import {SIGN_IN} from "../../queries";
import PlayListComponent from "../PlayList";

const AdminPanel = () => {
  const [user, setUser] = useState({
    name: '',
    password: ''
  });
  const [auth, setAuth] = useState('');
  useEffect( () => {
    if (localStorage.getItem('token') !== null) {
      setAuth(true);
    }
  }, [auth]);

  const [signinUser] = useMutation(SIGN_IN);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUser({...user, [name]: value})
  };

  const entering = async event => {
    event.preventDefault();
    const {data} = await signinUser({
      variables: {username: user.name, password: user.password}
    });
    if (data.signinUser.token) {
      await localStorage.setItem('token', data.signinUser.token);
      await setAuth(true);
    }
  };

  if (!auth) {
    return (
      <>
        <h3 className="admin__h3">Войдите, что бы редактировать плейлисты</h3>
        <form className="signin_area" onSubmit={event => entering(event)}>
          <input type="text" placeholder="Имя" required name="name" onChange={event => handleChange(event)}/>
          <input type="password" placeholder="Пароль" required name="password" onChange={event => handleChange(event)}/>
          <button type="submit">Войти</button>
        </form>
      </>
    )
  }
  return <PlayListComponent/>

};

export default AdminPanel;