import { useState, useEffect } from 'react'
import Card from './Card'
import '../styles/global.css'

const Column = ({ name }) => {
	const [cards, setCards] = useState([])

	const handleNewCard = (e) => {
		setCards((prev) => {
			return [Card, ...prev]
		})
	}

	return (
		<div className='column'>
			<div className='column-header'>
				<h3>{name}</h3>
				<button
					id='new-card-btn'
					onClick={handleNewCard}
				>
					+
				</button>
			</div>
			<div className='column-body'>
				{cards.map((item) => (
					<div>{item}</div>
				))}
			</div>
		</div>
	)
}

export default Column
