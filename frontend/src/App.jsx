import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Abouts from './pages/Abouts/Abouts'
import Contacts from './pages/Contacts/Contacts'
import LoginPage from './pages/LoginPage/LoginPage'
import SignPage from './pages/SignPage/SignPage'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] overflow-x-hidden box-border relative z-10 bg-blue-bg'>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signin' element={<SignPage/>}/>
        <Route path='/aboutus' element={<Abouts/>}/>
        <Route path='//contact-us' element={<Contacts/>}/>
      </Routes>
    </div>
  )
}

export default App
