import React, { useState } from 'react';
import axios from "axios"

const App: React.FC = () => {
  const [papiesz, setpapiesz] = useState()
  axios.get("/api").then(resp => setpapiesz(resp.data))

  return (
    <div className="App">
      <h1>{papiesz}</h1>
    </div>
  );
}

export default App;
