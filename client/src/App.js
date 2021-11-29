import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/Login.js'
import React, {useEffect, useState} from 'react'

function App() {

    useEffect(()=>{
        //이미 로그인 된 사용자인지 체크 로직
        //window.location.href = "/login";
    },[]);

  return (
    <div className="App">
        <Home></Home>
    </div>
  );
}

export default App;

/*
*
*
*
*
*
*
*
*/