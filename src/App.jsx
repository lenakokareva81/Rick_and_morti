import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Category, Element, NotFound } from './pages'
import { Login } from './pages/Login/Login'
import { AuthProvider } from './context/AuthProvider'
import Main from './pages/Main/Main'
import { PrivateRoute } from './component/PrivateRoute'



function App() {


  return (
    <>
      <AuthProvider>

        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="/category/:categoryname" element={<PrivateRoute>
              <Category />
            </PrivateRoute>
            } />
            <Route path="/category/:categoryname/:id" element={
              <PrivateRoute><Element /></PrivateRoute>
            } />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
