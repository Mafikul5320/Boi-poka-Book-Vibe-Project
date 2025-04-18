import { Outlet } from 'react-router'
import './App.css'
import Navber from './Navber/Navber'
import Footer from './Footer/Footer'
import Banner from './Banner/Banner'

function App() {


  return (
    <>
      <div className='w-7/8 mx-auto'>
      <Navber></Navber>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
