import { useState, useEffect } from 'react'
import '../styles/global.css'

const Card = () => {
	const [text, setText] = useState('')

	return (
		<div>
			{/* sync state w input */}
			<input type='text' />
		</div>
	)
}

export default Card
