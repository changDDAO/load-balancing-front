import {useEffect, useState} from 'react'
import './App.css'
import Base from "./component/Base.jsx";
import axios from "./api/axios.js";
import memberRequests from "./api/request.js";
import {Button} from "@mui/material";

function App() {
    const id = 2;
    const fetchUrl = memberRequests.update(id);

    useEffect(() => {
        const fetchData = async () => {
            const response = axios.put(fetchUrl,{name:"changed"});
            console.log("response : ", response);
        }
        fetchData();
        console.log(fetchUrl);
    }, []);


  return (
    <>
        <Button variant="contained">전체 Team 조회</Button>
        <Button style={{marginLeft:"13px"}} variant="outlined">전체 Member 조회</Button>
        {/*<Base/>*/}
    </>
  )
}

export default App
