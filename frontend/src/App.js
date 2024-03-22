// import { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  // const healthChk = async () => {
    // const body = {
    //   status: 200,
    //   name: 'abc'
    // }
    // const resp = await fetch("http://localhost:8000/", {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    //   headers: {
    //     'Content-Type': "application/json"
    //   }
    // })
    // const jsonResp = await resp.json()
    // console.log(jsonResp);
  // }

  // useEffect(() => {
  //   ;(async () => {await healthChk()})();
  // }, [])
  return (
    <div className="App">
      <Home/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
