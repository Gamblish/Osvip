import React,{useEffect,useContext} from 'react'
import { Context } from '../Context'

export default function Contacts() {
    const { setCurrentPage } = useContext(Context)
	useEffect(()=>setCurrentPage('/contacts'),[])
  return (
      
    <div>Contacts</div>
  )
}
