import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const host = "http://localhost:9000";

function App() {
  const [cookie, setCookie] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const setCookieHandler = async () => {
    const res = await axios.get(`${host}/set-cookie`, {
      withCredentials: true,
    });
    alert(res.data.message);
  };

  const getCookieHandler = async () => {
    try {
      const res = await axios.get(`${host}/get-cookie`, {
        withCredentials: true,
      });
      setCookie(res.data.cookie);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const fetchResponse = async (statusCode) => {
    try {
      const res = await axios.get(`${host}/response/${statusCode}`);
      setResponseData(res.data.message);
    } catch (error) {
      setResponseData(error.response.data.message);
    }
  };

  return (
    <>
      <div className="cookieDiv">
        <h1 style={{textAlign:"center"}}>Cookie and Response </h1>
        <button onClick={setCookieHandler}>Set Cookie</button>
        <button onClick={getCookieHandler}>Get Cookie</button>
        {cookie && <p style={{margin:"0 10px", fontSize:"20px"}}>Retrieved Cookie: {cookie}</p>}

      
      </div>

      <div className="codeDiv">
        <h2 style={{textAlign:"center"}}>Response Codes</h2>
        <button onClick={() => fetchResponse(200)}>Fetch 200</button>
        <button onClick={() => fetchResponse(201)}>Fetch 201</button>
        <button onClick={() => fetchResponse(400)}>Fetch 400</button>
        <button onClick={() => fetchResponse(404)}>Fetch 404</button>
        <button onClick={() => fetchResponse(500)}>Fetch 500</button>
        {responseData && <p style={{margin:"0 10px", fontSize:"20px"}}>Response: {responseData}</p>}
      </div>
    </>
  );
}

export default App;
