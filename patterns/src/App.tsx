import React from 'react'
import EachPatterns from './patterns/Each'
import { Show } from './patterns/Show'
import State from './patterns/States';

function App() {
  const amount = 6;
  const hasLink = true
  return (
    <>
    {/* <main style={{display:'flex',justifyContent:"center",alignItems:'center',width:'400px',flexDirection:'column'}}>
      {amount ===6 && !hasLink &&(
        <>
          <p>bad luck</p>
          <p>sorry</p>
        </>
      )}
      {amount === 6 && hasLink &&(
        <>
          <p>luck</p>
          <p>he is your link</p>
        </>
      )}
      {amount !==6 &&(
        <>
          <p>condicional dont met</p>
        </>
      )}

    </main> */}
    {/* <EachPatterns /> */}
    <main>
      <State/>
{/* 
    <Show>
        <Show.When isTrue={amount === 6  &&  !hasLink}>
          <p>sorry</p>
        </Show.When>
        <Show.When isTrue={amount === 6  &&  hasLink}>
          <p>Ola</p>
          <a href="ola so">Ola so mostrou</a>
        </Show.When>
        <Show.Else>
          <h1>Mostrou</h1>
        </Show.Else>
    </Show> */}
    </main>
    </>
  )
}

export default App
