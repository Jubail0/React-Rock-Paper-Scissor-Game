import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import Confetti from 'react-confetti'

function Match({myChoice,setScore}) {
  const navigate = useNavigate()
const[house , setHouse]=React.useState("")
const[counter,setCounter]=React.useState(3)
const[playerWin,setPlayerWin]=React.useState("")

 
    const newHousePick = ()=>{
    const pickOne =["rock","paper","scissor"]
    const randomNumber = Math.floor(Math.random()*3)
    const housePicked = pickOne[randomNumber]
    setHouse(housePicked)
  }
  React.useEffect(()=>{
    newHousePick()
  },[])
  
    const result = ()=>{

   if(myChoice === "paper" && house === "rock"){
    setPlayerWin("win")
    setScore( score => score + 1)}

   else if(myChoice === "rock" && house === "scissor"){
    setPlayerWin("win")
    setScore(score => score + 1)}

   else if(myChoice === "scissor" && house === "paper"){
    setPlayerWin("win")
    setScore(score => score + 1)}

    else if(myChoice === "rock" && house === "paper"){
    setPlayerWin("lose")
    setScore(score => score - 1)}

   else if(myChoice === "scissor" && house === "rock"){
    setPlayerWin("lose")
    setScore(score => score - 1)}

   else if(myChoice === "paper" && house === "scissor"){
    setPlayerWin("lose")
    setScore(score => score - 1)}

    else{
      setPlayerWin("draw")
    }
    }

    useEffect(()=>{
    const timer = counter > 0 ? setInterval (()=>{
      setCounter(counter => counter - 1)
    },1000) : result();

    return ()=>{
      clearInterval(timer)
    }
    },[house,counter])
  const restart = ()=>{
    navigate("/")
  }
     
  
  return (
    
    <section className='match'>
     {playerWin ==="win" && <Confetti/>}
         <div className="container match-con">
            <div className='row'>
                <div className='col col-lg-4  col-md-4 col-sm-4 col-xs-4'>
                <h2>You picked <i>{`${myChoice}`}</i></h2>
               { playerWin ==="win" ? <button className={`  myChoice ${myChoice} shadow `}></button> :
                <button className={`myChoice ${myChoice} `}></button>}
                </div>
                
               <div className='col col-lg-4 col-md-4 col-sm-4 col-xs-4 result'>{playerWin === 'win' && <h2>You Win</h2> }
                {playerWin === 'lose' && <h2>You Lose</h2>}
                {playerWin === 'draw' && <h2>Match Draw</h2>}
               {playerWin && <button onClick={restart} className='playAgain_btn'>Play  Again</button>}
                </div>
                <div className='col col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                 
                {counter > 0?
               <> <h2>.......</h2>
                <div className='counter'>{counter}</div></>
                :
                <> <h2>The House picked <i>{`${house}`}</i></h2>
                 { playerWin ==="lose" ? <button className={`  housepick ${house} shadow  `}></button> :
                <button className={`housepick ${house}  `}></button>}
                </> }
                 </div> 

             
            </div>
            
          
         </div>
    </section>
  )
}

export default Match