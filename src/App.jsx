import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import { useEffect } from 'react';
import Home from './pages/Home.jsx';


function App (){
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
    <Home/>
     
    </>
  )
}



export default App