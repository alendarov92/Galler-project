import './App.css';
import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from "react";
import * as gallerServices from './services/galleryServices'

import Catalogue from './components/Catalogue/Catalogue';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        gallerServices.getAll()
            .then(result => {
                setGallery(result)
            }, [])
    });

    return (

        <div id="box">

            <Header />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home gallery={gallery}/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/catalogue" element={<Catalogue gallery={gallery}/>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
