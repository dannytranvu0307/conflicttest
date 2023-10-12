import { useState } from 'react'
import Comp1 from './comp1'
import Comp2 from './comp2'

import './App.css'

function App():JSX.Element{
  const [count, setCount] = useState(0)
 console.log('re-render')
  return (
    <>
   <Comp1/>
   <Comp2 count={count} setCount ={setCount}/>
   <div> cha no {count}</div>
    </>
  )
}

export default App
