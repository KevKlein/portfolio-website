import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { GiBarbedSun } from "react-icons/gi";
import products from './data/products.js';
import Navigation from './modules/Navigation.jsx';
import HomePage from './modules/HomePage';
import TopicsPage from './modules/TopicsPage';
import GalleryPage from './modules/GalleryPage';
import ShenanigansPage from './modules/shenanigans/ShenanigansPage';
import ShenaniganAdd from './modules/shenanigans/ShenaniganAdd';
import ShenaniganEdit from './modules/shenanigans/ShenaniganEdit';
import ContactPage from './modules/ContactPage';
import OrderPage from './modules/OrderPage';
import StaffPage from './modules/StaffPage';


function App() {
  const [shenanigan, setShenanigan] = useState([]);

  return (
    <>
      <header>
        <h1>
          <i><GiBarbedSun /></i>
          Kevin Klein
        </h1>
      </header>
      <Router>
        <Navigation />
        <main>
          <section>
              <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="/topics" element={<TopicsPage />}></Route>
                  <Route path="/gallery" element={<GalleryPage />}></Route>
                  <Route path="/shenanigansPage" element={<ShenanigansPage setShenanigan = {setShenanigan}/>}></Route>
                  <Route path="/createShenanigan" element={<ShenaniganAdd />} />
                  <Route path="/updateShenanigan" element={<ShenaniganEdit shenaniganToEdit={shenanigan} />} />
                  <Route path="/contact" element={<ContactPage />}></Route>
                  <Route path="/order" element={<OrderPage products={products} />}></Route>
                  <Route path="/staff" element={<StaffPage />}></Route>

              </Routes>
          </section>
        </main>
      </Router>
      <footer>
          <p>&copy; {new Date().getFullYear()} Kevin Klein</p>
      </footer>
    </>
  )
}

export default App