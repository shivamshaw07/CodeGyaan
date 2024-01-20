import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] overflow-x-hidden box-border relative z-10 bg-blue-bg'>
      <Routes>
        <Route index path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
