//import { useEffect, useState } from "react";
//import { db } from './database/firebase-config';
//import { collection, getDocs } from 'firebase/firestore';
import { Header } from './components/Header';

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
   <Header />
  )
}

export default App
