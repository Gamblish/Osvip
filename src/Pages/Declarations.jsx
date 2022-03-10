import { useContext,useEffect } from "react"
import React from 'react'
import { Context } from "../Context"

export default function Declarations() {
    const { setCurrentPage } = useContext(Context)
	useEffect(()=>setCurrentPage('/declarations'),[])
  return (
    <div>Declarations</div>
  )
}
