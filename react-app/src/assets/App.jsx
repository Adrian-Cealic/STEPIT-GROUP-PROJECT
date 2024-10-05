import React from 'react'
// Components
import Navbar from './components/Navbar'
import PayPage from './components/PayPage'
import PayPage2 from './components/PayPage2'
import PayPage3 from './components/PayPage3'
import PayPage4 from './components/PayPage4'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/pay1' element={<PayPage/>}></Route>
    <Route path='/pay2' element={<PayPage2/>}></Route>
    <Route path='/pay3' element={<PayPage3/>}></Route>
    <Route path='/pay4' element={<PayPage4/>}></Route>
   </Routes>
   </BrowserRouter>
     
    
  )
}

export default App