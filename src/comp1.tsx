import { memo } from "react"

function Comp1():JSX.Element{
 console.log('re-render1')
  
    return (
      <>
        <div>
       this component wouda conplict 
        </div>
      </>
    )
  }
  
  export default memo(Comp1)
  