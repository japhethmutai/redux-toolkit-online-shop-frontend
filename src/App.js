import './App.css';
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

function App() {
    return (
        <div className="App">
          <BrowserRouter>
            <ToastContainer />
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
    );
}

export default App;
