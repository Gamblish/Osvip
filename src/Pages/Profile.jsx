import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'
import { useEffect } from 'react'

export default function Profile() {
	const { setCurrentPage, store, setAuth } = useContext(Context)
	useEffect(() => setCurrentPage('/profile'), [])
	return (
		<div>Profile</div>
	)
}
