import { memo } from "react"

function Comp1():JSX.Element{
 console.log('re-render1')
 console.log('re-render2')
 console.log('re-render3')
  
    return (
      <>
        <div>
       test1
        </div>
      </>
    )
  }
  
  export default memo(Comp1)
  