import { Route, Routes } from 'react-router-dom'
import './App.css'

import { AuthProvider } from './context/AuthProvider'
import { PrivateRoute } from './component/PrivateRoute'
import { lazy, Suspense } from 'react'
import ErrorBoundary from './component/ErrorBoundary'
// import Element from './pages/Element/Element'


const Element = lazy(() => import('./pages/Element/Element')
  .then(module => ({
    default: module.Element,
  }))
)
const Category = lazy(() => import('./pages/Category/Category'))
const NotFound = lazy(() => import('./pages/NotFound/Notfound'))
const MainLayout = lazy(() => import('./layout/MainLayout'))
const Login = lazy(() => import('./pages/Login/Login').then(module => ({
  default: module.Login
})))


function App() {


  return (
    <>

      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route path="/category/:categoryname" element={
              <PrivateRoute>
                <ErrorBoundary>
                  <Category />
                </ErrorBoundary>
              </PrivateRoute>
            } />

            <Route path="/category/:categoryname/:id" element={
              <PrivateRoute>
                <ErrorBoundary>
                  <Element />
                </ErrorBoundary>
              </PrivateRoute>
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
