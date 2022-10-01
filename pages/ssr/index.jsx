/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/PokemonList.module.css';

const PokemonList = ({ pokemons }) => {
	return (
		<>
			<Head>
				<title>Pokemon - Server Side Rendering</title>
			</Head>

			<main className={styles.container}>
				<h1 className={styles.title}>Pokemon List</h1>
				<h2 className={styles.subtitle}>Server Side Rendering</h2>
				<div className={styles.grid}>
					{pokemons.map((pokemon) => (
						<Link key={pokemon.id} href={`/ssr/${pokemon.id}`}>
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
			</main>
		</>
	);
};

export const getServerSideProps = async () => {
	const response = await fetch(
		'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',
	);

	return {
		props: {
			pokemons: await response.json(),
		},
	};
};

export default PokemonList;
