import Navbar from "./components/Navbar";
import Card from './components/Card'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Card4 from './components/Card4'
import Card5 from './components/Card5'
import Card6 from './components/Card6'
import Card7 from './components/Card7'
import Card8 from './components/Card8'
import Card9 from './components/Card9'
import Card10 from './components/Card10'
import Card11 from './components/Card11'
import Card12 from './components/Card12'
import React, {  useState , useEffect } from 'react'

function App() {
  const[clickCount , Addclick] = useState(0);
  const[ekleBool,chanceBool] = useState(true)
  const [data, setdata] = useState([])
  
      const handleClick = () => {
        Addclick(clickCount + 1)

      if (document.querySelectorAll(".my-card")[0].classList.contains(".bg-1")) {
      }else{
        document.querySelectorAll(".my-card")[0].classList.add("bg-1")
      }
    };
    const handleClick1 = () => {   
       Addclick(clickCount + 1)

      if (document.querySelectorAll(".my-card")[1].classList.contains(".bg-2")) {
      }else{
        document.querySelectorAll(".my-card")[1].classList.add("bg-2")
      }
    };
    const handleClick2 = () => {
      Addclick(clickCount + 1)

      if (document.querySelectorAll(".my-card")[2].classList.contains(".bg-3")) {
      }else{
        document.querySelectorAll(".my-card")[2].classList.add("bg-3")
      }
    };
    const handleClick3 = () => {
      Addclick(clickCount + 1)
      if (document.querySelectorAll(".my-card")[3].classList.contains(".bg-4")) {
      }else{
        document.querySelectorAll(".my-card")[3].classList.add("bg-4")
      }
    };
    const handleClick4 = () => {
      Addclick(clickCount + 1)
      if (document.querySelectorAll(".my-card")[4].classList.contains(".bg-5")) {
      }else{
        document.querySelectorAll(".my-card")[4].classList.add("bg-5")
      }
    };
    const handleClick5 = () => {
      Addclick(clickCount + 1)
      if (document.querySelectorAll(".my-card")[5].classList.contains(".bg-6")) {
      }else{
        document.querySelectorAll(".my-card")[5].classList.add("bg-6")
      }
    };

    const handleClick6 = () => {
      Addclick(clickCount + 1)
      if (document.querySelectorAll(".my-card")[6].classList.contains(".bg-1")) {
      }else{
        document.querySelectorAll(".my-card")[6].classList.add("bg-1")
      }
    };

    const handleClick7 = () => {
      Addclick(clickCount + 1)
      if (document.querySelectorAll(".my-card")[7].classList.contains(".bg-2")) {
      }else{
        document.querySelectorAll(".my-card")[7].classList.add("bg-2")
      }
    };

    const handleClick8 = () => {
      Addclick(clickCount + 1)
      if (document.querySelectorAll(".my-card")[8].classList.contains(".bg-3")) {
      }else{
        document.querySelectorAll(".my-card")[8].classList.add("bg-3")
      }
    };

    const handleClick9 = () => {
      Addclick(clickCount + 1)
      if (document.querySelectorAll(".my-card")[9].classList.contains(".bg-5")) {
      }else{
        document.querySelectorAll(".my-card")[9].classList.add("bg-5")
      }
    };

    const handleClick10 = () => {
      Addclick(clickCount + 1)
      if (document.querySelectorAll(".my-card")[10].classList.contains(".bg-4")) {
      }else{
        document.querySelectorAll(".my-card")[10].classList.add("bg-4")
      }
     
    };
    const handleClick11 = () => {
      Addclick(clickCount + 1)
      if (document.querySelectorAll(".my-card")[11].classList.contains(".bg-6")) {
      }else{
        document.querySelectorAll(".my-card")[11].classList.add("bg-6")
      }
    };
    
     const clickMod = (event) =>{
      if(!ekleBool){
        data.push(event.target)
        console.log("kalan tek" + clickCount)
        chanceBool(!ekleBool)
        
      }
      else if(ekleBool){
        console.log("kalan çift" + clickCount)
        data.push(event.target)
        chanceBool(!ekleBool)
      }
      if (data[1]!=null && data[0]!=null ){
        if (data[1].classList[3] == data[0].classList[3]){
          console.log("dogru")
          console.log(data[0])

        }     
        else{ 
          setTimeout(() => {
            data[0].classList.remove(data[0].classList[3])
            data[1].classList.remove(data[1].classList[3])
          }, 1500);
         
        }
        
        setTimeout(() => {
          data.shift()
          data.shift()
        }, 1750);
        
      }
       
     }
    
    
   
    
        
  return (
    <div className="App">
        <Navbar clickCount ={clickCount}/>
      <div className="alert alert-warning">
        <h4>This App Need Bigger Screen Size </h4>
      </div>
<div className="cards-grid container">
    <Card clickCount={clickCount} onClick1 = {handleClick} onClick={clickMod}/>    
    <Card2 clickCount={clickCount} onClick2 = {handleClick1} onClick={clickMod}/>  
    <Card3 clickCount={clickCount} onClick3 = {handleClick2} onClick={clickMod}/>  
    <Card4 clickCount={clickCount} onClick4 = {handleClick3} onClick={clickMod}/>  
    <Card5 clickCount={clickCount} onClick5 = {handleClick4} onClick={clickMod}/> 
    <Card6 clickCount={clickCount} onClick6 = {handleClick5} onClick={clickMod}/>   
    <Card7 clickCount={clickCount} onClick7 = {handleClick6} onClick={clickMod}/>
    <Card8 clickCount={clickCount} onClick8 = {handleClick7} onClick={clickMod}/>
    <Card9 clickCount={clickCount} onClick9 = {handleClick8} onClick={clickMod}/>
    <Card10 clickCount={clickCount} onClick10 = {handleClick9} onClick={clickMod}/>
    <Card11 clickCount={clickCount} onClick11 = {handleClick10} onClick={clickMod}/>
    <Card12 clickCount={clickCount} onClick12 = {handleClick11} onClick={clickMod}/>
</div>       
    </div>
  );
}

export default App;
