import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/Head'
import { Category, Element, NotFound } from './pages'



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/category/:categoryname" element={<Category />} />
          <Route path="/category/:categoryname/:id" element={<Element />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
