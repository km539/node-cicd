import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const res = await axios.get("/name");
    console.log(res);
    setUserName(res.data);
  };
  return (
    <div>
      <h1>frontend</h1>
      <h3>Hi {userName}!</h3>
    </div>
  );
}

export default App;
