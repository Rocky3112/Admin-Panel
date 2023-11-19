
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import SideBar from './components/SideBar'

function App() {


  return (
   <div className='grid-container'>
        <Header></Header>
        <SideBar></SideBar>
        <Home></Home>
   </div>
  )
}

export default App
