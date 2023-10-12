import { memo } from "react"

function Comp1():JSX.Element{
 console.log('re-render1')
  
    return (
      <>
        <div>
       component 3
        </div>
      </>
    )
  }
  
  export default memo(Comp1)
  