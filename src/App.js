import React from 'react'
import "./index.css"
import Header from './Components/Header'
import Game from './Components/Game'
import Match from './Components/match'
import{BrowserRouter as Router,Route , Routes} from "react-router-dom"


function App() {

const[showRules,setShowRules]=React.useState(false)

const[myChoice,setMyChoice]=React.useState("")
const[score,setScore]=React.useState(0)

console.log(score)

  const modal = () =>{
  setShowRules(prevState => !prevState)
  }
  return (
    <>
    <Router>
      
  <Header score = {score}/>
  <Routes>

  <Route path='/'
  element={
  <Game showRules ={showRules} 
  setShowRules ={setShowRules} 
  myChoice={myChoice} 
  setMyChoice={setMyChoice}
  modal={modal}
  
  
  />}/>

  <Route path='/match'
   element={
   <Match myChoice={myChoice}  
  
   setScore ={setScore}
   />}/>
  </Routes>
  </Router>
    </>
  )
}

export default App