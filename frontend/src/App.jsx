import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './components/Login/Login'
import SignInSite from './components/Singin/SignInSite'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] overflow-x-hidden box-border relative z-10 bg-blue-bg'>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<SignInSite/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='//contact-us' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
