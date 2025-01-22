import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondCounter from './components/SecondCounter';
import Icon from './components/contador'






const intervalID = setInterval (myCallback, 1000);

let contador = 0
function myCallback () {
      
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
         <div className='counter-holder d-flex align-items-center bg-dark text-white justify-content-center'>
             <Icon/>
             <SecondCounter seconds = {Math.floor(contador/100000)%10}/>
             <SecondCounter seconds = {Math.floor(contador/10000)%10}/>
             <SecondCounter seconds = {Math.floor(contador/1000)%10}/>
             <SecondCounter seconds = {Math.floor(contador/100)%10}/>
             <SecondCounter seconds = {Math.floor(contador/10)%10}/>
             <SecondCounter seconds = {Math.floor(contador/1)%10}/>
          </div>
      </React.StrictMode>
    
    )
     contador ++
    
  }

          <div className='container'>
          <React.StrictMode>
     
          <div className='counter-holder'>
             <Icon/>
             <SecondCounter seconds = {Math.floor(contador/100000)%10}/>
             <SecondCounter seconds = {Math.floor(contador/10000)%10}/>
             <SecondCounter seconds = {Math.floor(contador/1000)%10}/>
             <SecondCounter seconds = {Math.floor(contador/100)%10}/>
             <SecondCounter seconds = {Math.floor(contador/10)%10}/>
             <SecondCounter seconds = {Math.floor(contador/1)%10}/>
          </div>
        </React.StrictMode>

  </div>