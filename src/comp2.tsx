
   
interface ChildComponentProps {
    count:any ,
    setCount:any
  }
  const Comp2: React.FC<ChildComponentProps> = ({ count, setCount }) => {
    console.log('re-render2')
     
       return (
         <>
           <div>
            <button onClick={()=>setCount(count++)} ></button>
             con: {count}
           </div>
         </>
       )
     }
    
     export default Comp2
