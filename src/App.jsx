import {useEffect, useState} from 'react'
import './App.css'
import Base from "./component/Base.jsx";
import axios from "./api/axios.js";
import memberRequests from "./api/request.js";

function App() {
    const fetchUrl = memberRequests.fetchMembers;

    useEffect(() => {
        const fetchData = async () => {
            const response = axios.get(fetchUrl);
            console.log("response : ", response);
        }
        fetchData();
        console.log(fetchUrl);
    }, []);


  return (
    <>
        <Base/>
    </>
  )
}

export default App
