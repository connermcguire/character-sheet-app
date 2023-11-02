import { useState, useEffect } from 'react'
import Column from './components/Column'
import './styles/global.css'

const App = () => {
	// state variables

	// other hooks (like useEffect, useCallback, etc)
	useEffect(() => {}, [])

	// util functions/ handlers (example: handleClickButton)

	// jsx
	return (
		<div className='board'>
			<Column name={'todo'} />
			<Column name={'doing'} />
			<Column name={'done'} />
		</div>
	)
}

export default App
