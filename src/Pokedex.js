import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		let title;
		if(this.props.iswinner){
			title = <h2 className='Pokedex-winner'>Winner😎😎</h2>
		}

		else
			title = <h2 className='Pokedex-loser'>Loser😒😢</h2>

		return (
			<div className="Pokedex">
				{title}
				<h4>Total experience : {this.props.exp}</h4>
				<div className="Pokedex-cards">
					{this.props.pokemon.map((p) => (
						<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
					))}
				</div>
			</div>
		);
	}
}

export default Pokedex;
