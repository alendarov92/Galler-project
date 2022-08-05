import { Routes, Route, useNavigate } from 'react-router-dom';
import uniqid from 'uniqid'

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
    const navigate = useNavigate()
   


    const addCardHandler = (cardData) => {
        setGallery(state => [
            ...state,
            {
                ...cardData,
                _id: uniqid(),
            },
        ]);
        navigate('/catalogue')
    }
    useEffect(() => {
        gallerServices.getAll()
            .then(result => {
                setGallery(result)
            })
    }, []);

    return (

        <div id="box">

            <Header />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home gallery={gallery}/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<Create addCardHandler={addCardHandler} />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/catalogue" element={<Catalogue gallery={gallery}/>} />
                    <Route path="/catalogue/:gameId" element={<Details gallery={gallery}/>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
