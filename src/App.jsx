import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import UserList from './components/UserList'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <>
      <UserProvider>
        <Form />
        <UserList />
      </UserProvider>

    </>
  )
}

export default App
