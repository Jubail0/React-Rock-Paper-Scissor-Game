import React from 'react'
import  rules from "../images/image-rules.svg"
import close from "../images/icon-close.svg"
import{NavLink} from "react-router-dom"


function Game({showRules,setShowRules,setMyChoice,modal}) {
    
const choose =(e)=>{
const {name}=e.target 

setMyChoice(name)



}


    const closeModal=()=>{
        setShowRules(false)
    }
    return (
        <>
     <section className='game'>
        <div className='game-container'>

        <div className='row '>
            <div className='col col-md-6 col-lg-6  col-sm-6 col-xs-6 grids '> <NavLink className='scissor scissorDetails' to="/match" name='scissor' onClick={choose}></NavLink> </div>
            <div className='col  col-md-6  col-sm-6 col-lg-6 grids'> <NavLink   className=" paper paperDetails" to="/match"  name='paper' onClick={choose}> </NavLink> </div>
        </div>
        <div className='row '>
            <div className='col grids'> <NavLink className='rock rockDetails' name='rock' onClick={choose}  to="/match"> </NavLink> </div>
        </div>
        
                
        
            
       
       
      
        
        </div>

        {showRules ? 
         <div className='rules-con'>
        <div className='rules-overlay'>
            <div className='rules-content'>
      <h1>Rules</h1>
    <img className='rules-img' src={rules}alt="rules"/>
    <button onClick={closeModal} className='close'><img src={close} alt="close"/></button>
    </div> 
   
   
    </div> 
     </div> : null} 
    

      
     
     </section>
     <button onClick={modal} className='btn btn-lg btn-light  '>Rules</button>
     </>

    )
}

export default Game
