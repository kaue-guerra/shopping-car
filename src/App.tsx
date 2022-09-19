//import { useEffect, useState } from "react";
//import { db } from './database/firebase-config';
//import { collection, getDocs } from 'firebase/firestore';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Home } from './pages/Home/Home';
import { NewOffer } from './pages/NewOffer/NewOffer';

import 'antd/dist/antd.css';
import './global.css';


function App() {
  
//  const [vehicles, setVehicles] = useState([]);
//  const vehiclesCollectionRef = collection(db, "vehicles");

//  useEffect(()=>{
//    const getVehicles =  async () =>{
//      const data = await getDocs(vehiclesCollectionRef);
//      console.log(data)
//    }

//    getVehicles()
//  }, [])

  return (
   <>
   <Header />
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new-offer" element={<NewOffer />} />
    </Routes>
  </>
  )
}

export default App
