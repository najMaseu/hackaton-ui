import React from 'react';
import axios from "axios"

const App: React.FC = () => {

  axios.get("http://patyk.herokuapp.com").then(resp => console.log(resp.data))

  return (
    <div className="App">
      <h1>Chuj</h1>
    </div>
  );
}

export default App;
