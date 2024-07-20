import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Private from './pages/Private'
import ProtectedRoute from './components/ProtectedRoute'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'


function App() {
  
  const [user, setUser] = useState(null);
  const [isFetching, setisFetching] = useState(true)
 
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged (auth, (user)=>{
      if(user){
        setUser(user)
        setisFetching(false)
        return
      }
      setUser(null)
      setisFetching(false)
    })
    return()=> unsubscribe()
  }, []);
  if (isFetching){
    return<h2>Loading...</h2>
  }
  
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/private' element={<ProtectedRoute user={user}>
          <Private />
        </ProtectedRoute>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
