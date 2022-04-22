import HomePage from "./pages/HomePage/homepage.component";
import {Route,Routes} from 'react-router-dom'
import ShopPage from "./pages/ShopPage/shoppage.component";
import SigninSignup from "./pages/sign-in-and-sign-up/Sign-in-and-Sign-up.component";
import Header from "./components/header/header.component";


function App() {
  return (
    <>
    <Header />
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/signin' element={<SigninSignup/>} />
          
      </Routes>
    </>
  )
}

export default  App
