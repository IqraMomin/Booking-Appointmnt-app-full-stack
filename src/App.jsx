import { useContext, useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import UserList from './components/UserList'
import { UserContext } from './context/UserContext'

function App() {
  const userCtx = useContext(UserContext);

  useEffect(()=>{
    userCtx.getUsers();
  },[]);

  return (
    <>     
        <Form />
        <UserList />

    </>
  )
}

export default App
