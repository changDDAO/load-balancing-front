import {useEffect, useState} from 'react'
import './App.css'
import Base from "./component/Base.jsx";
import axios from "./api/axios.js";
import requests from "./api/request.js";

function App() {
    const fetchUrl = requests.fetchMembers;

    useEffect(() => {
        const data = async() => {
            await axios.get(fetchUrl);
        }
        console.log(data);
    }, []);


  return (
    <>
        <Base/>
    </>
  )
}

export default App
