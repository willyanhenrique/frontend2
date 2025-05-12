import { Home } from '@mui/icons-material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserDetail from './pages/user-detail'
import Header from './components/header'

const App = () => {
  return (
   <BrowserRouter>
   <Header/> 
   <Routes>
    <Route path="/" element= {<Home />} />
    <Route path="/user/:username" element={<UserDetail/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
