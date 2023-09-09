import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Header from './components/Header';
import Footer from './components/Footer';
import Reservas from './pages/Reservas';

const App = () => (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/nosotros' element={<Nosotros/>} />
      <Route exact path='/reservas' element={<Reservas/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
)

export default App;
