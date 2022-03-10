import { useEffect,useContext } from "react"
import React from 'react'
import { Context } from "../Context"

export default function Tests() {
    const { setCurrentPage } = useContext(Context)
	useEffect(()=>setCurrentPage('/tests'),[])
  return (
    <div>Tests</div>
  )
}
