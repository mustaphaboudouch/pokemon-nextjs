/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '../../../styles/PokemonDetails.module.css';

const PokemonDetails = () => {
	const {
		query: { id },
	} = useRouter();
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		async function fetchPokemon() {
			const response = await fetch(
				`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`,
			);
			setPokemon(await response.json());
		}

		if (id) fetchPokemon();
	}, [id]);

	if (!pokemon) return null;

	return (
		<>
			<Head>
				<title>Pokemon - Client Side Rendering</title>
			</Head>

			<main className={styles.container}>
				<Link href='/csr'>
					<a className={styles.backlink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z'
								clipRule='evenodd'
							/>
						</svg>
						Back to List
					</a>
				</Link>
				<div className={styles.infos}>
					<img
						className={styles.image}
						src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
						alt={pokemon.name}
					/>
					<div>
						<h1 className={styles.name}>{pokemon.name}</h1>
						<div className={styles.types}>
							{pokemon.type.map((type) => (
								<span key={type} className={styles.badge}>
									{type}
								</span>
							))}
						</div>
						<table className={styles.stats}>
							<tbody>
								{pokemon.stats.map((stat) => (
									<tr key={stat.name}>
										<th>{stat.name}</th>
										<td>{stat.value}%</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</>
	);
};

export default PokemonDetails;
