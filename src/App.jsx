
// import Browser Router
import { BrowserRouter,Routes,Route } from 'react-router-dom'
//imported pages
import About from './css/second-style/pages/about/About'
import Home from './css/second-style/pages/Home/Home'

import Contact from './css/second-style/pages/contact/Contact'
import Gallery from './css/second-style/pages/gallery/Gallery'
import NotFound from './css/second-style/pages/notFound/NotFound'
import Plans from './css/second-style/pages/plans/Plans'
import Trainers from './css/second-style/pages/trainers/Trainers'
import Navbar from './Components-For-pages/Navbar'
import { Footer } from './Components-For-pages/Footer'
//end imported pages



function App() {

  return (
    <BrowserRouter className=''>
      <Navbar/>
<Routes className="">
  <Route index element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='gallery' element={<Gallery/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='trainers' element={<Trainers/>}/>
  <Route path='*' element={<NotFound/>}/>
  <Route path='plans' element={<Plans/>}/>


</Routes>
<Footer/>
</BrowserRouter>
  )
}

export default App
