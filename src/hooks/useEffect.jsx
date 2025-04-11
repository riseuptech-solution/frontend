import react,{useEffect, useState} from "react"

export const UseEffectHook=()=>{
const [color,setColor]=useState("Black")
const [brand,setBrand]=useState("b2025")
// SYNTAX OF useEffect
useEffect(
    ()=>{
       
    },[brand,color]
    )
const handeChange=()=>{
    setColor("White")
    
}
 return(
 <div>
           <span>Brand: {brand}</span><br></br>
           <span>Color: {color}</span><br></br>
       <button onClick={handeChange}>Update Color</button>
 </div>
 )
}