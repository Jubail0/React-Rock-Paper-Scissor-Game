import React from 'react'


function Header({score}) {
  
  return (
    <>
      <section className='header'>
        <div className='container score-con'>
      <h1><span>ROCK</span><br/>
       <span>PAPER</span> <br/> 
       <span>SCISSORS</span>  
       </h1>

      <div className='scoreBar'>SCORE <br/><span>{score}</span> </div>
      
      </div>
   
    </section>

  
    </>
  )
}

export default Header