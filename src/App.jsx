import React, { useState, useEffect, useRef, memo } from "react";
import './App.css';


function Greeting(name) {
  this.name = name;
  this.display = function (){
  return (`Hello ${this.name}`)
  }
}
const newUser1 = new Greeting("Yelnur")
const hello1 = newUser1.display();

function updateTime(){
function setNow () {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  this.showTime = () => {

return (`Year:${year} Month:${month} Day:${day} Hours:${hours} Minutes:${minutes} Seconds:${seconds}`);
  }
 
  }


return new setNow().showTime();
}
function NameList (props) {
  return (
    <li>{props.names}</li>
  )
}
function UserName (props) {
  return (
    <span>Имя пользователя: {props.name}</span>
  )
}
function ButtonChangeName ({inputValue,onChange, Click}) {

  return(
    <div>
    <input type="text" name="inputValue" id="inputValue" value = {inputValue}
    onChange={function(e) {
      onChange(e.target.value)
    }}/>
  <button onClick={Click}>Изменить имя:</button>
  </div>
  )
}



function App() {
  const [seconds,setSeconds] = useState(0)
  function updateSeconds (){
    return new Date().getSeconds()
  }
  useEffect (() => {
    setSeconds((seconds) => updateSeconds(seconds))
  },setInterval(updateSeconds,1000));






  NameList.defaultProps = {
    names: "Guest",
  }
  const [userName, setUserName] = React.useState("Guest")
  const [inputValue, setInputValue] = React.useState("")

 function changeName () {
  return setUserName(inputValue)
 }
 function inputChange(value){
return setInputValue(value)
 }

  return (
    <div className="container">
      <h1>Привет, мир!</h1>
      <p>Сегодняшняя дата: <span id="date">{updateTime()}</span></p>
      <div>{hello1}</div>
      <ul>Имена:
        <NameList/>
        <NameList names = "Анатолий"/>
        <NameList names = "Григорий"/>
      </ul>
    <header>
      <h1>Я заголовок</h1>
    </header>
    <main>
  <UserName name = {userName}/>
  <ButtonChangeName 
  inputValue={inputValue}
  onChange={inputChange}
  Click = {changeName}/>

  </main>
    <footer>
      <h6>{new Date().getFullYear()}</h6>
      <div>{seconds}</div>
    </footer>
    </div>
  );
}

export default App;
