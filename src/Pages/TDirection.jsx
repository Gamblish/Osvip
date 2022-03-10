import React,{useContext,useEffect} from 'react'
import { Context } from '../Context'  
export default function TDirection() {
  const { setCurrentPage } = useContext(Context)
	useEffect(()=>setCurrentPage('/tdirection'),[])

  return (
    <div>TDirection</div>
  )
}
