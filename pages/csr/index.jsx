/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from '../../styles/PokemonList.module.css';

const PokemonList = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		async function fetchPokemons() {
			const response = await fetch(
				'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',
			);
			setPokemons(await response.json());
		}

		fetchPokemons();
	}, []);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Pokemon List</h1>
			<h2 className={styles.subtitle}>Client Side Rendering</h2>
			<div className={styles.grid}>
				{pokemons.map((pokemon) => (
					<Link key={pokemon.id} href={`/csr/${pokemon.id}`}>
						<a className={styles.card}>
							<img
								src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
								alt={pokemon.name}
							/>
							<h3>{pokemon.name}</h3>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default PokemonList;
